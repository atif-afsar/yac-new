import { memo, useEffect, useRef, useState } from "react";
import { m, useInView } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import { EASE_OUT_EXPO, gpuLayerStyle } from "../../lib/motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const mobilePills = [
  "Commerce",
  "Science",
  "Junior (5–10)",
  "CA Foundation",
  "CMA",
  "Class 11–12",
  "Entrance Exams",
];

const mobileTrust = [
  { id: "rating", text: "4.9 Google", icon: true },
  { id: "years", text: "10+ Years in Aligarh" },
  { id: "students", text: "1200+ Students" },
];

const shuffle = (array) => {
  const arr = [...array];
  let currentIndex = arr.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
};

const squareData = [
  { id: 1, src: "/Images/Hero/img1.webp", alt: "Yasir Ali Classes — student success" },
  { id: 2, src: "/Images/Hero/img2.webp", alt: "Yasir Ali Classes — classroom session" },
  { id: 3, src: "/Images/Hero/img3.webp", alt: "Yasir Ali Classes — coaching in action" },
  { id: 4, src: "/Images/Hero/img4.webp", alt: "Yasir Ali Classes — learning environment" },
  { id: 5, src: "/Images/Hero/img5.webp", alt: "Yasir Ali Classes — students studying" },
  { id: 6, src: "/Images/Hero/commerce.webp", alt: "Commerce coaching at Yasir Ali Classes" },
  { id: 7, src: "/Images/Hero/entrance.webp", alt: "Entrance exam preparation at YAC" },
  { id: 8, src: "/Images/Hero/regular.webp", alt: "Regular classes at Yasir Ali Classes" },
  { id: 9, src: "/Images/Hero/science.webp", alt: "Science coaching at Yasir Ali Classes" },
  { id: 10, src: "/Images/Hero/1.jpg", alt: "Yasir Ali Classes Aligarh campus" },
  { id: 11, src: "/Images/Hero/2.jpg", alt: "Students at Yasir Ali Classes" },
  { id: 12, src: "/Images/Hero/3.jpg", alt: "YAC classroom moments" },
  { id: 13, src: "/Images/Hero/4.jpg", alt: "YAC faculty and students" },
  { id: 14, src: "/Images/Hero/5.jpg", alt: "Yasir Ali Classes batch" },
  { id: 15, src: "/Images/Hero/6.jpg", alt: "Coaching session at YAC Aligarh" },
  { id: 16, src: "/Images/Hero/7.jpg", alt: "YAC students group photo" },
  { id: 17, src: "/Images/Hero/8.jpg", alt: "Yasir Ali Classes celebration" },
];

const stats = [
  { end: 10, suffix: "+", label: "Years Trust" },
  { end: 100, suffix: "K+", label: "YouTube Family" },
  { end: 20, suffix: "K+", label: "App Downloads" },
  { end: 1200, suffix: "+", label: "Students Enrolled" },
];

const layoutSpring = { duration: 1.5, type: "spring" };

function AnimatedCounter({ end, suffix, duration = 1.8 }) {
  const ref = useRef(null);
  const valueRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView || !valueRef.current) return;

    let frameId;
    const startTime = performance.now();
    const node = valueRef.current;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - (1 - progress) ** 3;
      node.textContent = String(Math.round(eased * end));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      <span ref={valueRef}>0</span>
      {suffix}
    </span>
  );
}

const GridSquare = memo(function GridSquare({ sq }) {
  return (
    <m.div
      layout="position"
      transition={{ layout: layoutSpring }}
      style={gpuLayerStyle}
      className="relative h-full w-full transform-gpu overflow-hidden rounded-lg border border-zinc-900/10 md:rounded-md md:shadow-[3px_3px_0_0_rgba(24,24,27,0.25)]"
    >
      <img
        src={sq.src}
        alt={sq.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-yac-red/15 mix-blend-multiply" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-zinc-900/25 to-transparent"
        aria-hidden="true"
      />
    </m.div>
  );
});

function generateSquares(count = 16) {
  return shuffle(squareData)
    .slice(0, count)
    .map((sq) => <GridSquare key={sq.id} sq={sq} />);
}

function useGridSize() {
  const [gridSize, setGridSize] = useState(9);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setGridSize(mq.matches ? 16 : 9);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return gridSize;
}

function ShuffleGrid() {
  const timeoutRef = useRef(null);
  const gridRef = useRef(null);
  const gridSize = useGridSize();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [squares, setSquares] = useState(() => generateSquares(9));

  useEffect(() => {
    setSquares(generateSquares(gridSize));
  }, [gridSize]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const element = gridRef.current;
    if (!element) return;

    let isVisible = false;

    const stop = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const tick = () => {
      setSquares(generateSquares(gridSize));
      timeoutRef.current = setTimeout(tick, 3000);
    };

    const start = () => {
      if (!timeoutRef.current && isVisible && !document.hidden) {
        timeoutRef.current = setTimeout(tick, 3000);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) start();
        else stop();
      },
      { rootMargin: "100px" }
    );
    observer.observe(element);

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [gridSize, prefersReducedMotion]);

  return (
    <div className="relative w-full" ref={gridRef}>
      <div
        className={cx(
          "overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50 p-1.5",
          "shadow-[0_8px_30px_rgba(24,24,27,0.08)] md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none"
        )}
      >
        <div
          className={cx(
            "grid gap-1",
            "grid-cols-3 grid-rows-3 h-[220px] min-[375px]:h-[250px]",
            "md:grid-cols-4 md:grid-rows-4 md:h-[450px] md:gap-1"
          )}
          aria-hidden="true"
        >
          {squares}
        </div>
      </div>

      <div
        className={cx(
          "absolute -left-3 -top-3 z-10 hidden items-center gap-2 rounded-xl sm:flex",
          "border border-zinc-200 bg-white px-4 py-3",
          "shadow-[4px_4px_0_0_rgba(24,24,27,0.12)] md:-left-5 md:-top-5"
        )}
        aria-label="Yasir Ali Classes logo"
      >
        <Logo size="md" className="h-11 w-11" />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Yasir Ali Classes
          </p>
          <p className="text-sm font-bold text-zinc-900">Aligarh</p>
        </div>
      </div>
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: EASE_OUT_EXPO },
};

function MobileHero({ motionProps, prefersReducedMotion }) {
  const delay = (d) => ({
    ...fadeUp.transition,
    delay: prefersReducedMotion ? 0 : d,
  });

  return (
    <div className="flex flex-col items-center text-center md:hidden">
      <m.div
        {...motionProps}
        transition={delay(0.05)}
        style={gpuLayerStyle}
        className="flex items-center gap-2"
      >
        <span className="font-display text-lg italic tracking-wide text-zinc-900">
          <span className="text-yac-red">Yasir Ali</span> Classes
        </span>
        <span className="rounded-md bg-yac-red px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white">
          YAC
        </span>
      </m.div>

      <m.h1
        {...motionProps}
        transition={delay(0.1)}
        style={gpuLayerStyle}
        className="mt-4 text-balance text-[2rem] font-bold leading-[1.15] tracking-tight text-zinc-900 min-[375px]:text-[2.15rem]"
      >
        Aligarh&apos;s Most Trusted{" "}
        <span className="font-display font-semibold italic text-yac-red">
          Coaching
        </span>{" "}
        for Commerce, Science &amp; CA
      </m.h1>

      <m.ul
        {...motionProps}
        transition={delay(0.15)}
        style={gpuLayerStyle}
        className="mt-5 flex flex-wrap justify-center gap-2"
      >
        {mobilePills.map((pill) => (
          <li
            key={pill}
            className={cx(
              "rounded-full border border-yac-red/30 bg-white px-3 py-1",
              "text-[11px] font-semibold uppercase tracking-wide text-yac-red"
            )}
          >
            {pill}
          </li>
        ))}
      </m.ul>

      <m.p
        {...motionProps}
        transition={delay(0.2)}
        style={gpuLayerStyle}
        className="mt-5 font-display text-base italic text-zinc-500"
      >
        We Debit Efforts, to Credit Your Success.
      </m.p>

      <m.div
        {...motionProps}
        transition={delay(0.25)}
        style={gpuLayerStyle}
        className="mt-6 flex w-full flex-col gap-3"
      >
        <a
          href="#cta"
          className={cx(
            "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4",
            "text-base font-semibold text-white",
            "bg-yac-red shadow-[0_6px_20px_rgba(220,38,38,0.35)]",
            "transition-all active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yac-red focus-visible:ring-offset-2"
          )}
        >
          Join YAC Now
          <ArrowRight className="size-5 shrink-0" aria-hidden="true" />
        </a>
        <a
          href="#courses"
          className={cx(
            "inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-zinc-900/15 bg-white px-6 py-4",
            "text-base font-semibold text-zinc-900",
            "transition-all active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
          )}
        >
          <Play className="size-4 shrink-0 fill-current" aria-hidden="true" />
          Explore Courses
        </a>
      </m.div>

      <m.div
        {...motionProps}
        transition={delay(0.3)}
        style={gpuLayerStyle}
        className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-500"
      >
        {mobileTrust.map((item, index) => (
          <span key={item.id} className="flex items-center gap-3">
            {index > 0 && <span className="text-zinc-300" aria-hidden="true">|</span>}
            <span className="flex items-center gap-1.5">
              {item.icon && (
                <Star className="size-3.5 shrink-0 fill-yac-gold text-yac-gold" aria-hidden="true" />
              )}
              {item.text}
            </span>
          </span>
        ))}
      </m.div>

      <m.div
        {...motionProps}
        transition={delay(0.35)}
        style={gpuLayerStyle}
        className="mt-8 w-full"
      >
        <ShuffleGrid />
      </m.div>
    </div>
  );
}

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const motionProps = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : fadeUp;

  return (
    <section
      id="hero"
      className={cx(
        "relative overflow-x-clip pt-[4.25rem] md:pt-16",
        "bg-gradient-to-b from-white via-zinc-50/90 to-white",
        "text-zinc-900"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.06),_transparent_55%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 pb-12 pt-0 md:pb-12 md:pt-1 lg:pb-14 lg:pt-2">
        <MobileHero motionProps={motionProps} prefersReducedMotion={prefersReducedMotion} />

        <div className="hidden items-center md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="order-1 min-w-0 w-full max-w-xl text-center md:text-left">
            <m.span
              {...motionProps}
              transition={{ ...fadeUp.transition, delay: prefersReducedMotion ? 0 : 0.05 }}
              style={gpuLayerStyle}
              className={cx(
                "mb-3 inline-flex items-center gap-2 rounded-full md:mb-4",
                "border border-yac-red/20 bg-yac-red/5 px-3 py-1",
                "text-[11px] font-semibold text-yac-red min-[375px]:text-xs md:text-sm"
              )}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yac-red" aria-hidden="true" />
              <span className="md:hidden">Trusted Coaching in Aligarh</span>
              <span className="hidden md:inline">Yasir Ali Classes — A Trusted Name</span>
            </m.span>

            <m.h1
              {...motionProps}
              transition={{ ...fadeUp.transition, delay: prefersReducedMotion ? 0 : 0.1 }}
              style={gpuLayerStyle}
              className="text-balance text-[1.65rem] font-bold leading-[1.2] tracking-tight text-zinc-900 min-[375px]:text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem]"
            >
              Best Commerce &amp; Entrance Coaching in{" "}
              <span className="text-yac-red">Aligarh</span>
            </m.h1>

            <m.p
              {...motionProps}
              transition={{ ...fadeUp.transition, delay: prefersReducedMotion ? 0 : 0.15 }}
              style={gpuLayerStyle}
              className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-zinc-600 min-[375px]:mt-4 min-[375px]:text-[15px] md:mx-0 md:mt-6 md:max-w-none md:text-lg"
            >
              Class 11–12 Commerce, Accounts, Economics, Business Studies, CUET,
              AMU, JMI, MBA Entrance &amp; GD-PI — expert guidance, live classes
              &amp; personal mentorship at YAC Aligarh.
            </m.p>

            <m.div
              {...motionProps}
              transition={{ ...fadeUp.transition, delay: prefersReducedMotion ? 0 : 0.2 }}
              style={gpuLayerStyle}
              className="mt-5 flex flex-col gap-2.5 min-[375px]:mt-6 md:mt-8 md:flex-row md:items-center md:gap-3"
            >
              <a
                href="#cta"
                className={cx(
                  "inline-flex items-center justify-center rounded-xl px-6 py-3.5",
                  "text-sm font-semibold text-white md:rounded-lg md:py-3 md:text-base",
                  "bg-yac-red shadow-[0_4px_14px_rgba(220,38,38,0.35)]",
                  "transition-all hover:bg-yac-red/90 active:scale-[0.98]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yac-red focus-visible:ring-offset-2"
                )}
              >
                Join Now
              </a>
              <a
                href="#courses"
                className={cx(
                  "inline-flex items-center justify-center rounded-xl border border-zinc-200",
                  "bg-zinc-50 px-6 py-3.5 text-sm font-semibold text-zinc-800 md:rounded-lg md:border-2 md:border-zinc-900/15 md:bg-white md:py-3 md:text-base",
                  "transition-all hover:bg-zinc-100 active:scale-[0.98] md:hover:border-zinc-900/30 md:hover:bg-zinc-50",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
                )}
              >
                Explore Courses
              </a>
            </m.div>

            <m.ul
              {...motionProps}
              transition={{ ...fadeUp.transition, delay: prefersReducedMotion ? 0 : 0.25 }}
              style={gpuLayerStyle}
              className="mt-6 grid grid-cols-2 gap-2 min-[375px]:mt-7 min-[375px]:gap-2.5 md:mt-10 md:grid-cols-4 md:gap-3 md:border-t md:border-zinc-200/80 md:pt-8"
            >
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className={cx(
                    "min-w-0 rounded-xl border border-zinc-100 bg-white px-2.5 py-2.5",
                    "shadow-sm min-[375px]:px-3 min-[375px]:py-3",
                    "md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none"
                  )}
                >
                  <p className="text-base font-bold text-zinc-900 min-[375px]:text-lg md:text-2xl">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="mt-0.5 text-[10px] font-medium leading-tight text-zinc-500 min-[375px]:text-[11px] md:text-sm">
                    {stat.label}
                  </p>
                </li>
              ))}
            </m.ul>
          </div>

          <m.div
            {...motionProps}
            transition={{ ...fadeUp.transition, delay: prefersReducedMotion ? 0 : 0.3 }}
            style={gpuLayerStyle}
            className="order-2 min-w-0 w-full md:order-2"
          >
            <ShuffleGrid />
          </m.div>
        </div>
      </Container>
    </section>
  );
}
