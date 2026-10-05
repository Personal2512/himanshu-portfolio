import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  X,
  ZoomIn,
  Award,
} from "lucide-react";

import { certificates } from "../data/portfolio";

import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="certificates"
      className="
        section
        relative
        overflow-hidden
        border-y
        border-white/[.06]
        bg-[#060b15]
      "
    >
      <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/[.035] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        <SectionTitle
          eyebrow="04 · Certifications"
          title="Learning beyond the build."
          copy="Web development, programming, internship experience and data analytics certifications from 2019–2024."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((certificate, index) => (
            <Reveal
              key={certificate.title}
              delay={(index % 3) * 0.06}
              className="
                group
                overflow-hidden
                rounded-[26px]
                border
                border-white/[.08]
                bg-[#09111f]
                transition
                duration-500
                hover:-translate-y-1
                hover:border-cyan-300/20
              "
            >
              <button
                onClick={() => setActive(certificate)}
                className="relative block aspect-[16/10] w-full overflow-hidden bg-[#f8fafc]"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="
                    h-full
                    w-full
                    object-contain
                    p-2
                    transition
                    duration-700
                    group-hover:scale-[1.025]
                  "
                />

                <div className="absolute inset-0 bg-slate-950/0 transition group-hover:bg-slate-950/10" />

                <span
                  className="
                    absolute
                    right-4
                    top-4
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-full
                    bg-[#030712]/80
                    text-white
                    opacity-0
                    shadow-xl
                    backdrop-blur-xl
                    transition
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <ZoomIn size={16} />
                </span>
              </button>

              <div className="p-5 md:p-6">

                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] text-cyan-300">
                  <Award size={13} />

                  {certificate.date}
                </div>

                <h3 className="mt-3 font-display text-lg font-semibold leading-6 text-white">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {certificate.issuer}
                </p>

              </div>
            </Reveal>
          ))}

        </div>
      </div>

      {/* MODAL */}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              grid
              place-items-center
              bg-[#020617]/95
              p-4
              backdrop-blur-2xl
            "
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{
                scale: 0.94,
                y: 25,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
              }}
              exit={{
                scale: 0.96,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                max-h-[90vh]
                max-w-6xl
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white
                shadow-2xl
              "
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <img
                src={active.image}
                alt={active.title}
                className="max-h-[88vh] w-auto object-contain"
              />

              <button
                onClick={() => setActive(null)}
                className="
                  absolute
                  right-3
                  top-3
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-full
                  bg-slate-950/85
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:bg-cyan-300
                  hover:text-slate-950
                "
              >
                <X size={18} />
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}