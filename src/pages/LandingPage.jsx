import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ProblemSection from "../components/ProblemSection.jsx";
import FlowSection from "../components/FlowSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import FinalCTASection from "../components/FinalCTASection.jsx";
import AppMockupSection from "../components/AppMockupSection.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] antialiased">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <FlowSection />
        <ExperienceSection />
        <FinalCTASection />
        <AppMockupSection />
      </main>
      <footer className="border-t border-[var(--color-border-subtle)] bg-[#050605] px-4 py-10 text-center sm:px-6 lg:px-[120px]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5">
          <a href="#" className="inline-flex shrink-0" aria-label="크리에이런 홈">
            <img
              src="/crearun_logo.svg"
              alt="CreaRun"
              className="h-8 w-auto sm:h-9"
              width={250}
              height={40}
              decoding="async"
            />
          </a>
          <div className="space-y-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            <p>프라이데이랩 | 대표 한지훈</p>
            <p className="text-xs text-[var(--color-text-muted)]">
              Copyright ⓒ 크리에이런 All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
