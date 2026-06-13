import { LazyMotion, domMax } from "framer-motion";

/**
 * LazyMotion + domMax: tree-shaken motion features with layout animation support
 * (required by Hero shuffle grid). Same visuals, smaller initial parse cost.
 */
export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  );
}
