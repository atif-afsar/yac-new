/**
 * LazyMotion-compatible motion primitives — import `m` instead of `motion`
 * when wrapped in MotionProvider for smaller bundle + faster hydration.
 */
export { m } from "framer-motion";

/** Shared easing curves — keeps timing identical across sections */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
export const EASE_OUT_QUART = [0.22, 1, 0.36, 1];

/** GPU-friendly inline styles for scroll-linked / animated layers */
export const gpuLayerStyle = {
  transform: "translateZ(0)",
  backfaceVisibility: "hidden",
};
