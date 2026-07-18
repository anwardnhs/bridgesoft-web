import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  RiServerLine,
  RiEarthLine,
  RiTimerFlashLine,
  RiShieldStarLine,
} from "react-icons/ri";

// --- Snappy, tactile easing ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// Added icons and vibrant dark-mode accents
const defaultStats = [
  {
    value: "99.99%",
    label: "Uptime SLA guaranteed",
    icon: RiServerLine,
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(99,91,255,0.15)]",
  },
  {
    value: "150+",
    label: "Countries supported",
    icon: RiEarthLine,
    accent: "text-cyan-400",
    bg: "bg-cyan-500/10",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)]",
  },
  {
    value: "<50ms",
    label: "Average API response",
    icon: RiTimerFlashLine,
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.15)]",
  },
  {
    value: "Level 1",
    label: "PCI DSS compliance",
    icon: RiShieldStarLine,
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.15)]",
  },
];

export default function SolutionStatsSection({
  eyebrow = "Enterprise Grade",
  title = "Built for global scale and uncompromised security.",
  description = "Our infrastructure is designed from the ground up to handle massive volume without breaking a sweat, giving your team the reliability they need to move fast.",
  stats = defaultStats,
}) {
  return (
    // Matte, deep slate background - cleaner than complex gradients
    <section className="relative overflow-hidden bg-[#0B0F19] py-24 sm:py-32">
      {/* Single, deliberate ambient glow instead of multiple rings */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="site-container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20 items-center">
          {/* Left Narrative Column (Spans 5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="mb-6">
              {/* Dark mode pill badge */}
              <span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400">
                {eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.1]"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-slate-400"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Right Bento Grid (Spans 7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            {/* Removed the outer glass box to let the Bento cards breathe */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={scaleIn}
                    className={cn(
                      // Tactile dark bento card: Solid background, inner glare shadow, smooth hover lift
                      "group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/5 bg-[#131B2B] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#182135]",
                      stat.glow,
                      stats.length % 2 !== 0 && index === stats.length - 1
                        ? "sm:col-span-2 sm:flex-row sm:items-center sm:justify-start sm:gap-8"
                        : "",
                    )}
                  >
                    {/* Vibrant Icon Block */}
                    {Icon && (
                      <div
                        className={cn(
                          "mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                          stat.bg,
                          stat.accent,
                          // Remove bottom margin if it's the spanning card
                          stats.length % 2 !== 0 && index === stats.length - 1
                            ? "mb-0"
                            : "",
                        )}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                    )}

                    <div>
                      <div className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
