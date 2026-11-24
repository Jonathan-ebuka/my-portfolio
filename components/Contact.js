"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { email, socials } from "./data";

// EmailJS IDs (these are public keys, safe to ship to the browser).
const SERVICE_ID = "service_2ycr41b";
const TEMPLATE_ID = "template_6kw34al";
const PUBLIC_KEY = "DGh3yjZTG0jvkbH5d";

const fields = [
  { name: "user_name", label: "Your name", type: "text", autoComplete: "name" },
  { name: "user_email", label: "Email address", type: "email", autoComplete: "email" },
  { name: "user_subject", label: "Subject", type: "text" },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ text: "", error: false });
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus({ text: "Message sent. I'll get back to you soon ✦", error: false });
      formRef.current.reset();
      setTimeout(() => setStatus({ text: "", error: false }), 6000);
    } catch {
      setStatus({ text: `Message not sent (service error). Email me at ${email} instead.`, error: true });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__info">
        <h2 className="big-title" data-reveal>
          Let&apos;s work <br />
          together<span className="accent">.</span>
        </h2>
        <p data-reveal>
          Hiring for a <b>full-time role</b>, or have a <b>freelance project</b> in mind? Send me a
          message and I&apos;ll get back to you. I only need your name and email address, and
          you won&apos;t receive anything other than my reply.
        </p>
        <div className="contact__socials" data-reveal>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target={s.external ? "_blank" : undefined} rel={s.external ? "noopener noreferrer" : undefined} className="bracket-link">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <form className="form" ref={formRef} onSubmit={sendEmail} data-reveal>
        {fields.map((f) => (
          <label className="field" key={f.name}>
            <input type={f.type} name={f.name} required placeholder=" " autoComplete={f.autoComplete} />
            <span>{f.label}</span>
          </label>
        ))}
        <label className="field">
          <textarea name="user_message" required placeholder=" " rows={4}></textarea>
          <span>Message</span>
        </label>

        <button type="submit" className="send-btn" disabled={sending}>
          {sending ? "Sending..." : "Send message"}
          <i className="ri-arrow-right-up-line"></i>
        </button>

        <p className={`form__status${status.error ? " form__status--error" : ""}`} role="status">
          {status.text}
        </p>
      </form>
    </section>
  );
}
