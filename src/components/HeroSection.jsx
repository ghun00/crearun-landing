import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CTAButton from "./CTAButton.jsx";

import heroPc from "../assets/images/hero-pc.png";
import heroMobile from "../assets/images/hero-mobile.png";

const ROTATING_WORDS = ["인플루언서", "셀럽", "크리에이터"];

const heroCtas = [
  { variant: "primary", label: "사전 예약하고 첫 세션 알림 받기" },
  { variant: "secondary", label: "같이 뛰고 싶은 최애 초대하기" },
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen min-h-dvh w-full overflow-hidden bg-[#0d0d0d]">
      {/* PC background */}
      <div
        className="pointer-events-none absolute inset-0 hidden bg-center bg-cover lg:block"
        style={{ backgroundImage: `url(${heroPc})` }}
        aria-hidden
      />
      {/* Mobile background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[50%_22%] bg-cover lg:hidden"
        style={{ backgroundImage: `url(${heroMobile})` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#060706] lg:from-transparent lg:via-transparent lg:to-[#060706]/90"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-screen min-h-dvh max-w-[1440px] flex-col justify-end px-5 pb-14 pt-28 sm:px-6 sm:pb-16 lg:justify-center lg:px-[120px] lg:pb-24 lg:pt-32">
        <motion.div
          className="max-w-xl lg:max-w-2xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[32px] font-extrabold leading-[1.4] text-white sm:text-4xl lg:text-[48px]">
            내 최애
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:mt-3 sm:gap-4 lg:gap-4">
            <div className="inline-flex flex-col items-start" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={ROTATING_WORDS[wordIndex]}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex w-max min-h-[1.2em] flex-col items-stretch"
                >
                  <span className="whitespace-nowrap font-black leading-[1.4] text-[48px] text-[var(--color-neon)] sm:text-[56px] lg:text-[80px]">
                    {ROTATING_WORDS[wordIndex]}
                  </span>
                  <div
                    className="mt-1 h-1 w-full shrink-0 bg-[var(--color-neon)]"
                    aria-hidden
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="font-black leading-[1.4] text-white text-[36px] sm:text-[44px] lg:text-[72px] lg:whitespace-nowrap">
              와 함께 러닝해요!
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 flex max-w-xl flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
          }}
        >
          {heroCtas.map((cta) => (
            <motion.div
              key={cta.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              className="w-full sm:w-auto"
            >
              <CTAButton variant={cta.variant} className="w-full sm:w-auto">
                {cta.label}
              </CTAButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
