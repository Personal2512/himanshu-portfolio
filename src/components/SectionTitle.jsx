import Reveal from "./Reveal";

export default function SectionTitle({
  eyebrow,
  title,
  copy,
}) {
  return (
    <Reveal className="mb-14 max-w-4xl md:mb-16">

      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-8 bg-cyan-300" />

        <span className="text-[11px] font-bold uppercase tracking-[.28em] text-cyan-300">
          {eyebrow}
        </span>
      </div>

      <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-.045em] text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>

      {copy && (
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
          {copy}
        </p>
      )}

    </Reveal>
  );
}