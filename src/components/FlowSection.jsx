import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "./Reveal.jsx";
import { SectionTitle } from "./SectionTitle.jsx";

import step1 from "../assets/images/step-1.png";
import step2 from "../assets/images/step-2.png";
import step3 from "../assets/images/step-3.png";
import step4 from "../assets/images/step-4.png";

const flowTitle = ["크리에이런은 이렇게 함께 달려요"];

const steps = [
  {
    image: step1,
    title: "1. 세션 신청",
    body: "좋아하는 셀럽/크리에이터의 러닝 세션을 신청해요.",
  },
  {
    image: step2,
    title: "2. 라이브 러닝 방(세션) 입장",
    body: "세션 당일 방이 오픈되면 러닝 세션에 입장해요.",
  },
  {
    image: step3,
    title: "3. 각자의 코스에서 러닝 시작",
    body: "최애의 러닝 세션을 참여하며 내 코스에서 러닝을 함께 시작해요.",
  },
  {
    image: step4,
    title: "4. 함께 달린 기록 확인",
    body: "러닝이 끝나면 같은 세션에 참여한 기록을 확인해요.",
  },
];

function StepImage({ src, alt }) {
  return (
    <div className="flex h-44 w-full shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black/50 sm:h-48 md:h-[13.5rem] lg:h-52">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain object-center"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm text-[var(--color-text-muted)]">
          이미지 준비 중
        </div>
      )}
    </div>
  );
}

export default function FlowSection() {
  return (
    <section className="bg-[#060706] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-[120px] lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle lines={flowTitle} />

        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerContainer}
        >
          {steps.map((step) => (
            <motion.article
              key={step.title}
              variants={staggerItem}
              className="flex h-full flex-col gap-3 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-card-soft)] p-4 sm:p-5"
              whileHover={{
                y: -4,
                borderColor: "rgba(0, 247, 125, 0.45)",
                transition: { type: "spring", stiffness: 400, damping: 26 },
              }}
            >
              <StepImage src={step.image} alt={`${step.title} 일러스트`} />
              <h3 className="text-lg font-bold leading-snug text-white">{step.title}</h3>
              <p className="text-base leading-relaxed text-[#f3f4fa]">{step.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
