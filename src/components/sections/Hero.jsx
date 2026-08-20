import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";

// Import the SVG asset
import personSvg from "@/assets/images/person.svg";

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

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 250]); // Moves down slower than scroll

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen pt-32 pb-20 lg:pt-0 lg:pb-0 lg:h-screen flex items-center bg-[#0A0A0A] overflow-hidden"
    >
      {/* ─── Background Subtle Glow ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-overlay" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[200px]" />
      </div>

      <div className="site-container relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
        
        {/* ─── Left Column (Text & Button) ─── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="lg:col-span-5 flex flex-col items-start text-left pt-10 lg:pt-0"
        >
          {/* Massive, elegant typography with word-stagger animation */}
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
            }}
            className="text-[48px] sm:text-[64px] lg:text-[76px] font-medium text-white leading-[1.05] tracking-[-0.03em] mb-6 flex flex-wrap justify-start gap-x-3"
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>Bridging</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="text-blue-500">Innovation</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>and</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="text-blue-500">Intelligence.</motion.span>
          </motion.h1>

          {/* Clean, minimalist subtext */}
          <motion.p
            variants={fadeUp}
            className="text-[18px] sm:text-[22px] text-white/70 leading-[1.6] max-w-[480px] mb-10 font-light tracking-wide"
          >
            Global infrastructure engineered for seamless operations.
          </motion.p>

          {/* Stark, high-contrast button */}
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

        {/* ─── Right Column (Parallax SVG Image) ─── */}
        <div className="lg:col-span-7 h-[50vh] lg:h-full relative flex items-center justify-center">
          <motion.div 
            style={{ y: yImage }}
            className="relative w-full h-full flex items-center justify-center pt-10 lg:pt-0"
          >
            {/* The SVG Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              src={personSvg}
              alt="Bridge Intelligence Platform"
              className="w-full h-full object-contain max-h-[600px] lg:max-h-[800px] drop-shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
