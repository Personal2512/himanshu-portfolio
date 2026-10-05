import {
  Code2,
  Layers3,
  Smartphone,
  Zap,
} from "lucide-react";

import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const cards = [
  [
    "Responsive by default",
    "Interfaces designed to feel intentional across mobile, tablet and desktop.",
    Smartphone,
  ],
  [
    "Reusable systems",
    "Component architecture that keeps complex products maintainable and consistent.",
    Layers3,
  ],
  [
    "API-connected UI",
    "Frontend flows that connect cleanly to REST APIs and dynamic product data.",
    Code2,
  ],
  [
    "Motion with purpose",
    "Micro-interactions and transitions that improve hierarchy without adding friction.",
    Zap,
  ],
];

export default function About() {
  return (
    <section
      id="about"
      className="section relative overflow-hidden"
    >
      <div className="absolute -left-64 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/[.05] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        <SectionTitle
          eyebrow="01 · About"
          title="I turn product ideas into polished interfaces."
          copy="My work spans EdTech ERP, dating and social discovery, astrology platforms, corporate software services and education websites — with a strong focus on reusable React components, responsive layouts and production-ready frontend flows."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {cards.map(([title, copy, Icon], index) => (
            <Reveal
              key={title}
              delay={index * 0.06}
              className="
                group
                relative
                min-h-[280px]
                overflow-hidden
                rounded-[26px]
                border
                border-white/[.08]
                bg-[#08101e]
                p-6
                transition
                duration-500
                hover:-translate-y-1
                hover:border-cyan-300/20
                hover:bg-[#0a1425]
                md:p-7
              "
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[.04] blur-3xl transition group-hover:bg-cyan-400/[.09]" />

              <div className="relative flex h-full flex-col">

                <div className="flex items-start justify-between">

                  <div
                    className="
                      grid
                      h-12
                      w-12
                      place-items-center
                      rounded-2xl
                      border
                      border-cyan-300/10
                      bg-cyan-300/[.06]
                      text-cyan-300
                    "
                  >
                    <Icon size={21} />
                  </div>

                  <span className="text-xs font-medium text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-auto pt-16">

                  <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {copy}
                  </p>

                </div>
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}