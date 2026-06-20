# ClearKey Legal & Consent Center

React/Vite static legal center with Cloudflare Pages Functions for SMS consent verification and unsubscribe recording.

## Pages

- `/` legal/policy hub
- `/consent-center` central redirect target for all ClearKey sites
- `/policy/sms-policy/opt-in?token=...` confirmation form after another ClearKey app collects a phone number
- `/policy/sms-policy/unsubscribe` unsubscribe form
- `/policy/sms-policy/policy` SMS policy
- `/<policy-slug>` renders documents from `src/policies.js`

## API

### `POST /api/sms/request-verification`
Called by any ClearKey app after it collects a phone number.

Headers:
- `Authorization: Bearer $CONSENT_API_SECRET` or `x-clearkey-consent-key: $CONSENT_API_SECRET`

Body:
```json
{
  "phone": "+15555550123",
  "tenantSlug": "sweepr",
  "source": "sweepr-booking-form",
  "email": "optional@example.com",
  "returnTo": "https://example.com/thanks"
}
```

Returns:
```json
{
  "ok": true,
  "token": "...",
  "verificationUrl": "https://cklegal.pages.dev/policy/sms-policy/opt-in?token=...",
  "phoneMask": "•••-•••-0123",
  "smsSent": true
}
```

### `POST /api/sms/verify-opt-in`
Called by the opt-in form with `{ "token": "...", "code": "123456" }`.

### `POST /api/sms/unsubscribe`
Called by the unsubscribe form with `{ "phone": "+15555550123", "tenantSlug": "clearkey" }`.

## Cloudflare env vars

Required:
- `DATABASE_URL` Neon PostgreSQL connection string

Recommended:
- `CONSENT_API_SECRET` shared API key used by ClearKey apps calling request-verification
- `SMS_WEBHOOK_URL` endpoint for your actual SMS provider/send service
- `SMS_WEBHOOK_SECRET` optional bearer token sent to the SMS webhook

## Neon tables

The API auto-creates:
- `sms_consent_requests`
- `sms_consent_events`

Keep `src/policies.js`; it contains the legal document array.
