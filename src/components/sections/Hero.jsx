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
        <img
          src="https://media.istockphoto.com/id/2210258657/vector/concept-of-application-or-web-development-ui-ux-design-group-of-designers-and-developers.jpg?s=612x612&w=0&k=20&c=hdPiXoerUM6-HKKTrCL0loNuzVcO74sG4CG6Wszj1T4="
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        {/* Gradients to gently darken the image for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Subtle cool glow injection (matching the new tech/global vibe) */}
        <div className="absolute top-1/4 left-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-overlay" />
      </div>

      <div className="site-container relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-[1000px] flex flex-col items-center"
        >


          {/* Massive, elegant typography with word-stagger animation */}
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
            }}
            className="text-[52px] sm:text-[72px] lg:text-[88px] font-medium text-white leading-[1.05] tracking-[-0.03em] mb-6 flex flex-wrap justify-center gap-x-3 sm:gap-x-4"
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>Bridging</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="text-blue-500">Innovation</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>and</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="text-blue-500">Intelligence.</motion.span>
          </motion.h1>

          {/* Clean, minimalist subtext */}
          <motion.p
            variants={fadeUp}
            className="text-[18px] sm:text-[22px] text-white/80 leading-[1.5] max-w-[500px] mb-12 font-light tracking-wide"
          >
            Global infrastructure engineered for seamless operations.
          </motion.p>

          {/* Stark, high-contrast button (Planhat style: White bg, uppercase, sharp) */}
          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-8 py-4 rounded-sm transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span className="text-[13px] font-bold uppercase tracking-widest">
                Explore our platform
              </span>
              <RiArrowRightSLine className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
