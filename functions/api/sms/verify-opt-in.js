import {
  allowedReturnOrigin,
  errorJson,
  ensureSchema,
  json,
  options,
  readJson,
  requestMetadata,
  requireDb,
  sha256,
} from "../_shared/consent.js";

export function onRequestOptions({ request }) {
  return options(request);
}

export async function onRequestPost({ request, env }) {
  try {
    const body = await readJson(request);
    if (!body.token || body.consent !== true || String(body.token).length > 256) {
      return json({ ok: false, error: "Consent confirmation is required" }, 400, request);
    }
    const sql = requireDb(env);
    await ensureSchema(sql);
    const tokenHash = await sha256(body.token);
    const { ipAddress, userAgent } = requestMetadata(request);
    const rows = await sql`
      select * from sms_consent_requests
      where verification_token_hash = ${tokenHash}
      limit 1
    `;
    if (!rows.length || new Date(rows[0].token_expires_at).getTime() <= Date.now()) {
      return json({ ok: false, error: "Verification request is invalid or expired" }, 410, request);
    }
    const record = rows[0];
    if (record.consent_status === "opted_out") {
      return json({ ok: false, error: "This number has been opted out" }, 409, request);
    }
    await sql`
      update sms_consent_requests
      set consent_status = 'opted_in', opted_in_at = coalesce(opted_in_at, now()), updated_at = now()
      where id = ${record.id}
    `;
    await sql`
      insert into sms_consent_records
        (phone_e164, app, tenant_slug, purpose, consent_status, consent_text_version,
         ip_address, user_agent, opted_in_at, opted_out_at, updated_at)
      values
        (${record.phone_e164}, ${record.app}, ${record.tenant_slug}, ${record.purpose},
         'opted_in', ${record.consent_text_version}, ${ipAddress}, ${userAgent}, now(), null, now())
      on conflict (phone_e164, app, tenant_slug, purpose)
      do update set consent_status = 'opted_in', consent_text_version = excluded.consent_text_version,
                    ip_address = excluded.ip_address, user_agent = excluded.user_agent,
                    opted_in_at = now(), opted_out_at = null, updated_at = now()
    `;
    await sql`
      insert into sms_consent_events
        (request_id, phone_e164, app, tenant_slug, purpose, event_type,
         consent_status, consent_text_version, ip_address, user_agent, metadata)
      values
        (${record.id}, ${record.phone_e164}, ${record.app}, ${record.tenant_slug},
         ${record.purpose}, 'sms_opted_in', 'opted_in', ${record.consent_text_version},
         ${ipAddress}, ${userAgent}, ${JSON.stringify({ checkboxConfirmed: true })}::jsonb)
    `;
    return json(
      {
        ok: true,
        status: "opted_in",
        app: record.app,
        tenantSlug: record.tenant_slug,
        purpose: record.purpose,
        popupRequested: record.popup_requested,
        returnUrl: record.return_url,
        allowedReturnOrigin: allowedReturnOrigin(record.return_url),
      },
      200,
      request,
    );
  } catch (error) {
    return errorJson(error, "Verification failed", request);
  }
}
