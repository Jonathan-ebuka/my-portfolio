import Image from "next/image";
import homeImg from "@/assets/img/home.jpg";
import Squiggle from "./Squiggle";
import { socials } from "./data";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <h1 className="hero__grid">
        <span className="hero__word hero__hello" data-reveal>Hello</span>

        <span className="hero__photo" data-reveal>
          <Squiggle variant={0} className="hero__squiggle hero__squiggle--l" />
          <Squiggle variant={1} className="hero__squiggle hero__squiggle--r" />
          <span className="hero__frame">
            <Image src={homeImg} alt="Jonathan Okwudili" priority sizes="(max-width: 768px) 70vw, 28vw" />
          </span>
        </span>

        <span className="hero__tag" data-reveal>
          {"{ front-end developer }"}
        </span>

        <span className="hero__word hero__im" data-reveal>I&apos;m</span>
        <span className="hero__word hero__name" data-reveal>Jonathan</span>
      </h1>

      <div className="hero__bottom">
        <a href="#about" className="bracket-link">Scroll down</a>
        <div className="hero__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
