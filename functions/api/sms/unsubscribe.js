import { ensureSchema, json, maskPhone, normalizePhone, options, readJson, requireDb } from '../_shared/consent.js';

export async function onRequestOptions() { return options(); }

export async function onRequestPost({ request, env }) {
  try {
    const body = await readJson(request);
    const phone = normalizePhone(body.phone);
    if (!phone) return json({ ok: false, error: 'Valid phone is required' }, 400);
    const phoneMask = maskPhone(phone);
    const tenantSlug = body.tenantSlug || body.tenant || 'clearkey';
    const source = body.source || 'unsubscribe-form';
    const sql = requireDb(env);
    await ensureSchema(sql);
    await sql`
      update sms_consent_requests
      set status = 'unsubscribed', opted_out_at = now()
      where phone_e164 = ${phone} and (tenant_slug = ${tenantSlug} or ${tenantSlug} = 'clearkey')
    `;
    await sql`
      insert into sms_consent_events (tenant_slug, source, phone_e164, phone_mask, event_type, consent_language, ip_address, user_agent, metadata)
      values (${tenantSlug}, ${source}, ${phone}, ${phoneMask}, 'sms_unsubscribe', 'User requested SMS unsubscribe.', ${request.headers.get('cf-connecting-ip') || ''}, ${request.headers.get('user-agent') || ''}, ${JSON.stringify({ reason: body.reason || null })}::jsonb)
    `;
    return json({ ok: true, phoneMask });
  } catch (err) {
    return json({ ok: false, error: err.message || 'Unsubscribe failed' }, 500);
  }
}
