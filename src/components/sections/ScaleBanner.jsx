import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Custom Animated Counter Component ─────────────────────────────────────────
function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    mass: 1,
  });

  const displayValue = useTransform(springValue, (current) => {
    if (decimals > 0) {
      return current.toFixed(decimals);
    }
    return Intl.NumberFormat("en-US").format(Math.floor(current));
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return (
    <span ref={ref} className="inline-flex">
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

// ─── ScaleBanner Component ────────────────────────────────────────────────────
export default function ScaleBanner() {
  const stats = [
    {
      value: 3.8,
      prefix: "$",
      suffix: "B",
      decimals: 1,
      label: "Total Annual Transaction Volume.",
    },
    {
      value: 34,
      prefix: "",
      suffix: "",
      decimals: 0,
      label: "countries where our solutions are deployed",
    },
    {
      value: 4300,
      prefix: "",
      suffix: "+",
      decimals: 0,
      label:
        "Global businesses and institutions leveraging our solutions to drive growth and innovation",
    },
    {
      value: 15,
      prefix: "",
      suffix: "M",
      decimals: 0,
      label: "Total number of users across all our platforms and services",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 lg:py-48 font-sans">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-slate-950/80" />

      <div className="site-container relative z-10 flex flex-col items-center">
        {/* Centered Editorial Subheader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-medium text-white leading-[1.05] tracking-tight drop-shadow-[0_2px_16px_rgba(15,23,42,0.7)]">
            Built for a global economy.
          </h2>
        </motion.div>

        <div className="w-full max-w-[1200px] mx-auto">
          {/* Top Gradient Line */}

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center px-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-start">
                <div className="text-[44px] sm:text-[52px] lg:text-[60px] font-bold text-white leading-none tracking-tight mb-4 drop-shadow-lg">
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="text-[15px] sm:text-[16px] text-white/70 leading-[1.5] max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Gradient Line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-12 lg:mt-16" />
        </div>
      </div>
    </section>
  );
}
