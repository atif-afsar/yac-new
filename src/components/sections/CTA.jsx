import Container from "../common/Container";
import Button from "../common/Button";
import RevealAnimation from "../animations/RevealAnimation";

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 md:py-28">
      <Container>
        <RevealAnimation>
          <div className="rounded-3xl border border-yac-purple/30 bg-gradient-to-br from-yac-purple/20 to-yac-red/10 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-yac-white sm:text-3xl">
              Start Your Journey with YAC
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-yac-muted">
              Placeholder CTA — admissions enquiry form or contact link next.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="accent" size="lg">
                Enquire Now
              </Button>
              <Button variant="secondary" size="lg">
                Call Us
              </Button>
            </div>
          </div>
        </RevealAnimation>
      </Container>
    </section>
  );
}
