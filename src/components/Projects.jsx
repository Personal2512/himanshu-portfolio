import { useState } from "react";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import { projects } from "../data/portfolio";

import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function ProjectCard({ p, i }) {
  const [bad, setBad] = useState(false);

  return (
    <Reveal
      delay={(i % 2) * 0.07}
      className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-white/[.08]
        bg-[#08101d]
        transition
        duration-500
        hover:-translate-y-1
        hover:border-cyan-300/20
        hover:shadow-[0_30px_80px_rgba(0,0,0,.35)]
      "
    >
      {/* IMAGE */}

      <div className="relative aspect-[16/9] overflow-hidden bg-[#0b1422]">

        {!bad ? (
          <img
            src={p.image}
            onError={() => setBad(true)}
            alt={`${p.title} live website preview`}
            loading="lazy"
            className="
              h-full
              w-full
              object-contain
              object-top
              transition
              duration-700
              group-hover:scale-[1.025]
            "
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,.13),transparent_55%)]" />

            <div className="absolute inset-0 project-grid opacity-30" />

            <div className="relative text-center">

              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[.06] font-display text-lg font-bold text-cyan-200">
                {String(i + 1).padStart(2, "0")}
              </div>

              <span className="block font-display text-xl font-semibold text-white">
                {p.title}
              </span>

              <small className="mt-2 block text-xs uppercase tracking-[.18em] text-slate-500">
                Live project
              </small>

            </div>
          </div>
        )}

        {/* overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#08101d]/80 via-transparent to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#030712]/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.18em] text-slate-200 backdrop-blur-xl">
          Project {String(i + 1).padStart(2, "0")}
        </div>

        <a
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="
            absolute
            right-5
            top-5
            grid
            h-11
            w-11
            place-items-center
            rounded-full
            border
            border-white/10
            bg-[#030712]/70
            text-white
            backdrop-blur-xl
            transition
            duration-300
            hover:border-cyan-300
            hover:bg-cyan-300
            hover:text-slate-950
          "
          aria-label={`Open ${p.title}`}
        >
          <ArrowUpRight size={18} />
        </a>
      </div>

      {/* CONTENT */}

      <div className="p-6 md:p-8">

        <div className="text-[10px] font-bold uppercase tracking-[.24em] text-cyan-300">
          {p.category}
        </div>

        <h3 className="mt-3 font-display text-2xl font-bold tracking-[-.03em] text-white md:text-3xl">
          {p.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {p.summary}
        </p>

        <div className="mt-6 space-y-3 border-t border-white/[.06] pt-6">

          {p.points.map((point) => (
            <div
              key={point}
              className="flex gap-3 text-sm leading-6 text-slate-400"
            >
              <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-300/[.08] text-cyan-300">
                <Check size={12} />
              </span>

              {point}
            </div>
          ))}

        </div>

        <div className="mt-7 flex flex-wrap gap-2">

          {p.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/[.07]
                bg-white/[.035]
                px-3
                py-1.5
                text-[11px]
                font-medium
                text-slate-400
              "
            >
              {tech}
            </span>
          ))}

        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section relative overflow-hidden"
    >
      <div className="absolute -right-64 top-[20%] h-[550px] w-[550px] rounded-full bg-blue-600/[.05] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        <SectionTitle
          eyebrow="03 · Selected work"
          title="Real products. Real interfaces."
          copy="A selection of production projects across education, social discovery, software services and consultation platforms. Project previews are pulled from the live websites, with graceful fallbacks if a remote preview is unavailable."
        />

        <div className="grid gap-6 lg:grid-cols-2">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              p={project}
              i={index}
            />
          ))}

        </div>
      </div>
    </section>
  );
}