import React from "react";
import { cn } from "../../lib/utils";

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}) {
  return (
    <div className={className}>
      <div
        className="animate-testimonial-scroll flex flex-col gap-6 pb-6"
        style={{ "--testimonial-duration": `${duration}s` }}
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={`${index}-${i}`}
                className={cn(
                  "w-full max-w-xs rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-sm",
                  "shadow-yac-red/10"
                )}
              >
                <p className="text-sm leading-relaxed text-neutral-700 sm:text-[15px]">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-yac-red/15"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm font-semibold leading-5 tracking-tight text-neutral-900">
                      {name}
                    </div>
                    <div className="text-xs leading-5 tracking-tight text-neutral-500">
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
}
