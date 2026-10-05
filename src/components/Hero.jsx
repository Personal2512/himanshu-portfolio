import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";

const GitHubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.832a9.59 9.59 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
  </svg>
);

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* ================= HERO BACKGROUND ================= */}

      <div className="absolute inset-0">
        <img
          src="/assets/himanshu-hero.png"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[70%_center]
            opacity-45
            sm:object-[75%_center]
            lg:object-right
            lg:opacity-80
          "
        />

        {/* Main dark overlay */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(90deg,#030712_0%,rgba(3,7,18,.96)_32%,rgba(3,7,18,.68)_58%,rgba(3,7,18,.20)_100%)]
          "
        />

        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-[#030712]/35 lg:hidden" />

        {/* Bottom transition */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050914] to-transparent" />

        {/* Blue glow */}
        <div className="absolute -left-32 top-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/[.08] blur-[120px]" />

        <div className="absolute right-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-blue-600/[.08] blur-[140px]" />
      </div>

      {/* subtle grid */}
      <div className="hero-grid absolute inset-0 opacity-[.08]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-7 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="max-w-[760px]">

          {/* availability */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mb-7
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-300/15
              bg-cyan-300/[.06]
              px-4
              py-2.5
              text-[11px]
              font-semibold
              uppercase
              tracking-[.22em]
              text-cyan-200
              backdrop-blur-xl
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>

            Available for frontend opportunities
          </motion.div>

          {/* title */}

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-display
              text-[clamp(4rem,8vw,7.8rem)]
              font-bold
              leading-[.84]
              tracking-[-.065em]
              text-white
            "
          >
            Himanshu
            <br />

            <span className="hero-name-gradient">
              Yadav
            </span>
          </motion.h1>

          {/* description */}

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.18,
            }}
            className="
              mt-8
              max-w-[650px]
              text-base
              leading-8
              text-slate-300
              sm:text-lg
              lg:text-xl
            "
          >
            Frontend Developer building responsive, modern and
            production-ready interfaces with{" "}

            <span className="font-medium text-white">
              React.js, Next.js, TypeScript, JavaScript
            </span>

            {" "}and{" "}

            <span className="font-medium text-white">
              Tailwind CSS
            </span>.
          </motion.p>

          {/* buttons */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.28,
            }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-cyan-300
                px-6
                py-3.5
                text-sm
                font-semibold
                text-slate-950
                shadow-[0_15px_45px_rgba(103,232,249,.18)]
                transition
                duration-300
                hover:bg-white
              "
            >
              Explore projects

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </button>

            <a
              href="mailto:himanshu.hexawarre1356@gmail.com"
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[.06]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                backdrop-blur-xl
                transition
                duration-300
                hover:border-cyan-300/40
                hover:bg-white/[.1]
              "
            >
              <Mail size={17} />

              Contact me
            </a>
          </motion.div>

          {/* bottom */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="
              mt-11
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <a
              className="hero-social"
              href="https://github.com/Personal2512"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              className="hero-social"
              href="https://www.linkedin.com/in/himanshu-y-4a6098376/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            <div className="mx-2 hidden h-5 w-px bg-white/15 sm:block" />

            <span className="text-xs font-medium uppercase tracking-[.2em] text-slate-400">
              Lucknow · India
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollToSection("about")}
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          rounded-full
          border
          border-white/10
          bg-white/[.04]
          p-3
          text-slate-400
          backdrop-blur
          transition
          hover:border-cyan-300/30
          hover:text-cyan-200
          lg:block
        "
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}