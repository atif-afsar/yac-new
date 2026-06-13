import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import RevealAnimation from "../animations/RevealAnimation";
import CoursesStackSection from "./CoursesStackSection";

export default function Courses() {
  return (
    <>
      <div id="courses" className="relative w-full overflow-x-clip bg-white text-neutral-900">
        <div className="relative overflow-x-clip py-20 md:py-28">
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
                description="Accounts, Economics, Business Studies, CUET Commerce, B.Com, AMU Entrance, MBA & GD-PI coaching in Aligarh — scroll to explore each program."
              />
            </RevealAnimation>

            <RevealAnimation delay={0.15}>
              <p className="mx-auto mt-6 max-w-md text-center text-sm font-medium text-yac-red">
                Scroll down to explore each program ↓
              </p>
            </RevealAnimation>
          </Container>
        </div>
      </div>

      <CoursesStackSection />
    </>
  );
}
