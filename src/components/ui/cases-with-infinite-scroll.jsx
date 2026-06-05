import { useEffect, useMemo, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./carousel";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function buildTiles(results, targetCount = 18) {
  if (!results?.length) return [];
  const tiles = [];
  for (let i = 0; i < targetCount; i += 1) {
    const r = results[i % results.length];
    tiles.push({
      id: `${r.id}-${i}`,
      title: r.achievement,
      meta: `${r.student} · ${r.year}`,
    });
  }
  return tiles;
}

export function CasesWithInfiniteScroll({ results = [] }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  const tiles = useMemo(() => buildTiles(results, 18), [results]);

  useEffect(() => {
    if (!api || tiles.length === 0) return;

    const interval = setInterval(() => {
      const snaps = api.scrollSnapList()?.length ?? 0;
      if (snaps <= 1) return;

      const next = clamp(api.selectedScrollSnap() + 1, 0, snaps - 1);

      if (next === snaps - 1) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((c) => c + 1);
      }
    }, 1100);

    return () => clearInterval(interval);
  }, [api, tiles.length, current]);

  return (
    <div className="w-full py-14 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-5xl">
            Result-Oriented Success, year after year.
          </h2>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: false, dragFree: true }}
            className="w-full"
          >
            <CarouselContent className="py-1">
              {tiles.map((tile) => (
                <CarouselItem
                  key={tile.id}
                  className="basis-1/2 sm:basis-1/3 lg:basis-1/6"
                >
                  <div className="flex aspect-square items-center justify-center rounded-2xl border border-yac-red/15 bg-white p-5 shadow-sm shadow-neutral-200/60">
                    <div className="text-center">
                      <p className="text-xs font-semibold text-yac-red">
                        {tile.title}
                      </p>
                      <p className="mt-2 text-[11px] font-medium text-neutral-500">
                        {tile.meta}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

