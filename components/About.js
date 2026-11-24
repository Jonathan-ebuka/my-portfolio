"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import aboutImg from "@/assets/img/about.jpg";
import { skills } from "./data";

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
          <div className="about__polaroid" data-reveal>
            <Image src={aboutImg} alt="Jonathan Okwudili" sizes="220px" />
          </div>
          <h2 className="about__title" data-reveal>I build websites that actually work</h2>
          <p className="about__text" data-reveal>
            Passionate about creating <b>web pages</b>. I have no official working experience yet,
            but I&apos;ve built websites with the help of YouTube, Stack Overflow and other online
            resources, and I keep learning more about code every day.
          </p>
          <a href="#contact" className="bracket-link bracket-link--accent" data-reveal>
            Put me to work
          </a>
        </div>
      </div>

      <div className="about__skills">
        <p className="eyebrow">My skills are</p>
        <ul ref={listRef}>
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
