const items = ["Front-end developer", "HTML", "CSS", "JavaScript", "React", "Tailwind", "Git & GitHub", "Let's build something"];

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
