import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  "About",
  "Skills",
  "Projects",
  "Certificates",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setOpen(false);
  };

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? "border-b border-white/[.07] bg-[#030712]/80 shadow-[0_10px_40px_rgba(0,0,0,.25)] backdrop-blur-2xl"
              : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-8">

          {/* Logo */}

          <button
            onClick={() => go("home")}
            className="group flex items-center gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.05] font-display text-sm font-bold text-white backdrop-blur-xl transition group-hover:border-cyan-300/30">
              HY
            </span>

            <span className="hidden text-left sm:block">
              <span className="block text-sm font-semibold text-white">
                Himanshu Yadav
              </span>

              <span className="block text-[10px] uppercase tracking-[.18em] text-slate-500">
                Frontend Developer
              </span>
            </span>
          </button>

          {/* desktop */}

          <nav className="hidden items-center gap-1 rounded-full border border-white/[.07] bg-white/[.035] p-1.5 backdrop-blur-xl md:flex">
            {links.map((item) => (
              <button
                key={item}
                onClick={() => go(item)}
                className="
                  rounded-full
                  px-4
                  py-2
                  text-[13px]
                  font-medium
                  text-slate-400
                  transition
                  duration-300
                  hover:bg-white/[.06]
                  hover:text-white
                "
              >
                {item}
              </button>
            ))}
          </nav>

          <a
            href="/Himanshu-Yadav-Frontend-Developer-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              group
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-cyan-300/20
              bg-cyan-300/[.07]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-cyan-100
              transition
              hover:border-cyan-300/40
              hover:bg-cyan-300
              hover:text-slate-950
              md:flex
            "
          >
            Resume

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* mobile */}

          <button
            className="
              grid h-10 w-10 place-items-center
              rounded-xl
              border border-white/10
              bg-white/[.05]
              text-white
              md:hidden
            "
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Menu"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              inset-x-4
              top-[88px]
              z-40
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#07101f]/95
              p-2
              shadow-2xl
              backdrop-blur-2xl
              md:hidden
            "
          >
            {links.map((item) => (
              <button
                key={item}
                onClick={() => go(item)}
                className="
                  block
                  w-full
                  rounded-xl
                  px-4
                  py-3.5
                  text-left
                  text-sm
                  font-medium
                  text-slate-300
                  transition
                  hover:bg-cyan-300/[.08]
                  hover:text-cyan-100
                "
              >
                {item}
              </button>
            ))}

            <a
              href="/Himanshu-Yadav-Frontend-Developer-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                mt-2
                flex
                items-center
                justify-between
                rounded-xl
                bg-cyan-300
                px-4
                py-3.5
                text-sm
                font-semibold
                text-slate-950
              "
            >
              View Resume

              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}