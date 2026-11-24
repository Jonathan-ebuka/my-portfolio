"use client";

import { useRef, useState } from "react";
import { email, socials } from "./data";

// Profile links (GitHub, Instagram); the email has its own block above them.
const profiles = socials.filter((s) => s.external);

// Copies text, falling back to a hidden textarea where the Clipboard API
// isn't available (older browsers, or pages not served over HTTPS).
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const t = document.createElement("textarea");
    t.value = text;
    t.setAttribute("readonly", "");
    t.style.position = "fixed";
    t.style.opacity = "0";
    document.body.appendChild(t);
    t.select();
    const ok = document.execCommand("copy");
    t.remove();
    return ok;
  }
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  const onCopy = async () => {
    if (!(await copyText(email))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__info">
        <h2 className="big-title" data-reveal>
          Let&apos;s work <br />
          together<span className="accent">.</span>
        </h2>
        <p data-reveal>
          Hiring for a <b>full-time role</b>, or have a <b>freelance project</b> in mind? Email me
          and I&apos;ll get back to you.
        </p>
      </div>

      <div className="contact__mail" data-reveal>
        <div className="contact__actions">
          <a href={`mailto:${email}`} className="pill-btn">
            Email me
            <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
          </a>
          <button type="button" className="pill-btn pill-btn--ghost" onClick={onCopy}>
            {copied ? "Copied" : "Copy email"}
            <i className={copied ? "ri-check-line" : "ri-file-copy-line"} aria-hidden="true"></i>
          </button>
        </div>
        <p className="sr-only" role="status">
          {copied ? "Email address copied" : ""}
        </p>

        <p className="contact__other">
          Or find me on
          {profiles.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="bracket-link">
              {s.label}
            </a>
          ))}
        </p>
      </div>
    </section>
  );
}
