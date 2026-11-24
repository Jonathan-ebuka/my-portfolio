"use client";

import { useEffect } from "react";

// ScrollReveal touches `window`, so it's loaded only in the browser.
export default function ScrollRevealInit() {
  useEffect(() => {
    let sr;
    import("scrollreveal").then(({ default: ScrollReveal }) => {
      sr = ScrollReveal({ duration: 1500, distance: "70px", easing: "ease-out", reset: true });
      sr.reveal(".reveal-left", { origin: "left" });
      sr.reveal(".reveal-right", { origin: "right" });
      sr.reveal(".reveal-top", { origin: "top" });
      sr.reveal(".reveal-bottom", { origin: "bottom" });
    });
    return () => sr?.destroy();
  }, []);

  return null;
}
