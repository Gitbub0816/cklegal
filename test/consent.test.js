import assert from "node:assert/strict";
import test from "node:test";
import {
  allowedReturnOrigin,
  normalizeContext,
  normalizePhone,
  validateReturnUrl,
} from "../functions/api/_shared/consent.js";

test("normalizes supported phone numbers to E.164", () => {
  assert.equal(normalizePhone("(555) 123-4567"), "+15551234567");
  assert.equal(normalizePhone("+44 20 7946 0958"), "+442079460958");
  assert.equal(normalizePhone("123"), "");
});

test("allows only HTTPS ClearKey return URLs", () => {
  assert.equal(
    validateReturnUrl("https://connect.clearkey.solutions/settings/sms#fragment"),
    "https://connect.clearkey.solutions/settings/sms",
  );
  assert.equal(
    allowedReturnOrigin("https://tenant.clearkey.solutions/settings/sms"),
    "https://tenant.clearkey.solutions",
  );
  assert.equal(validateReturnUrl("https://clearkey.solutions.attacker.example/"), null);
  assert.equal(validateReturnUrl("http://connect.clearkey.solutions/settings/sms"), null);
});

test("normalizes app and tenant context", () => {
  assert.equal(normalizeContext(" Joe's Plumbing ", "clearkey"), "joe-s-plumbing");
});
