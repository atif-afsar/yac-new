import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

export function StackingCard({
  i,
  title,
  description,
  highlights = [],
  image,
  color,
  lightText = false,
  progress,
  range,
  targetScale,
}) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.6, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-0 flex h-screen items-center justify-center"
      style={{ zIndex: i + 1 }}
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={cn(
          "relative -top-[25%] flex h-[480px] w-[92%] max-w-5xl origin-top flex-col rounded-2xl border border-neutral-200/80 p-6 shadow-2xl shadow-neutral-300/40 md:h-[450px] md:w-[70%] md:p-10",
          highlights.length > 0 && "h-[520px] md:h-[480px]",
          lightText ? "text-white" : "text-neutral-900"
        )}
      >
        <h3 className="shrink-0 text-center text-xl font-bold md:text-2xl">{title}</h3>

        <div className="mt-5 flex h-full min-h-0 flex-col gap-5 md:mt-6 md:flex-row md:gap-10">
          <div className="flex shrink-0 flex-col justify-center md:relative md:top-[10%] md:w-[40%]">
            <p
              className={cn(
                "text-sm leading-relaxed md:text-base",
                lightText ? "text-white/90" : "text-neutral-600"
              )}
            >
              {description}
            </p>
            {highlights.length > 0 && (
              <ul
                className={cn(
                  "mt-2 max-h-28 space-y-1 overflow-y-auto pr-1 text-xs md:max-h-36 md:text-sm",
                  lightText ? "text-white/85" : "text-neutral-600"
                )}
              >
                {highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className={lightText ? "text-white" : "text-yac-red"}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            <a
              href="#cta"
              className={cn(
                "mt-4 inline-flex w-fit items-center gap-2 pt-1 text-sm font-semibold underline-offset-4 transition-colors hover:underline",
                lightText ? "text-white" : "text-yac-red"
              )}
            >
              Enroll Now
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>

          <div className="relative min-h-[160px] w-full flex-1 overflow-hidden rounded-xl md:min-h-0 md:w-[60%]">
            <motion.div
              className="relative h-full min-h-[160px] w-full md:min-h-[220px]"
              style={{ scale: imageScale }}
            >
              <img
                src={image}
                alt={title}
                loading="eager"
                decoding="async"
                className="block h-full min-h-[160px] w-full rounded-xl object-cover md:min-h-[220px]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function StackingCards({ items }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const count = items.length;

  return (
    <section ref={container} className="relative w-full bg-white">
      {items.map((course, i) => {
        const targetScale = 1 - (count - i) * 0.05;
        const rangeStart = count > 1 ? i / (count - 1) : 0;

        return (
          <StackingCard
            key={course.id}
            i={i}
            title={course.title}
            description={course.description}
            highlights={course.highlights}
            image={course.image}
            color={course.color}
            lightText={course.lightText}
            progress={scrollYProgress}
            range={[rangeStart, 1]}
            targetScale={Math.max(targetScale, 0.75)}
          />
        );
      })}
    </section>
  );
}
