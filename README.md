# ClearKey Legal and Consent Center

Central legal policy hub and SMS consent service for all ClearKey applications.

Canonical host: `https://legal.clearkey.solutions`

## User routes

- `/sms/verify/:token`
- `/sms/verify/:token?popup=1`
- `/sms/unsubscribe`
- `/policy/sms-policy/policy`
- `/consent-center`
- `/<policy-slug>`

The popup verification page posts `CLEARKEY_SMS_CONSENT_COMPLETE` only to the exact validated origin of the stored return URL. If no opener is available, it redirects to the stored return URL with `smsConsent=opted_in` or `smsConsent=failed`.

## API routes

- `POST /api/sms/request-verification`
- `POST /api/sms/lookup-verification`
- `POST /api/sms/verify-opt-in`
- `POST /api/sms/unsubscribe`

`request-verification` is server-to-server and requires `Authorization: Bearer $CONSENT_API_SECRET` or `x-clearkey-consent-key`. It accepts:

```json
{
  "phone": "+15551234567",
  "app": "connect",
  "tenantSlug": "joes-plumbing",
  "returnUrl": "https://connect.clearkey.solutions/settings/sms",
  "purpose": "marketing_sms",
  "popup": true
}
```

The response contains a short-lived `verificationUrl`; the raw token is never stored or returned separately.

## Environment

- `DATABASE_URL`
- `CONSENT_API_SECRET`
- `SMS_WEBHOOK_URL=https://api.clearkey.solutions/sms/send`
- `SMS_WEBHOOK_SECRET`
- `PUBLIC_CONSENT_BASE_URL=https://legal.clearkey.solutions`

Secrets must be configured as Cloudflare project secrets, never committed.

## Persistence

The Pages Functions maintain:

- `sms_consent_requests`
- `sms_consent_records`
- `sms_consent_events`

Verification tokens are stored only as SHA-256 hashes. Requests expire after 30 minutes and are rate-limited by phone and IP.

## Development

```bash
npm install
npm test
npm run build
```

Keep `src/policies.js`; it remains the legal policy source.
