import { email, socials } from "./data";
import PointingCat from "./PointingCat";

// Profile links (GitHub, Instagram); the email has its own block above them.
const profiles = socials.filter((s) => s.external);

export default function Contact() {
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
        <PointingCat />
        <a href={`mailto:${email}`} className="pill-btn">
          Email me
          <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
        </a>

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
