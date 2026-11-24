"use client";

import { useEffect, useState } from "react";
import { nav, socials } from "./data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and allow Escape while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("selected-theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <>
      <header className={`header${scrolled ? " header--scrolled" : ""}${open ? " header--menu" : ""}`}>
        <a href="#home" className="logo" aria-label="Jonathan, back to top">
          Jonathan<span>.</span>
        </a>

        <div className="header__actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark theme">
            <i className={isDark ? "ri-sun-line" : "ri-moon-line"}></i>
          </button>
          <button
            className={`burger${open ? " burger--open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <nav className={`menu${open ? " menu--open" : ""}`} aria-hidden={!open}>
        <ul className="menu__list">
          {nav.map(({ id, label }, i) => (
            <li key={id} style={{ "--i": i }}>
              <a href={`#${id}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                <span className="menu__num">0{i + 1}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu__footer">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              {s.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
