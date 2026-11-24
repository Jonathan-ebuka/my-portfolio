"use client";

import { useEffect, useRef } from "react";
import { stack } from "./data";

export default function About() {
  const listRef = useRef(null);

  // Each skill comes into focus while it crosses the middle of the screen.
  useEffect(() => {
    const items = listRef.current.querySelectorAll("li");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-sharp", e.isIntersecting)),
      { rootMargin: "-35% 0px -35% 0px" }
    );
    items.forEach((li) => io.observe(li));
    return () => io.disconnect();
  }, []);

  return (
    <section className="about section" id="about">
      <div className="about__intro">
        <div className="about__sticky">
          <h2 className="about__title" data-reveal>I build websites that actually work</h2>
          <p className="about__text" data-reveal>
            Front-end builder and computer science student focused on turning visual ideas and UI
            concepts into responsive, interactive web pages. Experienced in taking designs from
            layout and typography through to motion and implementation, with a habit of shipping
            real projects and refining details every day.
          </p>
          <a href="#contact" className="bracket-link bracket-link--accent" data-reveal>
            Put me to work
          </a>
        </div>
      </div>

      <div className="about__skills">
        <div ref={listRef}>
          <p className="eyebrow">Front-end</p>
          <ul>
            {stack.frontEnd.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <p className="eyebrow about__eyebrow-gap">+ A sprinkle of backend</p>
          <ul className="about__backend">
            {stack.backend.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <p className="eyebrow about__eyebrow-gap">+ AI, very proficient</p>
          <ul className="about__ai">
            {stack.ai.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
