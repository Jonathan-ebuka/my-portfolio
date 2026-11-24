"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import curvedArrow from "@/assets/img/curved-arrow.svg";

// EmailJS IDs (these are public keys, safe to ship to the browser).
const SERVICE_ID = "service_2ycr41b";
const TEMPLATE_ID = "template_6kw34al";
const PUBLIC_KEY = "DGh3yjZTG0jvkbH5d";

export default function Contact() {
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setMessage("Message sent successfully ✅");
      formRef.current.reset();
      setTimeout(() => setMessage(""), 5000);
    } catch {
      setMessage("Message not sent (service error)");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container grid">
        <div className="contact__data reveal-left">
          <h2 className="section__title-2">
            <span>Contact Me.</span>
          </h2>

          <p className="contact__description-1">
            I will read all emails. Send me any message you want and I&apos;ll get back to you.
          </p>

          <p className="contact__description-2">
            I need your <b>Name</b> and <b>Email Address</b>, but you won&apos;t receive anything
            other than your reply.
          </p>

          <div className="box-2"></div>
        </div>

        <div className="contact__mail reveal-right">
          <h2 className="contact__title">Send Me A Message</h2>

          <form className="contact__form" id="form" ref={formRef} onSubmit={sendEmail}>
            <div className="contact__group">
              <div className="contact__box">
                <input type="text" name="user_name" className="contact__input" id="name" required placeholder="First Name" />
                <label htmlFor="name" className="contact__label">First Name</label>
              </div>

              <div className="contact__box">
                <input type="email" name="user_email" className="contact__input" id="email" required placeholder="Email Address" />
                <label htmlFor="email" className="contact__label">Email Address</label>
              </div>
            </div>

            <div className="contact__box">
              <input type="text" name="user_subject" className="contact__input" id="subject" required placeholder="Subject" />
              <label htmlFor="subject" className="contact__label">Subject</label>
            </div>

            <div className="contact__box contact__area">
              <textarea name="user_message" id="message" className="contact__input" required placeholder="Message"></textarea>
              <label htmlFor="message" className="contact__label">Message</label>
            </div>

            <p className="contact__message" id="contact-message">{message}</p>

            <button type="submit" className="contact__button button" disabled={sending}>
              <i className="ri-send-plane-line"></i>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="contact__social reveal-left">
          <Image src={curvedArrow} alt="" className="contact__social-arrow" />

          <div className="contact__social-data">
            <div>
              <p className="contact__social-description-1">Does not send emails</p>
              <p className="contact__social-description-2">Write me on my social networks</p>
            </div>
          </div>

          <div className="contact__social-links">
            <a
              href="https://www.linkedin.com/in/jonathanokwudiliebuka/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
