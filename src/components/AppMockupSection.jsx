import { motion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";

import appMockup from "../assets/images/app-mockup-1.png";

const floatTransition = {
  duration: 4.2,
  repeat: Infinity,
  ease: "easeInOut",
};

export default function AppMockupSection() {
  return (
    <section className="px-4 pb-20 pt-4 sm:px-6 sm:pb-24 lg:px-[120px]">
      <Reveal>
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="w-full overflow-hidden rounded-[28px] bg-black/50"
            animate={{ y: [0, -7, 0] }}
            transition={floatTransition}
          >
            <img
              src={appMockup}
              alt="크리에이런 앱 세 화면 목업: 러닝 요약, 라이브 러닝, 세션 신청"
              className="block h-auto w-full max-w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
