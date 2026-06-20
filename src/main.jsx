import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { POLICIES, SMS_POLICY_SECTIONS, CO, PROD, EFF, ADR, LEG } from "./policies.js";
import "./styles.css";

const aliases = {
  "/terms": "/terms-of-service",
  "/privacy": "/privacy-policy",
  "/sms": "/policy/sms-policy/policy",
  "/sms-policy": "/policy/sms-policy/policy",
  "/opt-in": "/policy/sms-policy/opt-in",
  "/sms-opt-in": "/policy/sms-policy/opt-in",
  "/unsubscribe": "/policy/sms-policy/unsubscribe",
  "/sms-unsubscribe": "/policy/sms-policy/unsubscribe",
  "/sms/unsubscribe": "/sms/unsubscribe",
  "/consent": "/consent-center",
  "/cookie-consent": "/cookie-consent-banner-text"
};

function getPath() {
  const raw = window.location.pathname || "/";
  return aliases[raw] || raw;
}

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "instant" });
}

function App() {
  const [path, setPath] = useState(getPath());
  React.useEffect(() => {
    const onPop = () => setPath(getPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const verificationMatch = path.match(/^\/sms\/verify\/([^/]+)$/);
  if (verificationMatch) return <SmsVerification token={decodeURIComponent(verificationMatch[1])} />;
  if (path === "/policy/sms-policy/opt-in") return <LegacySmsStart />;
  if (path === "/policy/sms-policy/unsubscribe" || path === "/sms/unsubscribe") return <SmsUnsubscribe />;
  if (path === "/policy/sms-policy/policy") return <SmsPolicy />;
  if (path === "/consent-center") return <ConsentCenter />;
  if (path === "/") return <Hub />;

  const slug = path.replace(/^\//, "");
  return <Policy slug={slug} />;
}

function Logo() {
  return <img className="logo" src="/logo.png" alt="ClearKey Solutions" onError={(e) => { e.currentTarget.style.display = "none"; }} />;
}

function Header({ back = false }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => navigate("/")}>
        <Logo />
        <span>Legal & Consent Center</span>
      </button>
      <nav className="nav">
        <button onClick={() => navigate("/privacy-policy")}>Privacy</button>
        <button onClick={() => navigate("/terms-of-service")}>Terms</button>
        <button onClick={() => navigate("/consent-center")}>Consent</button>
        {back && <button onClick={() => navigate("/")}>Back</button>}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>{CO} · {ADR}</div>
      <a href={`mailto:${LEG}`}>{LEG}</a>
    </footer>
  );
}

function Hub() {
  const grouped = useMemo(() => {
    return POLICIES.reduce((acc, policy) => {
      (acc[policy.category] ||= []).push(policy);
      return acc;
    }, {});
  }, []);
  return (
    <>
      <Header />
      <main className="hero">
        <p className="eyebrow">ClearKey Solutions</p>
        <h1>Legal & Consent Center</h1>
        <p className="lead">Policies, terms, privacy notices, SMS consent, opt-in, and unsubscribe pages for {PROD} and related ClearKey sites.</p>
        <div className="heroActions">
          <button onClick={() => navigate("/consent-center")}>Consent Center</button>
          <button className="secondary" onClick={() => navigate("/policy/sms-policy/opt-in")}>SMS Opt-In</button>
          <button className="secondary" onClick={() => navigate("/policy/sms-policy/unsubscribe")}>Unsubscribe</button>
        </div>
      </main>
      <main className="wrap">
        {Object.entries(grouped).map(([category, items]) => (
          <section className="category" key={category}>
            <h2>{category}</h2>
            <div className="grid">
              {items.map((policy) => (
                <button className="card" key={policy.slug} onClick={() => navigate(`/${policy.slug}`)}>
                  <span>{policy.title}</span>
                  <small>{policy.description}</small>
                  <b>View document →</b>
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

function ConsentCenter() {
  return (
    <>
      <Header back />
      <main className="doc slim">
        <p className="eyebrow">Consent routing</p>
        <h1>ClearKey Consent Center</h1>
        <p className="lead small">Use this page as the central redirect target for ClearKey sites that need legal consent, SMS opt-in, privacy, unsubscribe, or cookie consent links.</p>
        <div className="formGrid">
          <button className="actionCard" onClick={() => navigate("/policy/sms-policy/opt-in")}>SMS Opt-In<span>Collect clear consent for text messages.</span></button>
          <button className="actionCard" onClick={() => navigate("/policy/sms-policy/unsubscribe")}>SMS Unsubscribe<span>Simple removal form for SMS lists.</span></button>
          <button className="actionCard" onClick={() => navigate("/privacy-policy")}>Privacy Policy<span>How personal information is handled.</span></button>
          <button className="actionCard" onClick={() => navigate("/cookie-consent-banner-text")}>Cookie Consent<span>Consent banner language and choices.</span></button>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Policy({ slug }) {
  const policy = POLICIES.find((p) => p.slug === slug);
  if (!policy) return <NotFound />;
  return (
    <>
      <Header back />
      <main className="doc">
        <p className="eyebrow">{policy.category}</p>
        <h1>{policy.title}</h1>
        <div className="meta"><span>Effective: {EFF}</span><span>{CO}</span></div>
        {policy.sections?.length > 3 && (
          <aside className="toc">
            <strong>Contents</strong>
            <ol>{policy.sections.map((s, i) => <li key={i}><a href={`#s${i}`}>{s.h}</a></li>)}</ol>
          </aside>
        )}
        {policy.sections.map((section, i) => (
          <section className="section" id={`s${i}`} key={i}>
            <h2>{section.h}</h2>
            {section.c.map((para, j) => <p key={j} dangerouslySetInnerHTML={{ __html: format(para) }} />)}
            {section.table && <Table {...section.table} />}
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

function SmsPolicy() {
  const policy = {
    title: "SMS Communication Policy",
    category: "Communications",
    sections: SMS_POLICY_SECTIONS
  };
  return <PolicyDocument policy={policy} />;
}

function PolicyDocument({ policy }) {
  return (
    <>
      <Header back />
      <main className="doc">
        <p className="eyebrow">{policy.category}</p>
        <h1>{policy.title}</h1>
        <div className="meta"><span>Effective: {EFF}</span><span>{CO}</span></div>
        {policy.sections?.length > 3 && (
          <aside className="toc">
            <strong>Contents</strong>
            <ol>{policy.sections.map((s, i) => <li key={i}><a href={`#s${i}`}>{s.h}</a></li>)}</ol>
          </aside>
        )}
        {policy.sections.map((section, i) => (
          <section className="section" id={`s${i}`} key={i}>
            <h2>{section.h}</h2>
            {section.c.map((para, j) => <p key={j} dangerouslySetInnerHTML={{ __html: format(para) }} />)}
            {section.table && <Table {...section.table} />}
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

function addConsentStatus(returnUrl, status) {
  if (!returnUrl) return "/";
  const url = new URL(returnUrl);
  url.searchParams.set("smsConsent", status);
  return url.toString();
}

function LegacySmsStart() {
  return (
    <>
      <Header back />
      <main className="formPage">
        <section className="formCard">
          <p className="eyebrow">SMS Communications</p>
          <h1>Start from your ClearKey app</h1>
          <p className="formIntro">Enter your phone number in the ClearKey-powered app requesting consent. We will send a secure verification link that returns you to that app after confirmation.</p>
          <button type="button" onClick={() => navigate("/")}>Return to Legal Center</button>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SmsVerification({ token }) {
  const params = new URLSearchParams(window.location.search);
  const popupRequested = params.get("popup") === "1";
  const [requestInfo, setRequestInfo] = useState(null);
  const [consent, setConsent] = useState(false);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState("");

  React.useEffect(() => {
    fetch("/api/sms/lookup-verification", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.ok) throw new Error(data.error || "Verification lookup failed");
        setRequestInfo(data.request);
      })
      .catch((lookupError) => setError(lookupError.message))
      .finally(() => setBusy(false));
  }, [token]);

  function finish(status, info = requestInfo) {
    if (!info) return;
    const popup = popupRequested || info.popupRequested;
    if (popup && window.opener && info.allowedReturnOrigin) {
      window.opener.postMessage(
        {
          type: "CLEARKEY_SMS_CONSENT_COMPLETE",
          status,
          app: info.app,
          tenantSlug: info.tenantSlug,
          purpose: info.purpose,
        },
        info.allowedReturnOrigin,
      );
      window.close();
    }
    window.location.replace(addConsentStatus(info.returnUrl, status));
  }

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/sms/verify-opt-in", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, consent }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.error || "Request failed");
      setDone(true);
      setTimeout(() => finish("opted_in", { ...requestInfo, ...data }), 450);
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setBusy(false);
    }
  }

  const content = (
    <main className={`formPage ${popupRequested ? "popupPage" : ""}`}>
      <section className="formCard">
        <p className="eyebrow">SMS Communications</p>
        <h1>Confirm SMS Consent</h1>
        {done ? (
          <div className="success">
            <div className="check">OK</div>
            <h2>SMS opt-in confirmed</h2>
            <p>Your consent was recorded. Returning you to {requestInfo?.app || "the requesting app"}.</p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className="formIntro">Review the request below. Your phone number was already provided to the requesting app and is not displayed here.</p>
            {busy && !requestInfo && <div className="notice">Loading verification request...</div>}
            {requestInfo && (
              <dl className="consentContext">
                <div><dt>App</dt><dd>{requestInfo.app}</dd></div>
                <div><dt>Tenant</dt><dd>{requestInfo.tenantSlug}</dd></div>
                <div><dt>Purpose</dt><dd>{requestInfo.purpose?.replaceAll("_", " ")}</dd></div>
              </dl>
            )}
            <label className="consentCheck">
              <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required />
              <span>{requestInfo?.consentText || "I agree to receive SMS messages from ClearKey Solutions and the relevant ClearKey-powered app. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe."}</span>
            </label>
            {error && <div className="notice error">{error}</div>}
            <button type="submit" disabled={busy || !requestInfo || !consent}>{busy ? "Working..." : "Confirm Opt-In"}</button>
            <button type="button" className="linkBtn" disabled={!requestInfo} onClick={() => finish("failed")}>Cancel</button>
          </form>
        )}
      </section>
    </main>
  );
  if (popupRequested) return content;
  return <><Header back />{content}<Footer /></>;
}

function SmsUnsubscribe() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token") || "";
  const app = params.get("app") || "connect";
  const tenantSlug = params.get("tenantSlug") || "clearkey";
  const purpose = params.get("purpose") || "marketing_sms";
  const returnUrl = params.get("returnUrl") || "";
  const [phone, setPhone] = useState("");
  const [tokenKnown, setTokenKnown] = useState(Boolean(token));
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(Boolean(token));
  const [error, setError] = useState("");

  React.useEffect(() => {
    if (!token) return;
    fetch("/api/sms/lookup-verification", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.ok) throw new Error("Enter the phone number to unsubscribe.");
        setTokenKnown(true);
      })
      .catch((lookupError) => {
        setTokenKnown(false);
        setError(lookupError.message);
      })
      .finally(() => setBusy(false));
  }, [token]);

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/sms/unsubscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token: tokenKnown ? token : undefined, phone, app, tenantSlug, purpose, returnUrl: returnUrl || undefined }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.error || "Unsubscribe failed");
      setDone(true);
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <Header back />
      <main className="formPage">
        <section className="formCard">
          <p className="eyebrow">SMS Communications</p>
          <h1>Unsubscribe</h1>
          {done ? (
            <div className="success">
              <div className="check">OK</div>
              <h2>You are unsubscribed</h2>
              <p>ClearKey recorded your opt-out for {app} and {tenantSlug}.</p>
              <button onClick={() => window.location.replace(returnUrl ? addConsentStatus(returnUrl, "opted_out") : "/")}>Continue</button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <p className="formIntro">Stop optional SMS messages for this app and tenant.</p>
              <dl className="consentContext">
                <div><dt>App</dt><dd>{app}</dd></div>
                <div><dt>Tenant</dt><dd>{tenantSlug}</dd></div>
              </dl>
              {!tokenKnown && <label>Mobile phone number<input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+1 555 123 4567" required /></label>}
              {error && <div className="notice error">{error}</div>}
              <button type="submit" disabled={busy}>{busy ? "Working..." : "Unsubscribe"}</button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

function Table({ cols, rows }) {
  return <div className="tableWrap"><table><thead><tr>{cols.map(c => <th key={c}>{c}</th>)}</tr></thead><tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody></table></div>;
}

function NotFound() {
  return <><Header back /><main className="doc slim"><h1>Document not found</h1><p>The requested policy does not exist.</p><button onClick={() => navigate("/")}>Return home</button></main><Footer /></>;
}

function format(text) {
  return String(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

createRoot(document.getElementById("root")).render(<App />);
