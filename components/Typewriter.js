"use client";

import { useEffect, useState } from "react";

// Types `text` out one character at a time, with a blinking caret.
// The full text is laid out invisibly underneath, so nothing around it
// shifts while it types, and screen readers get the whole line at once.
export default function Typewriter({ text, delay = 0, speed = 65, className = "", caret = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }
    let i = 0;
    let timer;
    const tick = () => {
      i += 1;
      setCount(i);
      // a little randomness so it feels hand-typed
      if (i < text.length) timer = setTimeout(tick, speed + Math.random() * speed * 0.8);
    };
    timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return (
    <span className={`typewriter ${className}`}>
      <span className="typewriter__ghost" aria-hidden="true">{text}</span>
      <span className="typewriter__typed" aria-hidden="true">
        {text.slice(0, count)}
        <span className={`typewriter__caret ${caret}`}></span>
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
