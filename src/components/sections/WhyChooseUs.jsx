import {
  GraduationCap,
  Trophy,
  Target,
  Users,
  ClipboardCheck,
  MapPin,
} from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import RevealAnimation from "../animations/RevealAnimation";
import { GlowCard } from "../ui/spotlight-card";
import { whyChooseUsCards } from "../../data/whyChooseUs";

const iconMap = {
  "graduation-cap": GraduationCap,
  trophy: Trophy,
  target: Target,
  users: Users,
  "clipboard-check": ClipboardCheck,
  "map-pin": MapPin,
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative w-full overflow-x-clip bg-white py-12 text-neutral-900 sm:py-16 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yac-red/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-yac-red/5 blur-3xl sm:-bottom-32 sm:-left-24 sm:h-80 sm:w-80"
      />

      <Container className="relative min-w-0">
        <RevealAnimation>
          <SectionHeading
            variant="light"
            label="Why YAC"
            title="Why Choose Yasir Ali Classes"
            highlight="Yasir Ali Classes"
            description="Premium, trusted, and result-focused coaching for school boards, university programs, and entrance exams."
          />
        </RevealAnimation>

        <ul className="mt-8 grid min-w-0 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {whyChooseUsCards.map((card, index) => {
            const Icon = iconMap[card.icon] ?? GraduationCap;
            const glowColor = index % 3 === 1 ? "orange" : "red";

            return (
              <RevealAnimation key={card.id} delay={0.05 * index}>
                <li className="h-full">
                  <GlowCard
                    customSize
                    variant="light"
                    glowColor={glowColor}
                    className="group shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <div className="relative z-[1] flex h-full flex-col">
                      <div className="mb-4 inline-flex w-fit rounded-xl bg-yac-red/10 p-3 text-yac-red transition-colors group-hover:bg-yac-red group-hover:text-white">
                        <Icon className="size-5 sm:size-6" aria-hidden />
                      </div>
                      <h3 className="text-base font-bold text-neutral-900 sm:text-lg">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
                        {card.description}
                      </p>
                    </div>
                  </GlowCard>
                </li>
              </RevealAnimation>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
