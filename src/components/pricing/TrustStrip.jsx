import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Simulated Logos (African Enterprises) ────────────────────────────────────
// Using typography to mimic corporate logos for a clean, SVG-free implementation
const companies = [
  {
    id: "dangote",
    name: "DANGOTE",
    className: "font-serif font-black tracking-tight uppercase text-[22px]",
  },
  {
    id: "mtn",
    name: "MTN",
    className:
      "font-sans font-black italic tracking-tighter text-[28px] leading-none",
  },
  {
    id: "flutterwave",
    name: "flutterwave",
    className: "font-sans font-extrabold tracking-tight text-[22px] lowercase",
  },
  {
    id: "standardbank",
    name: "Standard Bank",
    className: "font-sans font-semibold tracking-tight text-[20px]",
  },
  {
    id: "paystack",
    name: "paystack",
    className: "font-sans font-bold tracking-tighter text-[22px] lowercase",
  },
  {
    id: "oando",
    name: "OANDO",
    className: "font-sans font-black tracking-widest uppercase text-[20px]",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, filter: "blur(4px)", y: 10 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TrustStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      className="bg-white py-12 border-b border-slate-200 overflow-hidden"
      aria-label="Trusted Companies"
    >
      <div className="site-container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="flex flex-wrap justify-center md:justify-between items-center gap-x-12 gap-y-8"
        >
          {companies.map((company) => (
            <motion.div
              key={company.id}
              variants={item}
              className={`text-slate-400 hover:text-slate-900 transition-colors duration-300 cursor-default select-none flex items-center justify-center ${company.className}`}
              title={company.name}
            >
              {company.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
