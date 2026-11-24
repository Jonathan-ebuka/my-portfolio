// Rough, crayon-like scribbled lines used around the hero portrait.
const paths = [
  "M20 4c-14 40 16 70 2 112s18 74 4 118 14 80 0 124",
  "M18 6c12 36-14 64 0 104s-16 80-2 122 16 72 2 126",
  "M14 2c-10 44 18 66 6 108s14 70-2 114 18 78 4 130",
  "M22 2c8 30-16 52-6 88s20 58 6 96-14 66 2 104",
  "M16 4c-12 28 14 48 4 80s-16 56 0 92 18 70 2 110",
];

export default function Squiggle({ variant = 0, className = "", style }) {
  const id = `rough-${variant}`;
  return (
    <svg className={`squiggle ${className}`} style={style} viewBox="0 0 40 370" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <filter id={id} x="-20%" y="-5%" width="140%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="2" seed={variant + 3} />
          <feDisplacementMap in="SourceGraphic" scale="4" />
        </filter>
      </defs>
      <path d={paths[variant % paths.length]} pathLength="1" filter={`url(#${id})`} />
    </svg>
  );
}
