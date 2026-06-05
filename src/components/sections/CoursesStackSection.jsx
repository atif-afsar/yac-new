import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { courses } from "../../data/courses";
import { cn } from "../../lib/utils";

function StickyCard({ course, index, progress, total }) {
  const start = index / total;
  const end = (index + 1) / total;

  const scale = useTransform(progress, [start, end], [1, 0.94]);
  const y = useTransform(progress, [start, end], [0, -30]);

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-4">
      <motion.div
        style={{
          scale,
          y,
          backgroundColor: course.bg,
          zIndex: index + 1,
        }}
        className={cn(
          "relative min-h-[520px] w-full max-w-6xl overflow-hidden rounded-3xl border border-black/10 p-8 shadow-2xl md:p-12",
          course.lightText ? "text-white" : "text-black"
        )}
      >
        <h2
          className={cn(
            "mb-10 text-center text-3xl font-bold md:text-4xl",
            course.lightText ? "text-white" : "text-black"
          )}
        >
          {course.title}
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <p
              className={cn(
                "text-lg leading-8",
                course.lightText ? "text-white/90" : "text-neutral-700"
              )}
            >
              {course.description}
            </p>

            {course.highlights?.length > 0 && (
              <ul
                className={cn(
                  "mt-4 space-y-1 text-sm md:text-base",
                  course.lightText ? "text-white/85" : "text-neutral-600"
                )}
              >
                {course.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className={course.lightText ? "text-white" : "text-yac-red"}>
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <a
              href="#cta"
              className={cn(
                "mt-6 inline-flex items-center gap-3 font-semibold",
                course.lightText ? "text-white" : "text-yac-red"
              )}
            >
              Enroll Now <span aria-hidden>→</span>
            </a>
          </div>

          <div className="h-[260px] overflow-hidden rounded-2xl md:h-[360px]">
            <img
              src={course.image}
              alt={course.title}
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
