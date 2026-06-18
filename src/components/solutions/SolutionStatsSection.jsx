import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function SolutionStatsSection({
  eyebrow = "Why Bridgesoft",
  title,
  description,
  stats,
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      {/* ─────────────────────────────────────────────────────────────
          01. PREMIUM ABSTRACT BACKGROUND
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* High-end abstract tech/architectural image */}
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          alt="Abstract tech background"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        {/* Gradients to fade the image cleanly into the dark background and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      <div className="site-container relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* ─────────────────────────────────────────────────────────────
              02. LEFT: NARRATIVE
          ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 lg:pr-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent mb-6"
            >
              {eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[36px] font-bold leading-[1.1] tracking-tight text-white sm:text-[48px] mb-6"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[18px] leading-[1.65] text-white/70"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              03. RIGHT: STATS GRID
          ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className={cn(
                    "relative pl-6 md:pl-8 border-l border-white/20",
                    // If there are exactly 3 stats, this dynamically makes the 3rd stat span across both columns to break up symmetry
                    stats.length === 3 && index === 2 ? "sm:col-span-2" : "",
                  )}
                >
                  <p className="text-[52px] lg:text-[64px] font-bold leading-none tracking-tighter text-white mb-3">
                    {stat.value}
                  </p>
                  <p className="text-[15px] leading-relaxed text-white/70 font-medium max-w-[280px]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
