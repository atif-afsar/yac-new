import { memo, useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { gpuLayerStyle } from "../../lib/motion";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export function ContainerScroll({ titleComponent, children }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });
  const isMobile = useMediaQuery("(max-width: 768px)");

  const scaleRange = isMobile ? [0.9, 1] : [1.05, 1];
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div
      ref={containerRef}
      className={cx(
        "relative flex items-center justify-center overflow-x-clip px-3 sm:px-4 md:px-6",
        "h-[46rem] sm:h-[54rem] md:h-[68rem] lg:h-[74rem]",
        "section-scroll-driven"
      )}
    >
      <div
        className="relative w-full max-w-4xl py-10 sm:py-14 md:py-20 lg:max-w-5xl lg:py-24"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        <ScrollHeader translate={translate} titleComponent={titleComponent} />
        <ScrollCard rotate={rotate} scale={scale}>
          {children}
        </ScrollCard>
      </div>
    </div>
  );
}

const ScrollHeader = memo(function ScrollHeader({ translate, titleComponent }) {
  return (
    <m.div
      style={{ y: translate, ...gpuLayerStyle }}
      className="mx-auto max-w-3xl text-center sm:max-w-4xl transform-gpu"
    >
      {titleComponent}
    </m.div>
  );
});

const ScrollCard = memo(function ScrollCard({ rotate, scale, children }) {
  return (
    <m.div
      style={{
        rotateX: rotate,
        scale,
        transformOrigin: "top center",
        transformPerspective: 1200,
        ...gpuLayerStyle,
      }}
      className={cx(
        "mx-auto -mt-6 w-full rounded-2xl border-2 border-zinc-200 bg-white p-2",
        "shadow-[0_12px_40px_rgba(24,24,27,0.1)]",
        "max-w-[min(100%,21rem)] sm:max-w-sm sm:-mt-8 sm:rounded-3xl sm:p-2.5",
        "md:max-w-xl md:-mt-10 md:p-3",
        "lg:max-w-3xl lg:p-4",
        "xl:max-w-4xl",
        "transform-gpu"
      )}
    >
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 sm:rounded-2xl">
        {children}
      </div>
    </m.div>
  );
});
