"use client";

import useScrolledPast from "./useScrolledPast";

export default function ScrollUp() {
  const show = useScrolledPast(350);

  return (
    <a href="#home" className={`scrollup${show ? " show-scroll" : ""}`} id="scroll-up" aria-label="Scroll to top">
      <i className="ri-arrow-up-s-line"></i>
    </a>
  );
}
