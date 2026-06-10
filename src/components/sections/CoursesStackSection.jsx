import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { courses } from "../../data/courses";
import { cn } from "../../lib/utils";

function StickyCard({ course, index, progress, total }) {
  const start = index / total;
  const end = (index + 1) / total;

  const scale = useTransform(progress, [start, end], [1, 0.94]);
  const y = useTransform(progress, [start, end], [0, -30]);

  const hasHighlights = course.highlights?.length > 0;

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-3 py-4 sm:px-4 sm:py-6">
      <motion.div
        style={{
          scale,
          y,
          backgroundColor: course.bg,
          zIndex: index + 1,
          willChange: "transform",
        }}
        className={cn(
          "relative flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-black/10 shadow-2xl sm:rounded-3xl",
          "max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)]",
          "p-4 sm:p-6 md:p-8 lg:p-12",
          course.lightText ? "text-white" : "text-black"
        )}
      >
        <h2
          className={cn(
            "shrink-0 text-center text-lg font-bold leading-snug sm:text-2xl md:mb-2 md:text-3xl lg:text-4xl",
            hasHighlights ? "mb-3 sm:mb-4" : "mb-4 sm:mb-6 md:mb-10",
            course.lightText ? "text-white" : "text-black"
          )}
        >
          {course.title}
        </h2>

        <div className="flex min-h-0 flex-1 flex-col gap-4 sm:gap-6 md:grid md:grid-cols-2 md:items-center md:gap-10">
          <div className="order-2 flex min-h-0 flex-col md:order-1">
            <p
              className={cn(
                "text-sm leading-relaxed sm:text-base md:text-lg md:leading-8",
                course.lightText ? "text-white/90" : "text-neutral-700"
              )}
            >
              {course.description}
            </p>

            {hasHighlights && (
              <ul
                className={cn(
                  "mt-2 grid grid-cols-1 gap-x-4 gap-y-0.5 text-xs sm:mt-3 sm:grid-cols-2 sm:text-sm md:mt-4 md:block md:space-y-1 md:text-base",
                  course.lightText ? "text-white/85" : "text-neutral-600"
                )}
              >
                {course.highlights.map((item) => (
                  <li key={item} className="flex gap-1.5 sm:gap-2">
                    <span
                      className={cn(
                        "shrink-0",
                        course.lightText ? "text-white" : "text-yac-red"
                      )}
                    >
                      •
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <a
              href="#cta"
              className={cn(
                "mt-3 inline-flex w-fit items-center gap-2 text-sm font-semibold sm:mt-4 sm:gap-3 sm:text-base md:mt-6",
                course.lightText ? "text-white" : "text-yac-red"
              )}
            >
              Enroll Now <span aria-hidden>→</span>
            </a>
          </div>

          <div className="order-1 h-36 shrink-0 overflow-hidden rounded-xl sm:h-44 md:order-2 md:h-[280px] md:rounded-2xl lg:h-[360px]">
            <img
              src={course.image}
              alt={course.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const stackCourses = courses.map((course) => ({
  id: course.id,
  title: course.title,
  description: course.description,
  image: course.image,
  bg: course.color,
  highlights: course.highlights,
  lightText: course.lightText,
}));

export default function CoursesStackSection() {
  const containerRef = useRef(null);
  const total = stackCourses.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${total * 100}vh` }}
    >
      {stackCourses.map((course, index) => (
        <StickyCard
          key={course.id}
          course={course}
          index={index}
          progress={scrollYProgress}
          total={total}
        />
      ))}
    </section>
  );
}
