import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";

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
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

// ─── Main Hero Component ──────────────────────────────────────────────────────
export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full h-screen min-h-[700px] lg:min-h-[850px] flex items-center bg-[#0A0A0A] overflow-hidden"
    >
      {/* ─── Cinematic Background Layer ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dark, textured, ribbed glass/warm abstract image to match Planhat's vibe */}
        <img
          src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2787&auto=format&fit=crop"
          alt="Dark textured background"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        {/* Gradients to darken the image and create depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

        {/* Subtle warm glow injection (mimicking the lighting in your reference) */}
        <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px] mix-blend-overlay" />
      </div>

      <div className="site-container relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-[900px]"
        >
          {/* Subtle, highly tracked Eyebrow */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-[11px] sm:text-[12px] font-bold text-white/60 tracking-[0.2em] uppercase">
              The Unified Enterprise Platform
            </span>
          </motion.div>

          {/* Massive, elegant typography (Using font-medium instead of black for sophistication) */}
          <motion.div variants={fadeUp}>
            <h1 className="text-[52px] sm:text-[72px] lg:text-[88px] font-medium text-white leading-[1.05] tracking-[-0.03em] mb-8">
              Run your business <br className="hidden md:block" />
              with confidence <br className="hidden md:block" />
              across the globe.
            </h1>
          </motion.div>

          {/* Clean, readable subtext */}
          <motion.p
            variants={fadeUp}
            className="text-[18px] sm:text-[22px] text-white/80 leading-[1.5] max-w-[540px] mb-12"
          >
            Bridgesoft provides modern institutions with robust software and
            infrastructure that deliver lifelong operational efficiency.
          </motion.p>

          {/* Stark, high-contrast button (Planhat style: White bg, uppercase, sharp) */}
          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-8 py-4 rounded-sm transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span className="text-[13px] font-bold uppercase tracking-widest">
                Request a Demo
              </span>
              <RiArrowRightSLine className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
