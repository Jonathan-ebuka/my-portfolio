"use client";

import { useEffect, useRef, useState } from "react";
import { nav, socials } from "./data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const burgerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view, for the dot in the menu.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Keep the header in menu colours until the closing circle has passed it.
  const wasOpen = useRef(false);
  useEffect(() => {
    if (wasOpen.current && !open) {
      setClosing(true);
      const t = setTimeout(() => setClosing(false), 550);
      wasOpen.current = false;
      return () => clearTimeout(t);
    }
    wasOpen.current = open;
  }, [open]);

  // Lock page scroll and allow Escape while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // The menu grows out of the burger button as a circle, so measure where
  // the button is and how big the circle must get to cover the screen.
  const toggleMenu = () => {
    const r = burgerRef.current.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const m = menuRef.current.style;
    m.setProperty("--mx", `${x}px`);
    m.setProperty("--my", `${y}px`);
    m.setProperty("--mr", `${Math.ceil(radius)}px`);
    setOpen((o) => !o);
  };

  return (
    <>
      <header className={`header${scrolled ? " header--scrolled" : ""}${open || closing ? " header--menu" : ""}`}>
        <a href="#home" className="logo" aria-label="Jonathan, back to top" onClick={() => setOpen(false)}>
          Jonathan<span>.</span>
        </a>

        <div className="header__actions">
          <button
            ref={burgerRef}
            className={`burger${open ? " burger--open" : ""}`}
            onClick={toggleMenu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <nav id="site-menu" ref={menuRef} className={`menu${open ? " menu--open" : ""}`} aria-hidden={!open}>
        <ul className="menu__list">
          {nav.map(({ id, label }, i) => (
            <li key={id} style={{ "--i": i }}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                aria-current={active === id ? "true" : undefined}
              >
                <span className="menu__dot" aria-hidden="true"></span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="menu__footer">
          <span>Handmade with ✦ and Next.js</span>
          <div className="menu__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
