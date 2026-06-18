import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiBankLine, RiArrowRightLine } from "react-icons/ri";

// ─── Data Import ──────────────────────────────────────────────────────────────
import { governance } from "@/data/investors";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function GovernanceSnapshot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-[#F6F9FC] py-24 lg:py-32 font-sans border-b border-rule"
      aria-label="Governance Snapshot"
    >
      <div className="site-container max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          {/* ── LEFT: Editorial & Link ── */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            className="w-full lg:w-1/3 shrink-0 text-center lg:text-left"
          >
            <div className="mb-6 flex items-center justify-center lg:justify-start gap-3">
              <div className="w-8 h-px bg-[#0A2540]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0A2540]">
                Oversight
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[32px] font-medium text-[#0A2540] tracking-tight mb-4">
              Uncompromising Governance.
            </h2>
            <p className="text-[16px] text-[#425466] mb-8">
              Our board structure is designed to provide independent, rigorous
              oversight of management, ensuring absolute alignment with
              long-term shareholder interests.
            </p>

            <Link
              to="/leadership"
              className="group inline-flex items-center gap-2 text-[14px] font-bold text-[#0A2540] uppercase tracking-widest hover:text-accent transition-colors"
            >
              View Board of Directors
              <RiArrowRightLine className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* ── RIGHT: 3-Col Stat Cards ── */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={container}
            className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {governance.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl border border-rule flex flex-col items-center lg:items-start text-center lg:text-left shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#F6F9FC] border border-rule flex items-center justify-center mb-6">
                  <RiBankLine className="w-5 h-5 text-[#0A2540]" />
                </div>

                <div className="text-[40px] font-medium text-[#0A2540] leading-none tracking-tight mb-3">
                  {item.value}
                </div>
                <div className="text-[14px] font-bold text-[#0A2540] mb-2">
                  {item.label}
                </div>
                <div className="text-[12px] text-subtle font-medium leading-[1.5]">
                  {item.note}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
