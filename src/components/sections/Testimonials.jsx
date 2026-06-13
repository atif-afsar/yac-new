import { m } from "framer-motion";
import Container from "../common/Container";
import { TestimonialsColumn } from "../ui/testimonials-columns-1";
import { testimonials } from "../../data/testimonials";
import { EASE_OUT_EXPO, gpuLayerStyle } from "../../lib/motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useInViewport } from "../../hooks/useInViewport";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [columnsRef, columnsInView] = useInViewport({ rootMargin: "120px" });
  const scrollPaused = !columnsInView;

  return (
    <section
      id="testimonials"
      className="relative overflow-x-clip bg-white py-20 text-neutral-900 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yac-red/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-yac-purple/5 blur-3xl sm:-bottom-32 sm:-left-24 sm:h-80 sm:w-80"
      />

      <Container className="relative z-10">
        <m.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT_EXPO }}
          viewport={{ once: true }}
          style={gpuLayerStyle}
          className="mx-auto flex max-w-[540px] flex-col items-center justify-center"
        >
          <div className="flex justify-center">
            <span className="rounded-lg border border-yac-red/25 bg-yac-red/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-yac-red">
              Testimonials
            </span>
          </div>

          <h2 className="mt-5 text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            What Students &amp; Parents Say
          </h2>
          <p className="mt-4 text-center text-neutral-600 sm:text-lg">
            Real stories from learners and families who trust Yasir Ali Classes
            for boards, university, and entrance exam coaching in Aligarh.
          </p>
        </m.div>

        <div
          ref={columnsRef}
          className="mx-auto mt-10 flex max-h-[min(68vh,580px)] justify-center gap-3 overflow-hidden md:max-h-[740px] md:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
          data-scroll-paused={scrollPaused ? "true" : undefined}
        >
          <TestimonialsColumn
            testimonials={firstColumn}
            className="min-w-0 flex-1 md:flex-none"
            duration={15}
            paused={scrollPaused}
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="min-w-0 flex-1 md:flex-none"
            duration={19}
            paused={scrollPaused}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
            paused={scrollPaused}
          />
        </div>
      </Container>
    </section>
  );
}
