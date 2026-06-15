import { useEffect, useState } from "react";
import AnimatedScanLoader from "./animated-scan-loader";
import { cn } from "../../lib/utils";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const MIN_LOAD_MS = 1400;
const FADE_MS = 500;

/**
 * Full-screen loader shown on initial page load / refresh.
 * Hides after window load + minimum display time for a smooth handoff.
 */
export default function PageLoader() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState("loading"); // loading | fading | hidden

  useEffect(() => {
    if (prefersReducedMotion) {
      setPhase("hidden");
      return;
    }

    const startedAt = performance.now();
    let fadeTimer;
    let hideTimer;

    const complete = () => {
      const elapsed = performance.now() - startedAt;
      const wait = Math.max(0, MIN_LOAD_MS - elapsed);

      fadeTimer = window.setTimeout(() => {
        setPhase("fading");
        hideTimer = window.setTimeout(() => setPhase("hidden"), FADE_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      complete();
    } else {
      window.addEventListener("load", complete, { once: true });
    }

    return () => {
      window.removeEventListener("load", complete);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [prefersReducedMotion]);

  if (phase === "hidden") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Yasir Ali Classes"
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center",
        "bg-gradient-to-b from-white via-zinc-50 to-white",
        "transition-opacity duration-500 ease-out",
        phase === "fading" && "pointer-events-none opacity-0"
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06),_transparent_70%)]"
      />

      <div className="relative flex flex-col items-center gap-5">
        <AnimatedScanLoader className="text-[5.5rem] min-[375px]:text-[6.5rem] sm:text-[7.5rem]" />

        <p className="font-display text-base italic tracking-wide text-zinc-900 min-[375px]:text-lg">
          <span className="text-yac-red">Yasir Ali</span> Classes
        </p>
      </div>
    </div>
  );
}
