import { Reveal } from "./Reveal.jsx";

export function SectionTitle({
  lines = [],
  highlightLineIndex,
  className = "",
  size = "lg",
}) {
  const sizeClass =
    size === "sm"
      ? "text-2xl sm:text-3xl md:text-4xl"
      : "text-3xl sm:text-4xl md:text-[40px] lg:text-[48px]";

  return (
    <Reveal className={`mx-auto max-w-4xl text-center ${className}`}>
      <div
        className={`font-bold leading-[1.35] tracking-tight text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.18)] ${sizeClass}`}
      >
        {lines.map((line, i) => (
          <p
            key={i}
            className={
              highlightLineIndex === i ? "text-[var(--color-neon)]" : undefined
            }
          >
            {line}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
