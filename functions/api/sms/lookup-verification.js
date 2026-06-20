import {
  allowedReturnOrigin,
  CONSENT_TEXT,
  errorJson,
  ensureSchema,
  json,
  options,
  readJson,
  requireDb,
  sha256,
} from "../_shared/consent.js";

export function onRequestOptions({ request }) {
  return options(request);
}

export async function onRequestPost({ request, env }) {
  try {
    const { token } = await readJson(request);
    if (!token || String(token).length > 256) {
      return json({ ok: false, error: "Verification request is invalid" }, 400, request);
    }
    const sql = requireDb(env);
    await ensureSchema(sql);
    const tokenHash = await sha256(token);
    const rows = await sql`
      select app, tenant_slug, return_url, purpose, consent_status,
             popup_requested, consent_text_version, token_expires_at
      from sms_consent_requests
      where verification_token_hash = ${tokenHash}
      limit 1
    `;
    if (!rows.length) {
      return json({ ok: false, error: "Verification request is invalid or expired" }, 404, request);
    }
    const record = rows[0];
    if (new Date(record.token_expires_at).getTime() <= Date.now()) {
      return json({ ok: false, error: "Verification request is invalid or expired" }, 410, request);
    }
    return json(
      {
        ok: true,
        request: {
          app: record.app,
          tenantSlug: record.tenant_slug,
          purpose: record.purpose,
          status: record.consent_status,
          popupRequested: record.popup_requested,
          consentText: CONSENT_TEXT,
          consentTextVersion: record.consent_text_version,
          returnUrl: record.return_url,
          allowedReturnOrigin: allowedReturnOrigin(record.return_url),
        },
      },
      200,
      request,
    );
  } catch (error) {
    return errorJson(error, "Verification lookup failed", request);
  }
}
