"use client";

// The logo reloads the page and starts from the very top (a fresh load also
// replays the opening animations). Navigating to the bare path drops any
// "#section" from the address, which is what makes it a real reload.
export default function LogoLink({ className = "logo", onClick }) {
  const reload = (e) => {
    e.preventDefault();
    onClick?.();
    window.scrollTo(0, 0);
    window.location.assign(window.location.pathname);
  };

  return (
    <a href="/" className={className} aria-label="Jonathan, reload from the top" onClick={reload}>
      Jonathan<span>.</span>
    </a>
  );
}
