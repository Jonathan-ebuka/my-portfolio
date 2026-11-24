"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Smooth, slightly weighted scrolling for mouse and trackpad on desktop.
// Phones and tablets keep their native touch scrolling, and it's skipped
// for anyone who has asked their system for reduced motion.
export default function SmoothScroll() {
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis = null;

    const start = () => {
      if (lenis || !desktop.matches || reduced.matches) return;
      lenis = new Lenis({
        autoRaf: true,
        // a timed glide with an "ease-out-expo" curve: starts quickly, settles
        // gently. Feels steadier than chasing the scroll position, which can
        // lag behind (especially on Mac trackpads). Raise duration for a
        // longer glide, lower it for a snappier one.
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        // header links and "Back to top" glide to their section; the page's
        // scroll-padding-top keeps them clear of the fixed header
        anchors: true,
      });
    };
    const stop = () => {
      lenis?.destroy();
      lenis = null;
    };
    const update = () => (desktop.matches && !reduced.matches ? start() : stop());

    update();
    desktop.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
      stop();
    };
  }, []);

  return null;
}
