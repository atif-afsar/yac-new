import { cn } from "../../lib/utils";

/**
 * Animated scan loader — YAC branded barcode-style reveal.
 */
export default function AnimatedScanLoader({ className }) {
  return (
    <div
      className={cn(
        "relative max-w-fit font-sans font-extrabold not-italic tracking-[0.08em]",
        "text-yac-red transition-colors duration-1000",
        className
      )}
      aria-hidden="true"
    >
      <span className="animate-cut transition-all duration-1000 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
        YAC
      </span>
      <div
        className={cn(
          "absolute left-0 top-0 z-0 h-[6px] w-full rounded-full",
          "bg-yac-red/55 blur-[10px] animate-scan",
          "transition-all duration-1000 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
        )}
      />
      <div
        className={cn(
          "absolute left-0 top-0 z-[1] h-[5px] w-full rounded-full",
          "bg-yac-red opacity-90 animate-scan",
          "transition-all duration-1000 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
        )}
      />
    </div>
  );
}
