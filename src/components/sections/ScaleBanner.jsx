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
      label: "in annual revenue processed (FY2025)",
    },
    {
      value: 14200,
      prefix: "",
      suffix: "+",
      decimals: 0,
      label: "professionals powering our systems",
    },
    {
      value: 4300,
      prefix: "",
      suffix: "+",
      decimals: 0,
      label: "active enterprise clients globally",
    },
    {
      value: 14,
      prefix: "",
      suffix: "",
      decimals: 0,
      label: "African markets with native footprint",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32 font-sans overflow-hidden">
      <div className="site-container flex flex-col items-center">
        {/* Centered Editorial Subheader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-medium text-[#0A2540] leading-[1.05] tracking-tight">
            The digital backbone <br className="hidden sm:block" />
            of African enterprise
          </h2>
        </motion.div>

        <div className="w-full max-w-[1200px] mx-auto">
          {/* Top Gradient Line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0A2540]/10 to-transparent mb-12 lg:mb-16" />

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-center px-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-start">
                <div className="text-[44px] sm:text-[52px] lg:text-[60px] font-bold text-[#0A2540] leading-none tracking-tight mb-4">
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#425466] leading-[1.5] max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Gradient Line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0A2540]/10 to-transparent mt-12 lg:mt-16" />
        </div>
      </div>
    </section>
  );
}
