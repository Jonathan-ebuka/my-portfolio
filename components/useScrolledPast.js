"use client";

import { useEffect, useState } from "react";

// Returns true once the page has scrolled at least `threshold` pixels.
export default function useScrolledPast(threshold) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY >= threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return past;
}
