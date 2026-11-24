"use client";

import { useEffect, useState } from "react";
import useScrolledPast from "./useScrolledPast";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Me", button: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const shadow = useScrolledPast(50);

  // Read the theme the inline script in layout.js already applied.
  useEffect(() => {
    setIsDark(document.body.classList.contains("dark-theme"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.body.classList.toggle("dark-theme", next);
    try {
      localStorage.setItem("selected-theme", next ? "dark" : "light");
    } catch {}
  };

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      const y = window.scrollY;
      sections.forEach((section) => {
        const top = section.offsetTop - 58;
        if (y > top && y <= top + section.offsetHeight) {
          setActiveId(section.id);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${shadow ? " shadow-header" : ""}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <span className="nav__logo-circle">J </span>
          <span className="nav__logo-name"> JONATHAN.</span>
        </a>

        <div className={`nav__menu${menuOpen ? " show" : ""}`} id="nav-menu">
          <span className="nav__title">Menu</span>
          <h3 className="nav__name">JONATHAN</h3>

          <ul className="nav__list">
            {links.map(({ id, label, button }) => (
              <li className="nav__item" key={id}>
                <a
                  href={`#${id}`}
                  className={[
                    "nav__link",
                    button && "nav__link-button",
                    activeId === id && "active-link",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__close" id="nav-close" onClick={() => setMenuOpen(false)}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__buttons">
          <i
            className={`${isDark ? "ri-sun-line" : "ri-moon-line"} change-theme`}
            id="theme-button"
            onClick={toggleTheme}
            role="button"
            aria-label="Toggle dark theme"
          ></i>

          <div className="nav__toggle" id="toggle" onClick={() => setMenuOpen(true)}>
            <i className="ri-menu-4-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
