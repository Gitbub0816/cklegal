import {
  CONSENT_TEXT_VERSION,
  errorJson,
  ensureSchema,
  json,
  normalizeContext,
  normalizePhone,
  options,
  readJson,
  requestMetadata,
  requireDb,
  sha256,
  validateReturnUrl,
} from "../_shared/consent.js";

export function onRequestOptions({ request }) {
  return options(request);
}

export async function onRequestPost({ request, env }) {
  try {
    const body = await readJson(request);
    const sql = requireDb(env);
    await ensureSchema(sql);
    let phone = normalizePhone(body.phone);
    let tokenRecord = null;
    if (!phone && body.token && String(body.token).length <= 256) {
      const tokenHash = await sha256(body.token);
      const rows = await sql`
        select phone_e164, app, tenant_slug, purpose
        from sms_consent_requests
        where verification_token_hash = ${tokenHash}
        limit 1
      `;
      tokenRecord = rows[0] || null;
      phone = tokenRecord?.phone_e164 || "";
    }
    if (!phone) return json({ ok: false, error: "Valid phone is required" }, 400, request);

    const app = normalizeContext(tokenRecord?.app || body.app, "connect", 64);
    const tenantSlug = normalizeContext(tokenRecord?.tenant_slug || body.tenantSlug, "clearkey", 100);
    const purpose = normalizeContext(tokenRecord?.purpose || body.purpose, "marketing_sms", 64);
    const returnUrl = body.returnUrl ? validateReturnUrl(body.returnUrl) : null;
    if (body.returnUrl && !returnUrl) {
      return json({ ok: false, error: "returnUrl is not allowed" }, 400, request);
    }
    const { ipAddress, userAgent } = requestMetadata(request);
    await sql`
      insert into sms_consent_records
        (phone_e164, app, tenant_slug, purpose, consent_status, consent_text_version,
         ip_address, user_agent, opted_out_at, updated_at)
      values
        (${phone}, ${app}, ${tenantSlug}, ${purpose}, 'opted_out',
         ${CONSENT_TEXT_VERSION}, ${ipAddress}, ${userAgent}, now(), now())
      on conflict (phone_e164, app, tenant_slug, purpose)
      do update set consent_status = 'opted_out', ip_address = excluded.ip_address,
                    user_agent = excluded.user_agent, opted_out_at = now(), updated_at = now()
    `;
    await sql`
      update sms_consent_requests
      set consent_status = 'opted_out', opted_out_at = now(), updated_at = now()
      where phone_e164 = ${phone} and app = ${app} and tenant_slug = ${tenantSlug}
        and purpose = ${purpose}
    `;
    await sql`
      insert into sms_consent_events
        (phone_e164, app, tenant_slug, purpose, event_type, consent_status,
         consent_text_version, ip_address, user_agent, metadata)
      values
        (${phone}, ${app}, ${tenantSlug}, ${purpose}, 'sms_opted_out', 'opted_out',
         ${CONSENT_TEXT_VERSION}, ${ipAddress}, ${userAgent}, ${JSON.stringify({ returnUrl })}::jsonb)
    `;
    return json({ ok: true, status: "opted_out", returnUrl }, 200, request);
  } catch (error) {
    return errorJson(error, "Unsubscribe failed", request);
  }
}
