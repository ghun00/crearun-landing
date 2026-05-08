import { motion } from "framer-motion";
import { ctaExternalLinkProps } from "../constants/cta.js";
import { trackCtaClick } from "../lib/analytics.js";

export default function Header() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-[#353644]/80 bg-[rgba(6,7,6,0.78)] px-4 py-3 backdrop-blur-md sm:px-6 lg:px-[120px] lg:py-5"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3">
        <a href="#" className="flex shrink-0 items-center" aria-label="크리에이런 홈">
          <img
            src="/crearun_logo.svg"
            alt="CreaRun"
            className="h-5 w-auto sm:h-8 lg:h-10"
            width={250}
            height={40}
            decoding="async"
          />
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            {...ctaExternalLinkProps}
            className="hidden items-center gap-2 rounded-full px-3 py-2.5 text-xs md:text-base font-bold text-[#f8f8fc] md:inline-flex"
            onClick={() =>
              trackCtaClick({ label: "크리에이터세요?", location: "header" })
            }
          >
            크리에이터세요?
            <span aria-hidden className="text-[#f8f8fc]">
              ↗
            </span>
          </a>
          <motion.a
            {...ctaExternalLinkProps}
            className="inline-flex min-h-[24px] min-w-[120px] items-center justify-center rounded-full bg-[var(--color-neon)] px-4 py-2 text-sm font-bold text-[var(--color-title-black)] shadow-[0_0_0_rgba(0,247,125,0)] sm:min-w-[140px] sm:px-5 sm:text-base lg:min-w-[200px] lg:px-6"
            onClick={() =>
              trackCtaClick({ label: "사전 예약하기", location: "header" })
            }
            whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(0, 247, 125, 0.45)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            사전 예약하기
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
