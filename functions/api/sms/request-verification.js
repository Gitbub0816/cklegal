import {
  CONSENT_TEXT_VERSION,
  errorJson,
  enforceRequestRateLimit,
  ensureSchema,
  json,
  makeToken,
  normalizeContext,
  normalizePhone,
  options,
  readJson,
  requestMetadata,
  requireApiKey,
  requireDb,
  sendVerificationSms,
  sha256,
  validateReturnUrl,
} from "../_shared/consent.js";

export function onRequestOptions({ request }) {
  return options(request);
}

export async function onRequestPost({ request, env }) {
  try {
    await requireApiKey(request, env);
    const body = await readJson(request);
    const phone = normalizePhone(body.phone);
    const returnUrl = validateReturnUrl(body.returnUrl);
    if (!phone || !returnUrl) {
      return json({ ok: false, error: "Valid phone and returnUrl are required" }, 400, request);
    }
    const app = normalizeContext(body.app, "clearkey", 64);
    const tenantSlug = normalizeContext(body.tenantSlug, "clearkey", 100);
    const purpose = normalizeContext(body.purpose, "marketing_sms", 64);
    const popupRequested = body.popup === true;
    const { ipAddress, userAgent } = requestMetadata(request);
    const sql = requireDb(env);
    await ensureSchema(sql);
    await enforceRequestRateLimit(sql, phone, ipAddress);

    const token = makeToken();
    const tokenHash = await sha256(token);
    const baseUrl = String(env.PUBLIC_CONSENT_BASE_URL || "https://legal.clearkey.solutions").replace(/\/$/, "");
    const verificationUrl = `${baseUrl}/sms/verify/${encodeURIComponent(token)}${popupRequested ? "?popup=1" : ""}`;
    const rows = await sql`
      insert into sms_consent_requests
        (phone_e164, app, tenant_slug, return_url, purpose, verification_token_hash,
         token_expires_at, consent_status, popup_requested, consent_text_version,
         ip_address, user_agent, updated_at)
      values
        (${phone}, ${app}, ${tenantSlug}, ${returnUrl}, ${purpose}, ${tokenHash},
         now() + interval '30 minutes', 'pending', ${popupRequested}, ${CONSENT_TEXT_VERSION},
         ${ipAddress}, ${userAgent}, now())
      returning id, token_expires_at
    `;
    const sms = await sendVerificationSms(env, {
      phone,
      verificationUrl,
      app,
      tenantSlug,
      purpose,
    });
    await sql`
      insert into sms_consent_events
        (request_id, phone_e164, app, tenant_slug, purpose, event_type,
         consent_status, consent_text_version, ip_address, user_agent, metadata)
      values
        (${rows[0].id}, ${phone}, ${app}, ${tenantSlug}, ${purpose},
         'verification_requested', 'pending', ${CONSENT_TEXT_VERSION},
         ${ipAddress}, ${userAgent}, ${JSON.stringify({ smsSent: sms.sent, senderStatus: sms.status || null })}::jsonb)
    `;
    if (!sms.sent) {
      return json({ ok: false, error: "Verification message could not be sent" }, 502, request);
    }
    return json(
      { ok: true, verificationUrl, expiresAt: rows[0].token_expires_at },
      200,
      request,
    );
  } catch (error) {
    return errorJson(error, "Verification request failed", request);
  }
}
