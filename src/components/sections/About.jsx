import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { ContainerScroll } from "../animations/ContainerScroll";
import { founderInfo } from "../../data/seo";
import admissionsVideo from "../../assets/videos/yac-admissions.mp4";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const highlights = [
  "Expert faculty for Accounts, Economics, Business Studies & Commerce",
  "CUET Commerce, AMU, JMI & MBA Entrance coaching in Aligarh",
  "Accounts, Economics & Business Studies coaching for Class 11–12 Commerce",
  "Live classes, test series, GD-PI guidance & one-to-one mentorship",
  "Online & offline commerce tuition for students across Uttar Pradesh",
  "Trusted top coaching institute in Aligarh with proven entrance selections",
];

function AboutVideo() {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef, {
    amount: 0.35,
    margin: "-10% 0px -10% 0px",
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <div ref={wrapperRef} className="group relative h-full w-full">
      <video
        ref={videoRef}
        className="h-full w-full object-cover object-center"
        src={admissionsVideo}
        muted
        loop
        playsInline
        preload="metadata"
        controls
        poster="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
        aria-label="Yasir Ali Classes admissions — where serious students get serious results"
      >
        Your browser does not support the video tag.
      </video>

      <div
        className={cx(
          "pointer-events-none absolute inset-0 bg-gradient-to-t",
          "from-zinc-900/40 via-transparent to-transparent"
        )}
        aria-hidden="true"
      />

      <div
        className={cx(
          "pointer-events-none absolute bottom-0 left-0 right-0",
          "flex items-end justify-between gap-2 p-3 sm:gap-3 sm:p-4 md:p-5"
        )}
      >
        <div
          className={cx(
            "rounded-xl border border-white/20 bg-white/95 px-3 py-2",
            "shadow-lg backdrop-blur-sm md:px-4 md:py-3"
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wide text-yac-red md:text-xs">
            Admissions Open
          </p>
          <p className="text-sm font-bold text-zinc-900 md:text-base">
            Join Yasir Ali Classes
          </p>
        </div>
        <span className="hidden rounded-full bg-yac-red px-3 py-1 text-xs font-semibold text-white sm:inline">
          YAC · Aligarh
        </span>
      </div>

    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className={cx(
        "relative overflow-x-hidden",
        "bg-gradient-to-b from-white via-zinc-50/80 to-white",
        "text-zinc-900"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(220,38,38,0.05),_transparent_50%)]"
        aria-hidden="true"
      />

      <ContainerScroll
        titleComponent={
          <div className="px-4">
            <span
              className={cx(
                "mb-4 inline-flex items-center gap-2 rounded-full border border-yac-red/20",
                "bg-yac-red/5 px-3 py-1 text-xs font-semibold text-yac-red md:text-sm"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-yac-red" aria-hidden="true" />
              About Yasir Ali Classes
            </span>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Where Serious Students
              <br />
              <span className="relative inline-block text-yac-red">
                Get Serious Results
                <span
                  className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-yac-red/30"
                  aria-hidden="true"
                />
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:mt-5 sm:max-w-2xl sm:text-base md:text-lg">
              Yasir Ali Classes (YAC) is Aligarh&apos;s trusted coaching institute
              for Class 11–12 Commerce, Accounts, Economics, Business Studies,
              CUET Commerce, B.Com, AMU Entrance, MBA Entrance, and GD-PI
              preparation — with proven board and entrance exam results across
              Aligarh, Uttar Pradesh, and India.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:max-w-2xl sm:text-base md:text-lg">
              {founderInfo.description}
            </p>

            <ul className="mx-auto mt-5 grid max-w-xl gap-2 text-left sm:mt-6 sm:max-w-2xl sm:grid-cols-2 sm:gap-x-4 md:mt-7">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs text-zinc-700 sm:text-sm md:text-base"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yac-red"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <AboutVideo />
      </ContainerScroll>
    </section>
  );
}
