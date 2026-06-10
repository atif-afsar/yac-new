import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";

const cx = (...classes) => classes.filter(Boolean).join(" ");

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
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
    alt: "Graduation ceremony",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1427504492585-7158c1399e86?auto=format&fit=crop&w=600&q=80",
    alt: "Classroom with desks",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0e?auto=format&fit=crop&w=600&q=80",
    alt: "Books and learning materials",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1523240795612-9a054d0db644?auto=format&fit=crop&w=600&q=80",
    alt: "Students on campus",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    alt: "Lecture hall",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1434030214721-ab48d1a09d6f?auto=format&fit=crop&w=600&q=80",
    alt: "Student taking notes",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1488190217585-6cd000e9453f?auto=format&fit=crop&w=600&q=80",
    alt: "Studying with laptop",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    alt: "Group study session",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1516321318423-f06f8e86b1a5?auto=format&fit=crop&w=600&q=80",
    alt: "Online learning setup",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1509062522246-3755597927d8?auto=format&fit=crop&w=600&q=80",
    alt: "Teacher in classroom",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    alt: "Students collaborating",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80",
    alt: "Library shelves",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1497633767063-fcb29cf60a21?auto=format&fit=crop&w=600&q=80",
    alt: "Open books",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1524999349-27308-ea8133140f8d?auto=format&fit=crop&w=600&q=80",
    alt: "Exam preparation",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1606761568499-6d24583b30c2?auto=format&fit=crop&w=600&q=80",
    alt: "Remote coaching class",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    alt: "Mentorship discussion",
  },
];

const stats = [
  { value: "12+", label: "Years Trust" },
  { value: "100K+", label: "YouTube Family" },
  { value: "20K+", label: "App Downloads" },
  { value: "1200+", label: "Students Enrolled" },
];

function generateSquares() {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="relative h-full w-full overflow-hidden rounded-md border border-zinc-900/10 shadow-[3px_3px_0_0_rgba(24,24,27,0.25)]"
      role="img"
      aria-label={sq.alt}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sq.src})` }}
      />
      <div className="absolute inset-0 bg-yac-red/15 mix-blend-multiply" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-zinc-900/25 to-transparent"
        aria-hidden="true"
      />
    </motion.div>
  ));
}

function ShuffleGrid() {
  const timeoutRef = useRef(null);
  const gridRef = useRef(null);
  const [squares, setSquares] = useState(() => generateSquares());

  useEffect(() => {
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
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(tick, 3000);
    };

    const start = () => {
      if (!timeoutRef.current && isVisible && !document.hidden) {
        timeoutRef.current = setTimeout(tick, 3000);
      }
    };

    // Shuffle only while the hero is on screen and the tab is focused.
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) start();
      else stop();
    });
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
  }, []);

  return (
    <div className="relative" ref={gridRef}>
      <div
        className="grid h-[320px] grid-cols-4 grid-rows-4 gap-1 sm:h-[380px] md:h-[450px]"
        aria-hidden="true"
      >
        {squares.map((sq) => sq)}
      </div>

      <div
        className={cx(
          "absolute -left-3 -top-3 z-10 flex items-center gap-2 rounded-xl",
          "border border-zinc-200 bg-white px-3 py-2",
          "shadow-[4px_4px_0_0_rgba(24,24,27,0.12)] sm:-left-5 sm:-top-5 sm:px-4 sm:py-3"
        )}
        aria-label="Yasir Ali Classes logo"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yac-red text-sm font-bold tracking-tight text-white sm:h-11 sm:w-11 sm:text-base">
          YAC
        </div>
        <div className="hidden min-w-0 sm:block">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Yasir Ali Classes
          </p>
          <p className="text-sm font-bold text-zinc-900">Aligarh</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className={cx(
        "relative overflow-hidden pt-16 md:pt-[4.5rem]",
        "bg-gradient-to-b from-white via-zinc-50/90 to-white",
        "text-zinc-900"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.06),_transparent_55%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 pt-4 pb-10 md:pt-6 md:pb-12 lg:pt-8 lg:pb-14">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="order-1 max-w-xl md:order-1">
            <span
              className={cx(
                "mb-4 inline-flex items-center gap-2 rounded-full border border-yac-red/20",
                "bg-yac-red/5 px-3 py-1 text-xs font-semibold text-yac-red md:text-sm"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-yac-red" aria-hidden="true" />
              Yasir Ali Classes — A Trusted Name
            </span>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
              Best Commerce &amp; Entrance Coaching in{" "}
              <span className="relative inline-block">
                Aligarh
                <span
                  className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-yac-red/80"
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-zinc-600 md:mt-6 md:text-lg">
              Prepare for Class 11–12, AMU, JMI, CUET, Foundation, Commerce,
              Humanities &amp; Management with expert guidance, live classes, test
              series and personal mentorship.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#cta"
                className={cx(
                  "inline-flex items-center justify-center rounded-lg px-6 py-3",
                  "text-center text-sm font-semibold text-white md:text-base",
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
                  "inline-flex items-center justify-center rounded-lg border-2 border-zinc-900/15",
                  "bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 md:text-base",
                  "transition-all hover:border-zinc-900/30 hover:bg-zinc-50 active:scale-[0.98]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
                )}
              >
                Explore Courses
              </a>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-4 border-t border-zinc-200/80 pt-8 sm:grid-cols-4 sm:gap-3">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <p className="text-xl font-bold text-zinc-900 sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-zinc-500 sm:text-sm">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-2 w-full md:order-2">
            <ShuffleGrid />
          </div>
        </div>
      </Container>
    </section>
  );
}
