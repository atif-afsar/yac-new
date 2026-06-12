import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function NavTabs() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeIndex, setActiveIndex] = useState(null);

  const clearHover = () => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
    setActiveIndex(null);
  };

  return (
    <ul
      className={cx(
        "relative mx-auto hidden w-fit max-w-[calc(100vw-13rem)] rounded-full",
        "isolate border-2 border-zinc-200 bg-white p-1",
        "shadow-[3px_3px_0_0_rgba(24,24,27,0.08)]",
        "overflow-x-auto sm:max-w-[calc(100vw-16rem)] lg:max-w-[calc(100vw-22rem)]",
        "md:flex"
      )}
      onMouseLeave={clearHover}
    >
      {navLinks.map((link, index) => (
        <NavTab
          key={link.href}
          href={link.href}
          index={index}
          isActive={activeIndex === index && position.opacity > 0}
          setPosition={setPosition}
          setActiveIndex={setActiveIndex}
        >
          {link.label}
        </NavTab>
      ))}
      <NavCursor position={position} />
    </ul>
  );
}

function NavTab({
  children,
  href,
  index,
  isActive,
  setPosition,
  setActiveIndex,
}) {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setActiveIndex(index);
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 shrink-0"
    >
      <a
        href={href}
        className={cx(
          "block cursor-pointer whitespace-nowrap rounded-full px-3 py-1.5",
          "text-xs font-semibold uppercase tracking-wide transition-colors duration-200",
          "md:px-4 md:py-2 md:text-sm",
          isActive
            ? "text-white"
            : "text-zinc-700 hover:text-zinc-900"
        )}
      >
        {children}
      </a>
    </li>
  );
}

function NavCursor({ position }) {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{ type: "spring", bounce: 0.12, duration: 0.45 }}
      className={cx(
        "pointer-events-none absolute top-1 z-0 h-7 rounded-full bg-zinc-900",
        "md:top-1.5 md:h-9"
      )}
      aria-hidden="true"
    />
  );
}

function MobileSidebar({ open, onClose }) {
  // Lock page scroll while the sidebar is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-zinc-900/45 backdrop-blur-[2px] md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={cx(
              "fixed right-0 top-0 z-[70] flex h-dvh w-[78vw] max-w-xs flex-col",
              "border-l border-zinc-200 bg-white shadow-2xl md:hidden"
            )}
            data-lenis-prevent
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-zinc-200/80 px-4 py-4">
              <div className="flex items-center gap-2.5">
                <Logo size="md" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                    Yasir Ali Classes
                  </span>
                  <span className="text-sm font-bold leading-tight text-zinc-900">
                    Aligarh
                  </span>
                </span>
              </div>
              <button
                type="button"
                className={cx(
                  "rounded-lg border border-zinc-200 bg-white p-2 text-zinc-600",
                  "transition-colors hover:bg-zinc-100 hover:text-zinc-900",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yac-red"
                )}
                aria-label="Close menu"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.04, duration: 0.25 }}
                  >
                    <a
                      href={link.href}
                      className={cx(
                        "flex items-center justify-between rounded-xl px-3.5 py-3",
                        "text-sm font-semibold text-zinc-800",
                        "transition-colors hover:bg-zinc-50 hover:text-yac-red active:bg-zinc-100"
                      )}
                      onClick={onClose}
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 text-zinc-300" aria-hidden="true" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-zinc-200/80 p-4">
              <a
                href="#cta"
                className={cx(
                  "flex w-full items-center justify-center rounded-xl px-5 py-3.5",
                  "text-sm font-semibold text-white bg-yac-red",
                  "shadow-[0_4px_14px_rgba(220,38,38,0.35)]",
                  "transition-all hover:bg-yac-red/90 active:scale-[0.98]"
                )}
                onClick={onClose}
              >
                Join Now
              </a>
              <p className="mt-3 text-center text-[11px] font-medium text-zinc-400">
                Commerce &amp; Entrance Coaching, Aligarh
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 w-full max-w-[100vw]",
        "border-b border-zinc-200 bg-white",
        "shadow-sm"
      )}
    >
      <Container className="max-w-full">
        <nav
          className="flex h-16 w-full items-center gap-3 md:gap-5 lg:gap-6"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="flex shrink-0 items-center gap-2.5"
            onClick={() => setMobileOpen(false)}
          >
            <Logo size="md" />
            <span className="hidden min-w-0 flex-col sm:flex">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                Yasir Ali Classes
              </span>
              <span className="text-sm font-bold leading-tight text-zinc-900">
                Aligarh
              </span>
            </span>
          </a>

          <div className="hidden min-w-0 flex-1 md:block">
            <NavTabs />
          </div>

          <div className="hidden shrink-0 md:ml-1 md:block">
            <a
              href="#cta"
              className={cx(
                "inline-flex items-center justify-center rounded-lg border border-yac-red/20",
                "px-5 py-2.5 text-sm font-semibold text-white bg-yac-red",
                "shadow-[0_4px_12px_rgba(220,38,38,0.35)]",
                "ring-2 ring-white ring-offset-0",
                "transition-all hover:bg-yac-red/90 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yac-red focus-visible:ring-offset-2"
              )}
            >
              Join Now
            </a>
          </div>

          <button
            type="button"
            className={cx(
              "ml-auto inline-flex shrink-0 items-center justify-center rounded-lg md:hidden",
              "border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm",
              "transition-colors hover:bg-zinc-100 hover:text-zinc-900",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yac-red"
            )}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </Container>

      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
