import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal.jsx";
import CTAButton from "./CTAButton.jsx";

const title = "첫 라이브 러닝 세션에 함께할 팬을 모집합니다!";

const description = [
  "크리에이런은 좋아하는 셀럽/크리에이터와 함께 운동하는 새로운 팬 경험을 준비하고 있어요.",
  "사전 예약자에게 첫 베타 세션 소식을 가장 먼저 알려드릴게요.",
];

const ctas = [
  { variant: "primary", label: "사전 예약하고 첫 세션 알림 받기" },
  { variant: "secondary", label: "같이 뛰고 싶은 최애가 있다면?" },
];

export default function FinalCTASection() {
  return (
    <section className="bg-[#060706] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-[120px] lg:py-24">
      <div className="mx-auto max-w-[1200px] text-center">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-[var(--color-neon)] sm:text-4xl md:text-[44px] lg:text-[48px]">
            {title}
          </h2>
          <div className="mx-auto mt-4 max-w-3xl space-y-2 text-lg font-medium leading-relaxed text-[#e4e6f0] sm:text-xl md:text-[28px]">
            {description.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {ctas.map((cta) => (
            <motion.div key={cta.label} variants={staggerItem}>
              <CTAButton variant={cta.variant}>{cta.label}</CTAButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
