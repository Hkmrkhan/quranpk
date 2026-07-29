"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none" | "zoom" | "flip";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0.1,
  duration = 0.7,
  className = "",
  distance = 35,
  once = true,
}: ScrollRevealProps) {
  const getInitialState = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0, scale: 0.98 };
      case "down":
        return { y: -distance, opacity: 0, scale: 0.98 };
      case "left":
        return { x: distance, opacity: 0, scale: 0.98 };
      case "right":
        return { x: -distance, opacity: 0, scale: 0.98 };
      case "zoom":
        return { opacity: 0, scale: 0.9 };
      case "flip":
        return { opacity: 0, rotateX: 20, y: distance };
      case "none":
        return { opacity: 0 };
      default:
        return { y: distance, opacity: 0, scale: 0.98 };
    }
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
      }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Fluid custom spring curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
