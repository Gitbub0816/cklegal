import { ensureSchema, hashCode, json, options, readJson, requireDb } from '../_shared/consent.js';

export async function onRequestOptions() { return options(); }

export async function onRequestPost({ request, env }) {
  try {
    const body = await readJson(request);
    if (!body.token || !body.code) return json({ ok: false, error: 'Token and code are required' }, 400);
    const sql = requireDb(env);
    await ensureSchema(sql);
    const rows = await sql`select * from sms_consent_requests where token = ${body.token} limit 1`;
    if (!rows.length) return json({ ok: false, error: 'Verification request not found' }, 404);
    const r = rows[0];
    if (new Date(r.expires_at).getTime() < Date.now()) return json({ ok: false, error: 'Verification expired' }, 410);
    if (r.status === 'verified') return json({ ok: true, status: 'verified', returnTo: r.return_to });
    if (await hashCode(body.code) !== r.code_hash) return json({ ok: false, error: 'Invalid verification code' }, 400);

    await sql`
      update sms_consent_requests
      set status = 'verified', verified_at = now()
      where id = ${r.id}
    `;
    await sql`
      insert into sms_consent_events (request_id, tenant_slug, source, phone_e164, phone_mask, event_type, consent_language, ip_address, user_agent, metadata)
      values (${r.id}, ${r.tenant_slug}, ${r.source}, ${r.phone_e164}, ${r.phone_mask}, 'sms_opt_in_verified', ${r.consent_language}, ${request.headers.get('cf-connecting-ip') || ''}, ${request.headers.get('user-agent') || ''}, ${JSON.stringify({ acceptedOnForm: true })}::jsonb)
    `;
    return json({ ok: true, status: 'verified', returnTo: r.return_to });
  } catch (err) {
    return json({ ok: false, error: err.message || 'Verification failed' }, 500);
  }
}
