import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * RevealAnimation — scroll / mount reveal wrapper (foundation)
 * Extend with viewport options and stagger children in sections.
 */
export default function RevealAnimation({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  as = "div",
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={defaultVariants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
