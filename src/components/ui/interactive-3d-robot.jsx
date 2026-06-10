import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

const Spline = lazy(() => import("@splinetool/react-spline"));

function Spinner() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-50 text-neutral-900">
      <svg
        className="mr-3 h-5 w-5 animate-spin text-yac-red"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"
        />
      </svg>
      <span className="text-sm text-neutral-500">Loading experience…</span>
    </div>
  );
}

export function InteractiveRobotSpline({ scene, className }) {
  const containerRef = useRef(null);
  const appRef = useRef(null);
  // Mount the heavy WebGL runtime only once the section approaches the viewport.
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldMount(true);

        // Pause/resume the render loop when scrolling past the section.
        const app = appRef.current;
        if (!app) return;
        try {
          if (entry.isIntersecting) app.play?.();
          else app.stop?.();
        } catch {
          /* runtime may not expose play/stop on every version */
        }
      },
      { rootMargin: "250px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn("h-full w-full", className)}>
      {shouldMount ? (
        <Suspense fallback={<Spinner />}>
          <Spline
            scene={scene}
            className="h-full w-full"
            renderOnDemand
            onLoad={(app) => {
              appRef.current = app;
            }}
          />
        </Suspense>
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-yac-red/5 via-zinc-50 to-white" />
      )}
    </div>
  );
}
