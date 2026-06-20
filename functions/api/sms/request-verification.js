import { ensureSchema, hashCode, json, makeCode, makeToken, maskPhone, normalizePhone, options, readJson, requireApiKey, requireDb, sendVerificationSms } from '../_shared/consent.js';

export async function onRequestOptions() { return options(); }

export async function onRequestPost({ request, env }) {
  try {
    requireApiKey(request, env);
    const body = await readJson(request);
    const phone = normalizePhone(body.phone);
    if (!phone) return json({ ok: false, error: 'Valid phone is required' }, 400);

    const code = makeCode();
    const token = makeToken();
    const phoneMask = maskPhone(phone);
    const consentLanguage = body.consentLanguage || 'By entering this code and selecting Opt In, I expressly consent to receive ClearKey SMS messages. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply STOP to cancel.';
    const tenantSlug = body.tenantSlug || body.tenant || 'clearkey';
    const source = body.source || 'external-app';
    const origin = new URL(request.url).origin;
    const verificationUrl = `${origin}/policy/sms-policy/opt-in?token=${encodeURIComponent(token)}`;

    const sql = requireDb(env);
    await ensureSchema(sql);
    const rows = await sql`
      insert into sms_consent_requests
        (token, tenant_slug, source, phone_e164, phone_mask, email, code_hash, consent_language, ip_address, user_agent, return_to)
      values
        (${token}, ${tenantSlug}, ${source}, ${phone}, ${phoneMask}, ${body.email || null}, ${await hashCode(code)}, ${consentLanguage}, ${request.headers.get('cf-connecting-ip') || ''}, ${request.headers.get('user-agent') || ''}, ${body.returnTo || null})
      returning id, token, phone_mask, expires_at
    `;

    const sms = await sendVerificationSms(env, { phone, code, verificationUrl, tenantSlug, source });
    await sql`
      insert into sms_consent_events (request_id, tenant_slug, source, phone_e164, phone_mask, event_type, consent_language, ip_address, user_agent, metadata)
      values (${rows[0].id}, ${tenantSlug}, ${source}, ${phone}, ${phoneMask}, 'verification_requested', ${consentLanguage}, ${request.headers.get('cf-connecting-ip') || ''}, ${request.headers.get('user-agent') || ''}, ${JSON.stringify({ sms })}::jsonb)
    `;

    return json({ ok: true, token, verificationUrl, phoneMask, expiresAt: rows[0].expires_at, smsSent: sms.sent });
  } catch (err) {
    return json({ ok: false, error: err.message || 'Request failed' }, err.status || 500);
  }
}
