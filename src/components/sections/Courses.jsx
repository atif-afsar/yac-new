import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import RevealAnimation from "../animations/RevealAnimation";
import StackingCards from "../ui/stacking-card";
import { courses } from "../../data/courses";

export default function Courses() {
  return (
    <div id="courses" className="relative bg-white text-neutral-900">
      <div className="relative py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yac-red/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-yac-red/5 blur-3xl"
        />

        <Container className="relative">
          <RevealAnimation>
            <SectionHeading
              variant="light"
              label="Our Programs"
              title="Explore Our Courses"
              highlight="Courses"
              description="Regular classes, entrance preparation, and professional programs — scroll to explore each one."
            />
          </RevealAnimation>

          <RevealAnimation delay={0.15}>
            <p className="mx-auto mt-6 max-w-md text-center text-sm font-medium text-yac-red">
              Scroll down to explore each program ↓
            </p>
          </RevealAnimation>
        </Container>
      </div>

      <StackingCards items={courses} />
    </div>
  );
}
