import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        section
        relative
        overflow-hidden
        border-y
        border-white/[.06]
        bg-[#060b15]
      "
    >
      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-400/[.04] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        <SectionTitle
          eyebrow="02 · Toolkit"
          title="Technical skills, built around the frontend."
          copy="A practical stack for building fast, responsive interfaces and connecting them to real product workflows."
        />

        <div className="grid gap-5 lg:grid-cols-3">

          {skills.map((group, groupIndex) => (
            <Reveal
              key={group.group}
              delay={groupIndex * 0.07}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/[.08]
                bg-[#09111f]
                p-6
                transition
                duration-500
                hover:border-cyan-300/20
                md:p-8
              "
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="mb-8 flex items-start justify-between">

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-cyan-300/70">
                    Skill Group
                  </span>

                  <h3 className="mt-2 font-display text-xl font-semibold text-white">
                    {group.group}
                  </h3>
                </div>

                <span className="font-display text-3xl font-semibold text-white/[.06]">
                  0{groupIndex + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">

                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      y: -2,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      rounded-xl
                      border
                      border-white/[.08]
                      bg-white/[.035]
                      px-3.5
                      py-2
                      text-sm
                      text-slate-300
                      transition-colors
                      duration-300
                      hover:border-cyan-300/20
                      hover:bg-cyan-300/[.06]
                      hover:text-cyan-100
                    "
                  >
                    {item}
                  </motion.span>
                ))}

              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}