import { neon } from "@neondatabase/serverless";

export const CONSENT_TEXT_VERSION = "sms-marketing-v1-2026-06-20";
export const CONSENT_TEXT =
  "I agree to receive SMS messages from ClearKey Solutions and the relevant ClearKey-powered app. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe.";

const EXACT_RETURN_HOSTS = new Set([
  "clearkey.solutions",
  "connect.clearkey.solutions",
  "legal.clearkey.solutions",
]);

function isAllowedHostname(hostname) {
  const host = String(hostname || "").toLowerCase().replace(/\.$/, "");
  return (
    EXACT_RETURN_HOSTS.has(host) ||
    host.endsWith(".clearkey.solutions") ||
    host.endsWith(".cksites.dev")
  );
}

export function validateReturnUrl(value) {
  if (!value) return null;
  let url;
  try {
    url = new URL(String(value));
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || !isAllowedHostname(url.hostname)) return null;
  url.username = "";
  url.password = "";
  url.hash = "";
  return url.toString();
}

export function allowedReturnOrigin(value) {
  const validated = validateReturnUrl(value);
  return validated ? new URL(validated).origin : null;
}

function corsOrigin(request) {
  const origin = request?.headers?.get("origin");
  if (!origin) return null;
  try {
    const url = new URL(origin);
    return url.protocol === "https:" && isAllowedHostname(url.hostname)
      ? url.origin
      : null;
  } catch {
    return null;
  }
}

export function json(data, status = 200, request) {
  const origin = corsOrigin(request);
  const headers = {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store, max-age=0",
    "x-content-type-options": "nosniff",
    vary: "Origin",
  };
  if (origin) {
    headers["access-control-allow-origin"] = origin;
    headers["access-control-allow-methods"] = "POST,OPTIONS";
    headers["access-control-allow-headers"] =
      "content-type, authorization, x-clearkey-consent-key";
  }
  return new Response(JSON.stringify(data), { status, headers });
}

export function errorJson(error, fallback, request) {
  const status = Number(error?.status) || 500;
  const message = status >= 500 ? fallback : error?.message || fallback;
  console.error(JSON.stringify({
    event: "sms_consent_api_error",
    status,
    message: error?.message || fallback,
  }));
  return json({ ok: false, error: message }, status, request);
}

export function options(request) {
  const origin = corsOrigin(request);
  if (request.headers.get("origin") && !origin) {
    return json({ ok: false, error: "Origin is not allowed" }, 403, request);
  }
  return json({ ok: true }, 200, request);
}

export async function readJson(request) {
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > 16_384) {
    const error = new Error("Request body is too large");
    error.status = 413;
    throw error;
  }
  try {
    return await request.json();
  } catch {
    const error = new Error("Request body must be valid JSON");
    error.status = 400;
    throw error;
  }
}

export function requireDb(env) {
  if (!env.DATABASE_URL) throw new Error("Missing DATABASE_URL environment variable");
  return neon(env.DATABASE_URL);
}

async function secureEqual(left, right) {
  const [a, b] = await Promise.all([sha256(left), sha256(right)]);
  let difference = a.length ^ b.length;
  for (let index = 0; index < Math.max(a.length, b.length); index += 1) {
    difference |= (a.charCodeAt(index) || 0) ^ (b.charCodeAt(index) || 0);
  }
  return difference === 0;
}

export async function requireApiKey(request, env) {
  if (!env.CONSENT_API_SECRET) {
    const error = new Error("Consent API is not configured");
    error.status = 503;
    throw error;
  }
  const authorization = request.headers.get("authorization") || "";
  const bearer = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
  const header = request.headers.get("x-clearkey-consent-key") || "";
  if (
    !(await secureEqual(bearer, env.CONSENT_API_SECRET)) &&
    !(await secureEqual(header, env.CONSENT_API_SECRET))
  ) {
    const error = new Error("Unauthorized");
    error.status = 401;
    throw error;
  }
}

export function normalizePhone(phone) {
  const raw = String(phone || "").trim();
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (raw.startsWith("+") && digits.length >= 8 && digits.length <= 15) {
    return `+${digits}`;
  }
  return "";
}

export function maskPhone(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits.length >= 4 ? `***-***-${digits.slice(-4)}` : "the submitted number";
}

export function normalizeContext(value, fallback, maxLength = 100) {
  const normalized = String(value || fallback)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, maxLength);
  return normalized || fallback;
}

export function makeToken() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function sha256(value) {
  const data = new TextEncoder().encode(String(value));
  const buffer = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buffer)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function sendVerificationSms(env, payload) {
  if (!env.SMS_WEBHOOK_URL || !env.SMS_WEBHOOK_SECRET) {
    return { sent: false, reason: "SMS sender is not configured" };
  }
  const response = await fetch(env.SMS_WEBHOOK_URL, {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.SMS_WEBHOOK_SECRET}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      to: payload.phone,
      body: `Confirm your ClearKey SMS consent: ${payload.verificationUrl}`,
      verificationUrl: payload.verificationUrl,
      app: payload.app,
      tenantSlug: payload.tenantSlug,
      purpose: payload.purpose,
    }),
  });
  return { sent: response.ok, status: response.status };
}

export async function ensureSchema(sql) {
  await sql`
    create table if not exists sms_consent_requests (
      id uuid primary key default gen_random_uuid(),
      phone_e164 text not null,
      app text not null,
      tenant_slug text not null,
      return_url text not null,
      purpose text not null,
      verification_token_hash text not null,
      token_expires_at timestamptz not null,
      consent_status text not null default 'pending',
      popup_requested boolean not null default false,
      consent_text_version text not null,
      token text,
      code_hash text,
      consent_language text,
      phone_mask text,
      ip_address text,
      user_agent text,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now(),
      opted_in_at timestamptz,
      opted_out_at timestamptz
    )`;
  await sql`alter table sms_consent_requests add column if not exists app text`;
  await sql`alter table sms_consent_requests add column if not exists return_url text`;
  await sql`alter table sms_consent_requests add column if not exists purpose text`;
  await sql`alter table sms_consent_requests add column if not exists verification_token_hash text`;
  await sql`alter table sms_consent_requests add column if not exists token_expires_at timestamptz`;
  await sql`alter table sms_consent_requests add column if not exists consent_status text default 'pending'`;
  await sql`alter table sms_consent_requests add column if not exists popup_requested boolean default false`;
  await sql`alter table sms_consent_requests add column if not exists consent_text_version text`;
  await sql`alter table sms_consent_requests add column if not exists updated_at timestamptz default now()`;
  await sql`alter table sms_consent_requests add column if not exists opted_in_at timestamptz`;
  await sql`alter table sms_consent_requests add column if not exists opted_out_at timestamptz`;
  await sql`alter table sms_consent_requests alter column token drop not null`;
  await sql`alter table sms_consent_requests alter column code_hash drop not null`;
  await sql`alter table sms_consent_requests alter column consent_language drop not null`;
  await sql`alter table sms_consent_requests alter column phone_mask drop not null`;
  await sql`update sms_consent_requests set token = null where token is not null`;

  await sql`
    create table if not exists sms_consent_records (
      id uuid primary key default gen_random_uuid(),
      phone_e164 text not null,
      app text not null,
      tenant_slug text not null,
      purpose text not null,
      consent_status text not null,
      consent_text_version text not null,
      ip_address text,
      user_agent text,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now(),
      opted_in_at timestamptz,
      opted_out_at timestamptz,
      unique(phone_e164, app, tenant_slug, purpose)
    )`;
  await sql`
    create table if not exists sms_consent_events (
      id uuid primary key default gen_random_uuid(),
      request_id uuid references sms_consent_requests(id),
      phone_e164 text,
      app text,
      tenant_slug text,
      purpose text,
      event_type text not null,
      consent_status text,
      consent_text_version text,
      ip_address text,
      user_agent text,
      metadata jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now()
    )`;
  await sql`alter table sms_consent_events add column if not exists app text`;
  await sql`alter table sms_consent_events add column if not exists purpose text`;
  await sql`alter table sms_consent_events add column if not exists consent_status text`;
  await sql`alter table sms_consent_events add column if not exists consent_text_version text`;
  await sql`create unique index if not exists sms_consent_requests_token_hash_idx on sms_consent_requests(verification_token_hash) where verification_token_hash is not null`;
  await sql`create index if not exists sms_consent_requests_rate_phone_idx on sms_consent_requests(phone_e164, created_at desc)`;
  await sql`create index if not exists sms_consent_requests_rate_ip_idx on sms_consent_requests(ip_address, created_at desc)`;
  await sql`create index if not exists sms_consent_events_phone_idx on sms_consent_events(phone_e164, created_at desc)`;
}

export async function enforceRequestRateLimit(sql, phone, ipAddress) {
  const rows = await sql`
    select
      count(*) filter (where phone_e164 = ${phone})::int as phone_count,
      count(*) filter (where ip_address = ${ipAddress})::int as ip_count
    from sms_consent_requests
    where created_at > now() - interval '15 minutes'
      and (phone_e164 = ${phone} or ip_address = ${ipAddress})
  `;
  if (Number(rows[0]?.phone_count || 0) >= 3 || Number(rows[0]?.ip_count || 0) >= 10) {
    const error = new Error("Too many verification requests. Try again later.");
    error.status = 429;
    throw error;
  }
}

export function requestMetadata(request) {
  return {
    ipAddress: request.headers.get("cf-connecting-ip") || "unknown",
    userAgent: (request.headers.get("user-agent") || "").slice(0, 500),
  };
}
