import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  RiRocket2Line,
  RiPieChart2Line,
  RiShieldCheckLine,
  RiSparklingLine,
} from "react-icons/ri";

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
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Added icons to the data model for the Dribbble look
const defaultItems = [
  {
    title: "Accelerated Growth",
    body: "Expand your reach instantly with routing and processing optimized for local markets across 150+ countries.",
    icon: RiRocket2Line,
    color: "text-blue-600",
    bg: "bg-blue-50 hover:bg-blue-600",
  },
  {
    title: "Actionable Insights",
    body: "Maximize revenue with machine learning models trained on billions of data points to reduce false declines.",
    icon: RiPieChart2Line,
    color: "text-purple-600",
    bg: "bg-purple-50 hover:bg-purple-600",
  },
  {
    title: "Bulletproof Security",
    body: "Offload the heavy lifting of PCI compliance and local regulatory requirements to our secure infrastructure.",
    icon: RiShieldCheckLine,
    color: "text-emerald-600",
    bg: "bg-emerald-50 hover:bg-emerald-600",
  },
  {
    title: "Smart Automation",
    body: "Reconcile transfers, resolve disputes, and automate accounting with real-time programmatic data access.",
    icon: RiSparklingLine,
    color: "text-amber-600",
    bg: "bg-amber-50 hover:bg-amber-600",
  },
];

export default function SolutionOpportunitySection({
  label = "The opportunity",
  title = "Unlock new revenue streams",
  description = "Build scalable financial products without the heavy lifting. Our APIs abstract away the complexity of global operations.",
  items = defaultItems,
}) {
  return (
    // Off-white background makes the white cards pop
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="site-container mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Dribbble-style Pill Badge */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <span className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 backdrop-blur-sm">
              {label}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            {description}
          </motion.p>
        </motion.div>

        {items?.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            // Tighter gap for a more cohesive Bento grid feel
            className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
          >
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  // Soft, oversized borders and smooth floating hover states
                  className="group relative flex flex-col justify-start rounded-[2rem] border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 sm:p-10"
                >
                  {/* Chunky, colorful icon container */}
                  {Icon && (
                    <div
                      className={cn(
                        "mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:text-white",
                        item.color,
                        item.bg,
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  )}

                  <h3 className="text-xl font-bold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
