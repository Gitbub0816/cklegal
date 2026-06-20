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

  if (path === "/policy/sms-policy/opt-in") return <SmsForm mode="opt-in" />;
  if (path === "/policy/sms-policy/unsubscribe") return <SmsForm mode="unsubscribe" />;
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

function SmsForm({ mode }) {
  const isUnsub = mode === "unsubscribe";
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token") || "";
  const tenantSlug = params.get("tenant") || params.get("tenantSlug") || "clearkey";
  const source = params.get("source") || "consent-center";
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [requestInfo, setRequestInfo] = useState(null);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  React.useEffect(() => {
    if (isUnsub || !token) return;
    setBusy(true);
    fetch("/api/sms/lookup-verification", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ token })
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.ok) throw new Error(data.error || "Verification lookup failed");
        setRequestInfo(data.request);
      })
      .catch((err) => setError(err.message))
      .finally(() => setBusy(false));
  }, [isUnsub, token]);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const endpoint = isUnsub ? "/api/sms/unsubscribe" : "/api/sms/verify-opt-in";
      const payload = isUnsub ? { phone, tenantSlug, source } : { token, code };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Request failed");
      setDone(true);
      if (!isUnsub && data.returnTo) {
        setTimeout(() => { window.location.href = data.returnTo; }, 1200);
      }
    } catch (err) {
      setError(err.message);
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
          <h1>{isUnsub ? "Unsubscribe from SMS" : "Confirm SMS Opt-In"}</h1>
          {done ? (
            <div className="success">
              <div className="check">✓</div>
              <h2>{isUnsub ? "Unsubscribe request received" : "SMS opt-in confirmed"}</h2>
              <p>{isUnsub ? "We recorded your unsubscribe request in ClearKey's consent database. Optional SMS messages will stop for that number." : "Your verification code was accepted and your SMS consent was recorded."}</p>
              <button onClick={() => navigate("/")}>Return to Legal Center</button>
            </div>
          ) : (
            <form onSubmit={submit}>
              {isUnsub ? (
                <>
                  <p className="formIntro">Enter the phone number you want removed from optional ClearKey SMS communications.</p>
                  <label>Mobile phone number<input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 000-0000" required /></label>
                </>
              ) : (
                <>
                  <p className="formIntro">This opt-in page is opened after another ClearKey app has already collected your phone number and sent a verification code.</p>
                  {!token && <div className="notice error">Missing verification token. Start from the app where you entered your phone number.</div>}
                  {busy && !requestInfo && <div className="notice">Loading verification request…</div>}
                  {requestInfo && <div className="notice">Verification for <strong>{requestInfo.phone_mask}</strong></div>}
                  <label>Verification code<input inputMode="numeric" autoComplete="one-time-code" value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="123456" required /></label>
                  <p className="fineprint">{requestInfo?.consent_language || `By submitting this code, you expressly consent to receive ClearKey text messages. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply STOP to cancel.`}</p>
                </>
              )}
              {error && <div className="notice error">{error}</div>}
              <button type="submit" disabled={busy || (!isUnsub && !token)}>{busy ? "Working…" : isUnsub ? "Confirm Unsubscribe" : "Confirm Opt-In"}</button>
              <button type="button" className="linkBtn" onClick={() => navigate("/policy/sms-policy/policy")}>View SMS Policy</button>
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
