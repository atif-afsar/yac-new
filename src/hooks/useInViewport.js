import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element is in (or near) the viewport.
 * Used to pause expensive animations while their section is off-screen.
 */
export function useInViewport({ rootMargin = "200px", threshold = 0 } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, isInView];
}
