import Image from "next/image";
import photo from "@/assets/img/jonathan.png";
import Squiggle from "./Squiggle";
import Typewriter from "./Typewriter";

// Scribbles around the portrait: [side, offset from that side, top, height]
const scribbles = [
  ["left", "-14%", "28%", "62%"],
  ["left", "-4%", "36%", "60%"],
  ["left", "6%", "48%", "44%"],
  ["right", "-16%", "30%", "58%"],
  ["right", "-6%", "22%", "72%"],
  ["right", "5%", "44%", "40%"],
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <h1 className="hero__grid">
        <span className="hero__word hero__hello" data-reveal>Hello</span>

        <span className="hero__photo" data-reveal>
          {scribbles.map(([side, offset, top, height], i) => (
            <Squiggle
              key={i}
              variant={i}
              className={`hero__squiggle${i % 3 === 2 ? " hero__squiggle--front" : ""}`}
              style={{ [side]: offset, top, height, animationDelay: `${0.5 + i * 0.12}s` }}
            />
          ))}
          <Image
            src={photo}
            alt="Illustrated portrait of Jonathan Okwudili"
            className="hero__img"
            priority
            sizes="(max-width: 900px) 60vw, 30vw"
          />
        </span>

        <span className="hero__word hero__meet" data-reveal>Meet</span>

        <Typewriter
          text="A front-end developer with a sprinkle of backend."
          delay={1200}
          speed={45}
          className="hero__line"
          caret="typewriter__caret--accent"
        />

        <span className="hero__word hero__name" data-reveal>Jonathan</span>
      </h1>
    </section>
  );
}
