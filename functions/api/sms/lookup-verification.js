import { ensureSchema, json, options, readJson, requireDb } from '../_shared/consent.js';

export async function onRequestOptions() { return options(); }

export async function onRequestPost({ request, env }) {
  try {
    const { token } = await readJson(request);
    if (!token) return json({ ok: false, error: 'Token is required' }, 400);
    const sql = requireDb(env);
    await ensureSchema(sql);
    const rows = await sql`
      select token, tenant_slug, source, phone_mask, consent_language, status, expires_at, return_to
      from sms_consent_requests
      where token = ${token}
      limit 1
    `;
    if (!rows.length) return json({ ok: false, error: 'Verification request not found' }, 404);
    const r = rows[0];
    if (new Date(r.expires_at).getTime() < Date.now()) return json({ ok: false, error: 'Verification expired' }, 410);
    return json({ ok: true, request: r });
  } catch (err) {
    return json({ ok: false, error: err.message || 'Lookup failed' }, 500);
  }
}
