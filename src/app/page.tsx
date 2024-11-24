"use client";
import { HeaderPage } from "./components/Header";
import { NextUIProvider } from "@nextui-org/react";
import { HeroSection } from "./components/HeroSection";
import { HeroSectionPhone } from "./components/HeroSectionPhone";
import { WavyBackground } from "./components/ui/wavy-background";
import { SparklesPreview } from "./components/Sparkles";
import { AnimatedTestimonialsDemo } from "./components/AnimatedTestimonials";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollision";
import { CardHoverEffectDemo } from "./components/CardHoverEffect";
import { HeroParallaxDemo } from "./components/HeroParallax";
import { ImagesSliderDemo } from "./components/ImagesSlider";
import { InfiniteMovingCardsDemo } from "./components/ui/InfiniteMovingCards";
import { FEQ } from "./components/Feq";
import { MAP } from "./components/Map";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        {" "}
        <HeaderPage />
        <HeroSection />
        <HeroSectionPhone />
        {/* <div className="h-12">
        <WavyBackground />
      </div> */}
        <SparklesPreview />
        <BackgroundBeamsWithCollisionDemo />
        <AnimatedTestimonialsDemo />
        <CardHoverEffectDemo />
        {/* <HeroParallaxDemo /> */}
        <ImagesSliderDemo />
        <InfiniteMovingCardsDemo />
        <FEQ />
        <MAP />
        <Footer />
      </main>
    </NextUIProvider>
  );
}
