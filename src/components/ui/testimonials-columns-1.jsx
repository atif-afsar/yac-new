import React, { memo } from "react";
import { cn } from "../../lib/utils";

export const TestimonialsColumn = memo(function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
  paused = false,
}) {
  return (
    <div className={className}>
      <div
        className={cn(
          "animate-testimonial-scroll flex flex-col gap-4 pb-4 md:gap-6 md:pb-6",
          paused && "animation-paused"
        )}
        style={{ "--testimonial-duration": `${duration}s` }}
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={`${index}-${i}`}
                className={cn(
                  "w-full max-w-none rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm md:max-w-xs md:rounded-3xl md:p-8",
                  "shadow-yac-red/10"
                )}
              >
                <p className="text-xs leading-relaxed text-neutral-700 md:text-sm">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2 md:mt-5 md:gap-3">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-yac-red/15 md:h-10 md:w-10"
                  />
                  <div className="min-w-0 flex flex-col">
                    <div className="truncate text-xs font-semibold leading-5 tracking-tight text-neutral-900 md:text-sm">
                      {name}
                    </div>
                    <div className="truncate text-[11px] leading-5 tracking-tight text-neutral-500 md:text-xs">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});
