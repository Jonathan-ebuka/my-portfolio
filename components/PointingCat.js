// Original doodle: a little cat with a hand-drawn arrow curving down to the
// "Email me" button below it. The arrow tip sits at the bottom centre.
export default function PointingCat() {
  return (
    <svg className="pointing-cat" viewBox="0 0 160 150" fill="none" aria-hidden="true">
      <g className="pointing-cat__cat">
        {/* ears + head */}
        <path
          d="M14 30 L18 4 L38 20 Q46 17 54 20 L74 4 L78 30 Q86 42 84 56 Q80 82 46 84 Q12 82 8 56 Q6 42 14 30 Z"
          fill="var(--ink)"
        />
        {/* inner ears */}
        <path d="M20 22 L22 11 L31 19 Z M72 22 L70 11 L61 19 Z" fill="var(--accent)" />
        {/* eyes, with a wink that blinks */}
        <ellipse className="pointing-cat__eye" cx="33" cy="50" rx="5" ry="7" fill="var(--bg)" />
        <ellipse className="pointing-cat__eye" cx="59" cy="50" rx="5" ry="7" fill="var(--bg)" />
        <circle cx="34.5" cy="52" r="2.4" fill="var(--ink)" />
        <circle cx="60.5" cy="52" r="2.4" fill="var(--ink)" />
        {/* nose + mouth */}
        <path d="M43 62 L49 62 L46 66 Z" fill="var(--accent)" />
        <path d="M46 66 Q42 71 38 68 M46 66 Q50 71 54 68" stroke="var(--bg)" strokeWidth="1.8" strokeLinecap="round" />
        {/* whiskers */}
        <path d="M22 62 L6 60 M22 67 L7 70 M70 62 L86 60 M70 67 L85 70" stroke="var(--bg)" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* hand-drawn arrow down to the button */}
      <path
        className="pointing-cat__arrow"
        d="M90 40 C 128 34, 150 80, 122 112 S 86 136, 80 144"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength="1"
      />
      <path
        className="pointing-cat__head"
        d="M80 144 L 78 130 M80 144 L 92 138"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
