import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  RiDatabase2Line,
  RiCloudLine,
  RiBriefcase4Line,
  RiRocketLine,
  RiCompass3Line,
} from "react-icons/ri";
import { cn } from "@/lib/utils";

// ─── Subsidiary CEOs (Full Data & Icon Mapping) ──────────────────────────────
const subsidiaries = [
  {
    id: "dawit",
    fullName: "Mr. Dawit Berhanu",
    title: "Chief Executive Officer",
    division: "Bridgesoft Data",
    divisionTag: "Data",
    icon: RiDatabase2Line,
    color: "text-blue-600",
    bgHover:
      "hover:border-blue-600/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]",
  },
  {
    id: "dayo",
    fullName: "Mr. Dayo Falola",
    title: "Chief Executive Officer",
    division: "Bridgesoft Cloud",
    divisionTag: "Cloud",
    icon: RiCloudLine,
    color: "text-sky-500",
    bgHover:
      "hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)]",
  },
  {
    id: "nifemi",
    fullName: "Mrs. Nifemi Oduala",
    title: "Chief Executive Officer",
    division: "Bridgesoft Enterprise",
    divisionTag: "Enterprise",
    icon: RiBriefcase4Line,
    color: "text-emerald-600",
    bgHover:
      "hover:border-emerald-600/50 hover:shadow-[0_0_30px_rgba(5,150,105,0.1)]",
  },
  {
    id: "nasirudeen",
    fullName: "Mr. Nasirudeen Bala",
    title: "Chief Executive Officer",
    division: "Bridgesoft Ventures",
    divisionTag: "Ventures",
    icon: RiRocketLine,
    color: "text-amber-500",
    bgHover:
      "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]",
  },
  {
    id: "amadou",
    fullName: "Mr. Amadou Diallo",
    title: "Chief Executive Officer",
    division: "Bridgesoft Consulting",
    divisionTag: "Consulting",
    icon: RiCompass3Line,
    color: "text-purple-600",
    bgHover:
      "hover:border-purple-600/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SubsidiaryList() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-[#F6F9FC] py-24 lg:py-32 font-sans"
      aria-label="Subsidiary Leadership"
    >
      <div className="site-container">
        {/* ── Section Header (AWS/Stripe Tone) ── */}
        <div className="max-w-2xl mb-16 relative z-10">
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="w-8 h-px bg-[#0A2540]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0A2540]">
                Business Units
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[40px] font-medium text-[#0A2540] tracking-tight mb-4">
              Divisional Leadership.
            </h2>
            <p className="text-[18px] text-[#425466] leading-[1.6]">
              The CEOs of our core subsidiaries. Each leads a distinct business
              unit with its own P&L, product roadmap, and go-to-market strategy,
              while collaborating closely to drive Bridgesoft's overall mission
              and growth.
            </p>
          </motion.div>
        </div>

        {/* ── 5-Card Tech Grid (System Nodes) ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {subsidiaries.map((sub, index) => {
            const Icon = sub.icon;
            return (
              <motion.div
                key={sub.id || index}
                variants={fadeUp}
                className={cn(
                  "group relative bg-white p-6 md:p-8 rounded-2xl border border-rule transition-all duration-300 ease-out cursor-default",
                  "hover:-translate-y-1",
                  sub.bgHover,
                )}
              >
                {/* Simulated "Live Status" Light */}
                <div className="absolute top-6 right-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>

                {/* Division Icon & Monospace Tag */}
                <div className="flex flex-col gap-4 mb-10">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg bg-[#F6F9FC] border border-rule flex items-center justify-center transition-colors duration-300",
                      "group-hover:bg-white",
                    )}
                  >
                    <Icon className={cn("w-5 h-5", sub.color)} />
                  </div>
                  <div className="font-mono text-[11px] font-bold text-subtle uppercase tracking-widest">
                    {sub.divisionTag}
                  </div>
                </div>

                {/* Executive Info */}
                <div>
                  <h3 className="text-[20px] font-bold text-[#0A2540] tracking-tight mb-1 group-hover:text-accent transition-colors">
                    {sub.fullName}
                  </h3>
                  <div className="text-[13px] font-medium text-[#425466]">
                    {sub.title}
                  </div>
                </div>

                {/* Subtle bottom edge highlight on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
