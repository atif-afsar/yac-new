import { lazy, Suspense } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import MotionProvider from "./components/motion/MotionProvider";
import SEOHead from "./components/seo/SEOHead";
import StructuredData from "./components/seo/StructuredData";
import Navbar from "./components/common/Navbar";
import ParticleBackground from "./components/animations/ParticleBackground";
import Hero from "./components/sections/Hero";

const About = lazy(() => import("./components/sections/About"));
const Courses = lazy(() => import("./components/sections/Courses"));
const Results = lazy(() => import("./components/sections/Results"));
const WhyChooseUs = lazy(() => import("./components/sections/WhyChooseUs"));
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const CTA = lazy(() => import("./components/sections/CTA"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/sections/Footer"));

function App() {
  return (
    <MotionProvider>
      <SEOHead />
      <StructuredData />
      <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, anchors: true }}>
        <Navbar />
        <div className="relative min-h-screen w-full overflow-x-clip">
          <ParticleBackground />

          <div className="relative z-10 w-full overflow-x-clip">
            <main className="w-full overflow-x-clip">
              <Hero />
              <Suspense fallback={null}>
                <About />
                <Courses />
                <Results />
                <WhyChooseUs />
                <Testimonials />
                <CTA />
                <Contact />
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>
        </div>
      </ReactLenis>
    </MotionProvider>
  );
}

export default App;
