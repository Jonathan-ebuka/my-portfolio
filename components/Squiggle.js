// Hand-drawn style squiggly lines used as decoration.
const paths = [
  "M20 4c-14 40 16 70 2 112s18 74 4 118 14 80 0 124",
  "M18 6c12 36-14 64 0 104s-16 80-2 122 16 72 2 126",
  "M14 2c-10 44 18 66 6 108s14 70-2 114 18 78 4 130",
];

export default function Squiggle({ variant = 0, className = "" }) {
  return (
    <svg className={`squiggle ${className}`} viewBox="0 0 40 370" fill="none" aria-hidden="true">
      <path d={paths[variant % paths.length]} pathLength="1" />
    </svg>
  );
}
