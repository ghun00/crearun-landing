import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal.jsx";

const titleLineMuted = "내가 좋아하는 사람과 함께 달리면,";
const titleLineAccent = "러닝은 달라질 수 있어요";

const quotes = [
  "오늘 내 최애 재범과 함께 첫 5K 완주",
  "퇴근 후 최애와 함께 30분 러닝",
  "러닝하면서 알게되는 최애의 지금 고민과 공감",
  "팬들과 함께 참여한 첫 라이브 러닝 세션",
];

export default function ExperienceSection() {
  return (
    <section className="bg-[#0d0d0d] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-[120px] lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xl font-medium leading-snug text-[#e4e6f0] sm:text-2xl md:text-[28px]">
            {titleLineMuted}
          </p>
          <p className="mt-2 text-3xl font-bold leading-tight text-[var(--color-neon)] sm:text-4xl md:text-[44px] lg:text-[48px]">
            {titleLineAccent}
          </p>
        </Reveal>

        <motion.div
          className="mx-auto mt-10 flex max-w-[800px] flex-col gap-4 sm:mt-12 sm:gap-5 lg:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {quotes.map((q) => (
            <motion.figure
              key={q}
              variants={staggerItem}
              whileHover={{
                boxShadow: "0 0 28px rgba(0, 247, 125, 0.18)",
                borderColor: "rgba(0, 247, 125, 0.35)",
              }}
              className="rounded-xl border border-[var(--color-border-subtle)] bg-[rgba(53,54,68,0.45)] px-4 py-6 text-center sm:px-6 sm:py-7"
            >
              <blockquote className="text-lg font-semibold leading-relaxed text-[#f8f8fc] sm:text-xl md:text-2xl">
                “{q}”
              </blockquote>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
