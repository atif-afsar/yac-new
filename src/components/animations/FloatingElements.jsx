/**
 * FloatingElements — decorative motion accents (placeholder)
 *
 * Future implementation:
 * - Framer Motion floating icons, shapes, or book/education motifs
 * - Staggered entrance tied to scroll or hero visibility
 */
export default function FloatingElements({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* TODO: Add framer-motion floating elements for hero / sections */}
    </div>
  );
}
