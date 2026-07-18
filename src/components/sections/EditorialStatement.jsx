import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

// Make sure to import your new Handz asset here!

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

// ─── Abstract Floating UI for the Cards ──────────────────────────────────────
function FloatingChat() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white/50 transform group-hover:-translate-y-2 transition-transform duration-500">
      <div className="flex gap-3 items-end">
        <div className="w-8 h-8 rounded-full bg-blue-100 shrink-0" />
        <div className="space-y-2 flex-1">
          <div className="h-2 w-[60%] bg-blue-500/20 rounded-full" />
          <div className="h-2 w-[80%] bg-blue-500/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function FloatingToggles() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white/50 space-y-4 transform group-hover:-translate-y-2 transition-transform duration-500">
      {[1, 2].map((i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="h-2 w-[40%] bg-slate-200 rounded-full" />
          <div
            className={cn(
              "w-8 h-4 rounded-full relative",
              i === 1 ? "bg-accent" : "bg-slate-200",
            )}
          >
            <div
              className={cn(
                "absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all",
                i === 1 ? "right-0.5" : "left-0.5",
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function FloatingChart() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white/50 transform group-hover:-translate-y-2 transition-transform duration-500">
      <div className="flex items-end gap-1.5 h-16 w-full mt-2">
        {[40, 70, 45, 90, 60, 100, 80].map((height, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-purple-500 to-indigo-400 rounded-t-sm"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function EditorialStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const columns = [
    {
      title: "Designed for People",
      desc: "Software should adapt to how your team actually works, not the other way around.",
      bgImage:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      visual: <FloatingChat />,
    },
    {
      title: "Adapts to Your Rules",
      desc: "Easily adjust permissions, workflows, and policies without writing a single line of code.",
      bgImage:
        "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2574&auto=format&fit=crop",
      visual: <FloatingToggles />,
    },
    {
      title: "Grows With You",
      desc: "As your company expands to new markets, your underlying infrastructure scales instantly.",
      bgImage:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2670&auto=format&fit=crop",
      visual: <FloatingChart />,
    },
  ];

  return (
    <section
      className="bg-white py-24 lg:py-32 relative overflow-hidden border-t border-rule font-sans"
      aria-label="Editorial Statement"
    >
      <div className="site-container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
        >
          {/* ── Top Header / Quote with Hands Asset ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 lg:mb-24">
            {/* Left: Eyebrow & Quote (Reduced col-span to 7 for more spacing) */}
            <div className="lg:col-span-7 relative z-10">
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2540] text-white text-[12px] font-bold uppercase tracking-widest shadow-sm">
                  Built for impact
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium text-[#0A2540] leading-[1.15] tracking-tight"
              >
                Powerful infrastructure for Africa's most ambitious
                institutions.
              </motion.h2>
            </div>

            {/* Right: The Handz Asset (Rotated and Pointing towards text) */}
          </div>

          {/* ── 3-Column Image Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {columns.map((col, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative w-full h-[400px] lg:h-[480px] rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(10,37,64,0.05)] border border-rule transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(10,37,64,0.1)]"
              >
                {/* Unsplash Background Image */}
                <div className="absolute inset-0 z-0 bg-[#F6F9FC]">
                  <img
                    src={col.bgImage}
                    alt="Abstract background"
                    className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80 mix-blend-multiply"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent" />
                </div>

                {/* Card Text Content */}
                <div className="relative z-10 p-8 lg:p-10">
                  <h3 className="text-[20px] lg:text-[24px] font-bold text-[#0A2540] mb-3 tracking-tight">
                    {col.title}
                  </h3>
                  <p className="text-[15px] text-[#425466] leading-[1.5] max-w-[250px]">
                    {col.desc}
                  </p>
                </div>

                {/* Floating UI Elements */}
                {col.visual}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
