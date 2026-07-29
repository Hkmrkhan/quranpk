"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function CounterNumber({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 2,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function: easeOutExpo for smooth slowing at end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = easeProgress * value;

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
