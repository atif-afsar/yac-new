import { motion } from "framer-motion";
import { GraduationCap, Phone, Sparkles } from "lucide-react";
import Container from "../common/Container";
import { InteractiveRobotSpline } from "../ui/interactive-3d-robot";
import { cn } from "../../lib/utils";

const ROBOT_SCENE_URL =
  "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

const highlights = [
  "Class 11–12 Boards",
  "CUET & Entrance Prep",
  "Commerce & Science",
  "Aligarh Campus",
];

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-x-clip bg-white py-20 text-neutral-900 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yac-red/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-yac-red/5 blur-3xl sm:-bottom-32 sm:-left-24 sm:h-80 sm:w-80"
      />

      <Container className="relative z-10">
        <div className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-white">
          <div className="grid min-h-[520px] md:min-h-[620px] md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex items-center px-5 py-10 sm:px-8 md:px-10 md:py-14"
            >
              <div className="w-full max-w-lg">
                <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg border border-yac-red/25 bg-yac-red/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yac-red">
                  <Sparkles className="size-3.5" aria-hidden />
                  Admissions Open
                </span>

                <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
                  Your Future Starts at{" "}
                  <span className="text-yac-red">Yasir Ali Classes</span>
                </h2>

                <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                  Join Aligarh&apos;s trusted coaching institute for boards,
                  university programs, and competitive entrances — with expert
                  faculty, structured batches, and personal mentorship.
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-700 sm:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="tel:+910000000000"
                    className={cn(
                      "inline-flex w-full items-center justify-center rounded-lg px-6 py-3",
                      "text-sm font-semibold text-white sm:w-auto md:text-base",
                      "bg-yac-red shadow-[0_4px_14px_rgba(220,38,38,0.35)]",
                      "transition-all hover:bg-yac-red/90 active:scale-[0.98]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yac-red focus-visible:ring-offset-2"
                    )}
                  >
                    <Phone className="mr-2 size-4" aria-hidden />
                    Call for Admission
                  </a>
                  <a
                    href="#courses"
                    className={cn(
                      "inline-flex w-full items-center justify-center rounded-lg border-2 border-zinc-900/15",
                      "bg-white px-6 py-3 text-sm font-semibold text-zinc-900 sm:w-auto md:text-base",
                      "transition-all hover:border-zinc-900/30 hover:bg-zinc-50 active:scale-[0.98]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
                    )}
                  >
                    <GraduationCap className="mr-2 size-4" aria-hidden />
                    Explore Courses
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="relative min-h-[320px] md:min-h-full">
              <InteractiveRobotSpline
                scene={ROBOT_SCENE_URL}
                className="absolute inset-0 h-full w-full"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 hidden w-12 bg-gradient-to-r from-white to-transparent md:block"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
