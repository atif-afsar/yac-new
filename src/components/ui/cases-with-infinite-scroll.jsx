import { useEffect, useMemo, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./carousel";
import { useInViewport } from "../../hooks/useInViewport";
import { cn } from "../../lib/utils";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function buildTiles(results) {
  if (!results?.length) return [];
  return results.map((r) => ({
    id: String(r.id),
    title: r.achievement,
    category: r.category,
    year: r.year,
    image: r.image,
  }));
}

export function CasesWithInfiniteScroll({ results = [], className = "" }) {
  const [api, setApi] = useState();
  const [containerRef, isInView] = useInViewport({ rootMargin: "80px" });

  const tiles = useMemo(() => buildTiles(results), [results]);

  useEffect(() => {
    if (!api || tiles.length === 0 || !isInView) return;

    const interval = setInterval(() => {
      const snaps = api.scrollSnapList()?.length ?? 0;
      if (snaps <= 1) return;

      const next = clamp(api.selectedScrollSnap() + 1, 0, snaps - 1);

      if (next === snaps - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 1100);

    return () => clearInterval(interval);
  }, [api, tiles.length, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full overflow-x-clip",
        "mt-5 sm:mt-8 sm:pb-6 lg:pb-10",
        className
      )}
    >
      <div className="-mx-4 sm:mx-0">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
            dragFree: false,
            containScroll: "trimSnaps",
          }}
          className="w-full touch-pan-y"
        >
          <CarouselContent className="-ml-3 !gap-2.5 sm:-ml-4 sm:!gap-4">
            {tiles.map((tile) => (
              <CarouselItem
                key={tile.id}
                className={cn(
                  "basis-[78%] pl-3 min-[400px]:basis-[68%]",
                  "sm:basis-1/2 sm:pl-4",
                  "md:basis-2/5",
                  "lg:basis-1/3",
                  "xl:basis-1/4",
                  "2xl:basis-1/5"
                )}
              >
                <div
                  className={cn(
                    "group relative overflow-hidden rounded-xl border border-yac-red/15 bg-white shadow-sm shadow-neutral-200/60",
                    "h-[200px] sm:h-auto sm:aspect-[3/4] sm:rounded-2xl"
                  )}
                >
                  <img
                    src={tile.image}
                    alt={`${tile.category} AMU Entrance result ${tile.year}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-900/90 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3.5">
                    <span className="inline-block rounded-md bg-yac-red px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white sm:px-2 sm:text-[11px]">
                      {tile.category}
                    </span>
                    <p className="mt-1 line-clamp-1 text-[11px] font-semibold leading-snug text-white sm:mt-1.5 sm:line-clamp-2 sm:text-sm">
                      {tile.title}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

