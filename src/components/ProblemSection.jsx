import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal.jsx";
import { SectionTitle } from "./SectionTitle.jsx";

import problemMockup from "../assets/images/problem-mockup.png";

const problemTitle = ["최애와 소통은 해봤지만,", "함께 운동해본 적은 없으니까요."];

const problemCards = [
  {
    title: "메세지는 주고 받았어요",
    body: "버블과 프롬처럼 최애의 일상을 메시지로 만나는 경험은 익숙해졌어요.",
  },
  {
    title: "라이브도 함께 봤어요",
    body: "인스타 라이브와 유튜브 라이브로 같은 시간을 보내는 것도 자연스러워졌어요.",
  },
  {
    title: "하지만 함께 운동 한 적은 없었어요",
    body: "크리에이런은 최애와 같은 시간에 러닝을 시작하고, 함께 달린 기록을 남기는 새로운 경험을 만들어요",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-[#0d0d0d] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-[120px] lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle lines={problemTitle} />

        <Reveal className="mx-auto mt-10 max-w-[300px] sm:mt-12 sm:max-w-[320px] md:mt-4 lg:mt-4 lg:max-w-[274px]">
          <div className="relative aspect-[274/552] w-full overflow-hidden rounded-xl">
            <img
              src={problemMockup}
              alt="크리에이런 앱 세션 화면 목업"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-[55%] to-[#0d0d0d] to-[95%]"
              aria-hidden
            />
          </div>
        </Reveal>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:mt-4 sm:gap-5 lg:mt-4 lg:grid-cols-3 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {problemCards.map((card, index) => (
            <motion.article
              key={card.title}
              variants={staggerItem}
              whileHover={{
                y: -4,
                borderColor: "rgba(0, 247, 125, 0.65)",
                transition: { type: "spring", stiffness: 400, damping: 24 },
              }}
              className={`rounded-xl border bg-[var(--color-card-soft)] p-5 sm:p-6 ${
                index === 2
                  ? "border-[var(--color-neon)]"
                  : "border-[var(--color-border-subtle)]"
              }`}
            >
              <p
                className={`text-lg font-bold leading-snug ${
                  index === 2 ? "text-[var(--color-neon)]" : "text-white"
                }`}
              >
                {card.title}
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#f3f4fa]">{card.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
