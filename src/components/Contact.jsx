import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

import Reveal from "./Reveal";

const GitHubIcon = ({ size = 17 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.832a9.59 9.59 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = ({ size = 17 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
  </svg>
);

export default function Contact() {
  return (
    <section
      id="contact"
      className="section pb-6"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <Reveal
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-cyan-300/10
            bg-[#08111f]
            p-7
            shadow-[0_35px_100px_rgba(0,0,0,.3)]
            md:p-12
            lg:p-16
          "
        >
          {/* glow */}

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-300/[.08] blur-[110px]" />

          <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-600/[.07] blur-[130px]" />

          {/* content */}

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>
              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-8 bg-cyan-300" />

                <span className="text-[11px] font-bold uppercase tracking-[.28em] text-cyan-300">
                  05 · Contact
                </span>

              </div>

              <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-[-.05em] text-white md:text-6xl">
                Have a frontend challenge? Let’s build something sharp.
              </h2>

              <p className="mt-6 max-w-2xl leading-7 text-slate-400">
                Open to frontend development opportunities,
                product collaborations and modern React/Next.js
                interface work.
              </p>
            </div>

            <a
              href="mailto:himanshu.hexawarre1356@gmail.com"
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-cyan-300
                px-6
                py-3.5
                font-semibold
                text-slate-950
                shadow-[0_15px_40px_rgba(103,232,249,.15)]
                transition
                hover:bg-white
              "
            >
              Start a conversation

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>

          {/* links */}

          <div className="relative z-10 mt-14 grid gap-3 border-t border-white/[.08] pt-7 sm:grid-cols-2 lg:grid-cols-4">

            <a
              className="contact-link-new"
              href="mailto:himanshu.hexawarre1356@gmail.com"
            >
              <Mail size={17} />

              <span>Email</span>
            </a>

            <a
              className="contact-link-new"
              href="tel:+919521609676"
            >
              <Phone size={17} />

              <span>+91 9521609676</span>
            </a>

            <a
              className="contact-link-new"
              href="https://github.com/Personal2512"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />

              <span>GitHub</span>
            </a>

            <a
              className="contact-link-new"
              href="https://www.linkedin.com/in/himanshu-y-4a6098376/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />

              <span>LinkedIn</span>
            </a>

          </div>
        </Reveal>

        <footer className="flex flex-col gap-3 py-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © {new Date().getFullYear()} Himanshu Yadav
          </span>

          <span>
            Designed & built with React + Tailwind CSS
          </span>

        </footer>
      </div>
    </section>
  );
}