import { motion } from "framer-motion";
import { ctaExternalLinkProps } from "../constants/cta.js";

const base =
  "inline-flex min-h-[44px] items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold leading-snug transition-colors sm:px-7 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg";

const variants = {
  primary: `${base} bg-[var(--color-neon)] text-[var(--color-title-black)] shadow-[0_0_0_rgba(0,247,125,0)] hover:bg-[#33ffa0]`,
  secondary: `${base} border border-[var(--color-neon)] bg-transparent text-[var(--color-neon)] hover:bg-[rgba(0,247,125,0.08)]`,
};

export default function CTAButton({ variant = "primary", children, className = "" }) {
  return (
    <motion.a
      {...ctaExternalLinkProps}
      className={`${variants[variant]} ${className} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-neon)]`}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 28px rgba(0, 247, 125, 0.45)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
    >
      {children}
    </motion.a>
  );
}
