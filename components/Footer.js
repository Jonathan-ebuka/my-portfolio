import { nav, socials } from "./data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <a href="#home" className="logo">Jonathan<span>.</span></a>
          <p className="footer__tagline">Even better in conversation. Say hi on</p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target={s.external ? "_blank" : undefined} rel={s.external ? "noopener noreferrer" : undefined}>{s.label}</a>
            ))}
          </div>
        </div>

        <div className="footer__right">
          <a href="#home" className="bracket-link bracket-link--accent">Back to top</a>
          <ul className="footer__nav">
            {nav.map(({ id, label }, i) => (
              <li key={id}>
                <a href={`#${id}`}>{label}<span>0{i + 1}</span></a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__meta">
        <span>Handmade with ✦ and Next.js</span>
        <span>© {new Date().getFullYear()} Jonathan Okwudili. All rights reserved.</span>
      </div>

      <div className="footer__giant" aria-hidden="true">Jonathan</div>
    </footer>
  );
}
