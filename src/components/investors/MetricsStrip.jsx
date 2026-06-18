import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiArrowUpLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

// ─── Data Import ──────────────────────────────────────────────────────────────
import { metrics } from "@/data/investors";

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

export default function MetricsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      className="bg-[#F6F9FC] border-b border-rule font-sans"
      aria-label="Key Financial Metrics"
    >
      <div className="site-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          // The divide classes create the crisp financial table lines between items
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-rule"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              variants={fadeUp}
              // Padding adjustments so the borders align perfectly
              className={cn(
                "py-10 flex flex-col justify-center",
                index === 0 && "sm:pr-8 lg:pr-10 lg:pl-0",
                index === 1 && "sm:pl-8 lg:px-10",
                index === 2 && "sm:pr-8 lg:px-10",
                index === 3 && "sm:pl-8 lg:pl-10 lg:pr-0",
              )}
            >
              {/* Monospace Label */}
              <div className="font-mono text-[11px] font-bold text-subtle uppercase tracking-widest mb-3">
                {metric.label}
              </div>

              {/* Massive Static Number */}
              <div className="text-[40px] lg:text-[48px] font-medium text-[#0A2540] tracking-tight leading-none mb-3">
                {metric.value}
              </div>

              {/* Context / Change Indicator */}
              <div className="flex items-center gap-1.5">
                {metric.positive ? (
                  <>
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                      <RiArrowUpLine className="w-3 h-3 text-emerald-700" />
                    </div>
                    <span className="text-[13px] font-bold text-emerald-700 tracking-wide">
                      {metric.change}
                    </span>
                  </>
                ) : (
                  <span className="text-[13px] font-medium text-[#425466]">
                    {metric.change}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
