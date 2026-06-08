"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

export interface FadeInProps extends MotionProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

/**
 * Reusable FadeIn animation wrapper
 * Used for simple fade-in animations on mount
 */
export function FadeIn({
  children,
  duration = 0.6,
  delay = 0,
  ...motionProps
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export interface SlideInProps extends MotionProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  delay?: number;
}

/**
 * Reusable SlideIn animation wrapper
 * Slides element in from specified direction on mount
 */
export function SlideIn({
  children,
  direction = "up",
  distance = 24,
  duration = 0.6,
  delay = 0,
  ...motionProps
}: SlideInProps) {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export interface ScaleInProps extends MotionProps {
  children: ReactNode;
  scale?: number;
  duration?: number;
  delay?: number;
}

/**
 * Reusable ScaleIn animation wrapper
 * Scales element from initial scale to 1 on mount
 */
export function ScaleIn({
  children,
  scale = 0.98,
  duration = 0.6,
  delay = 0,
  ...motionProps
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerContainerProps extends MotionProps {
  children: ReactNode;
  staggerDelay?: number;
}

/**
 * Reusable StaggerContainer for staggering child animations
 * Used with motion children that have Framer Motion variants
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.05,
  ...motionProps
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export interface WhileInViewProps extends MotionProps {
  children: ReactNode;
  duration?: number;
  yOffset?: number;
}

/**
 * Reusable WhileInView animation wrapper
 * Animates when element enters viewport
 */
export function WhileInView({
  children,
  duration = 0.35,
  yOffset = 20,
  ...motionProps
}: WhileInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
