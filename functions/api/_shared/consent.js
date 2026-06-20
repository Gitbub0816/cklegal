import { neon } from '@neondatabase/serverless';

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'POST,OPTIONS',
      'access-control-allow-headers': 'content-type, authorization, x-clearkey-consent-key'
    }
  });
}

export function options() { return json({ ok: true }); }

export async function readJson(request) {
  try { return await request.json(); } catch { return {}; }
}

export function requireDb(env) {
  if (!env.DATABASE_URL) throw new Error('Missing DATABASE_URL environment variable');
  return neon(env.DATABASE_URL);
}

export function requireApiKey(request, env) {
  if (!env.CONSENT_API_SECRET) return;
  const auth = request.headers.get('authorization') || '';
  const bearer = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  const header = request.headers.get('x-clearkey-consent-key') || '';
  if (bearer !== env.CONSENT_API_SECRET && header !== env.CONSENT_API_SECRET) {
    const err = new Error('Unauthorized');
    err.status = 401;
    throw err;
  }
}

export function normalizePhone(phone) {
  const digits = String(phone || '').replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  if (String(phone || '').startsWith('+') && digits.length >= 10) return `+${digits}`;
  return '';
}

export function maskPhone(phone) {
  const d = String(phone || '').replace(/\D/g, '');
  if (d.length < 4) return 'the submitted number';
  return `•••-•••-${d.slice(-4)}`;
}

export function makeCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export function makeToken() {
  const a = new Uint8Array(24);
  crypto.getRandomValues(a);
  return [...a].map(b => b.toString(16).padStart(2, '0')).join('');
}

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function hashCode(code) {
  return sha256(String(code));
}

export async function sendVerificationSms(env, { phone, code, verificationUrl, tenantSlug, source }) {
  if (!env.SMS_WEBHOOK_URL) return { sent: false, reason: 'SMS_WEBHOOK_URL not configured' };
  const res = await fetch(env.SMS_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(env.SMS_WEBHOOK_SECRET ? { authorization: `Bearer ${env.SMS_WEBHOOK_SECRET}` } : {})
    },
    body: JSON.stringify({
      to: phone,
      body: `ClearKey verification code: ${code}. Complete consent: ${verificationUrl}`,
      code,
      verificationUrl,
      tenantSlug,
      source
    })
  });
  return { sent: res.ok, status: res.status };
}

export async function ensureSchema(sql) {
  await sql`
    create table if not exists sms_consent_requests (
      id uuid primary key default gen_random_uuid(),
      token text unique not null,
      tenant_slug text,
      source text,
      phone_e164 text not null,
      phone_mask text not null,
      email text,
      code_hash text not null,
      status text not null default 'pending',
      consent_language text not null,
      ip_address text,
      user_agent text,
      return_to text,
      created_at timestamptz not null default now(),
      expires_at timestamptz not null default now() + interval '30 minutes',
      verified_at timestamptz,
      opted_out_at timestamptz
    )`;
  await sql`
    create table if not exists sms_consent_events (
      id uuid primary key default gen_random_uuid(),
      request_id uuid references sms_consent_requests(id),
      tenant_slug text,
      source text,
      phone_e164 text,
      phone_mask text,
      event_type text not null,
      consent_language text,
      ip_address text,
      user_agent text,
      metadata jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now()
    )`;
  await sql`create index if not exists sms_consent_requests_token_idx on sms_consent_requests(token)`;
  await sql`create index if not exists sms_consent_events_phone_idx on sms_consent_events(phone_e164)`;
}
