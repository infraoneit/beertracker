"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Vertical travel distance in pixels. */
  y?: number;
  once?: boolean;
};

/**
 * Fades + slides content into view on scroll.
 * Server-rendered children stay in the DOM (SEO-safe); only the entrance
 * animation is client-side. Honors `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered container — children using <StaggerItem> animate in sequence
 * as the group scrolls into view.
 */
export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const variants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: reduce ? {} : { opacity: 0, y },
    show: reduce
      ? {}
      : { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
