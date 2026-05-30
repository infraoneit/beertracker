import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BetaForm } from "@/components/sections/BetaForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />

        {/* Anchor target for "Technologie entdecken" */}
        <div id="tech" aria-hidden className="scroll-mt-24" />
        <Features />

        {/* Anchor target for "Live-Demo starten" */}
        <div id="demo" aria-hidden className="scroll-mt-24" />
        <HowItWorks />
        <FAQ />

        <FinalCTA />
        <BetaForm />
      </main>
      <Footer />
    </>
  );
}
