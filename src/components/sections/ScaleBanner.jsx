import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

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

export default function ScaleBanner() {
  const stats = [
    {
      value: 3.8,
      prefix: "$",
      suffix: "B",
      decimals: 1,
      label: "Processed securely for our users every year.",
    },
    {
      value: 34,
      prefix: "",
      suffix: "",
      decimals: 0,
      label: "Countries where our teams support local communities.",
    },
    {
      value: 4300,
      prefix: "",
      suffix: "+",
      decimals: 0,
      label: "Enterprises trusting us to run their operations.",
    },
    {
      value: 15,
      prefix: "",
      suffix: "M",
      decimals: 0,
      label: "People relying on our platforms every single day.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 lg:py-48 font-sans">
      {/* Background image - White Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-multiply"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')",
        }}
      />
      {/* Soft gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      <div className="site-container relative z-10 flex flex-col items-center">
        {/* Centered Editorial Subheader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-medium text-slate-900 leading-[1.05] tracking-tight">
            Technology built for people.
          </h2>
        </motion.div>

        <div className="w-full max-w-[1200px] mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 text-center px-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-start">
                <div className="text-[52px] sm:text-[64px] lg:text-[76px] font-bold text-slate-900 leading-none tracking-tighter mb-6">
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="text-[16px] sm:text-[18px] text-slate-600 leading-[1.6] max-w-[220px] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom subtle divider line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-20 lg:mt-24" />
        </div>
      </div>
    </section>
  );
}
