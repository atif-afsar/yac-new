import { memo } from "react";
import { m } from "framer-motion";
import { EASE_OUT_QUART, gpuLayerStyle } from "../../lib/motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const instantVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

/**
 * RevealAnimation — scroll / mount reveal wrapper (foundation)
 * Extend with viewport options and stagger children in sections.
 */
function RevealAnimation({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  as = "div",
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const Component = m[as] ?? m.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={prefersReducedMotion ? instantVariants : defaultVariants}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration, delay, ease: EASE_OUT_QUART }
      }
      style={gpuLayerStyle}
    >
      {children}
    </Component>
  );
}

export default memo(RevealAnimation);
