/**
 * cn — lightweight className combiner.
 * Mirrors the project's existing `cx` helper (no clsx/tailwind-merge needed),
 * keeping bundle size small and renders lag-free.
 */
export function cn(...classes) {
  return classes.flat(Infinity).filter(Boolean).join(" ");
}
