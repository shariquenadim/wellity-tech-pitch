"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SystemOverviewSection from "@/components/sections/SystemOverviewSection";
import EngineeringDecisionsSection from "@/components/sections/EngineeringDecisionsSection";
import FlowsSection from "@/components/sections/FlowsSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import PhasesSection from "@/components/sections/PhasesSection";
import ComplianceSection from "@/components/sections/ComplianceSection";
import CapitalSection from "@/components/sections/CapitalSection";
import TractionSection from "@/components/sections/TractionSection";
import CloseSection from "@/components/sections/CloseSection";
import PresentationMode from "@/components/PresentationMode";
import { presentationSlides } from "@/content/slides";

export default function Home() {
  const [presentationActive, setPresentationActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openPresentation = useCallback(() => {
    setCurrentSlide(0);
    setPresentationActive(true);
  }, []);

  const closePresentation = useCallback(() => {
    setPresentationActive(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, presentationSlides.length - 1)
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  return (
    <>
      <Header onPresentationMode={openPresentation} />

      <main className="pt-14 md:pt-16">
        <HeroSection onPresentationMode={openPresentation} />

        <div className="border-t border-line/40" />
        <ProblemSection />

        <div className="border-t border-line/40" />
        <SystemOverviewSection />

        <div className="border-t border-line/40" />
        <EngineeringDecisionsSection />

        <div className="border-t border-line/40" />
        <FlowsSection />

        <div className="border-t border-line/40" />
        <ArchitectureSection />

        <div className="border-t border-line/40" />
        <PhasesSection />

        <div className="border-t border-line/40" />
        <ComplianceSection />

        <div className="border-t border-line/40" />
        <CapitalSection />

        <div className="border-t border-line/40" />
        <TractionSection />

        <div className="border-t border-line/40" />
        <CloseSection />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-line/40">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
            Wellity HealthCare © {new Date().getFullYear()}
          </p>
          <p className="font-mono text-[10px] text-muted/60">
            B2B Telemedicine Infrastructure · India
          </p>
        </div>
      </footer>

      {/* Presentation Mode Overlay */}
      <AnimatePresence>
        {presentationActive && (
          <PresentationMode
            isActive={presentationActive}
            currentSlide={currentSlide}
            onClose={closePresentation}
            onNext={nextSlide}
            onPrev={prevSlide}
            onGoTo={goToSlide}
          />
        )}
      </AnimatePresence>
    </>
  );
}
