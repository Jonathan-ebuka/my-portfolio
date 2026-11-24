import { stack } from "./data";

const items = ["Front-end developer", ...stack.frontEnd.filter((s) => !s.startsWith("Git")), ...stack.backend, ...stack.ai, "Let's build something"];

export default function Marquee() {
  // The list is rendered twice so the loop is seamless.
  const row = (hidden) => (
    <div className="marquee__row" aria-hidden={hidden}>
      {items.map((t) => (
        <span key={t}>
          {t}
          <i className="marquee__star">✦</i>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
