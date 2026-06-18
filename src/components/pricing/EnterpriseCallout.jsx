import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightUpLine, RiMailSendLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function EnterpriseCallout() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden font-sans"
      aria-label="Enterprise Contact"
    >
      {/* ─── Premium Unsplash Dark Abstract Background ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep, sophisticated dark abstract from Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Enterprise dark abstract background"
          className="w-full h-full object-cover"
        />
        {/* Heavy slate gradient overlay for text readability and SaaS feel */}
        <div className="absolute inset-0 bg-slate-950/80 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40 backdrop-blur-[2px]" />
      </div>

      <div className="site-container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="max-w-3xl mx-auto flex flex-col items-center text-center"
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-black leading-[1.1] tracking-tight mb-6"
          >
            Running a large institution? <br className="hidden sm:block" />
            Let's build something specific.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-[18px] text-slate-300 leading-[1.6] max-w-2xl font-normal mb-12"
          >
            Need sovereign data residency, custom LLM layers, or localized
            regulatory compliance? Skip the standard tiers and get an
            architecture tailored strictly to your mandate.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA (Pill shape, smooth hover) */}
            <Button
              asChild
              className="w-full sm:w-auto h-14 px-8 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-medium text-[15px] transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.02]"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Talk to Sales
                <RiMailSendLine className="w-5 h-5" />
              </Link>
            </Button>

            {/* Secondary CTA (Glassmorphism outline, Pill shape) */}
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 rounded-full bg-white hover:bg-white/10 border-white text-black font-medium text-[15px] transition-all backdrop-blur-md"
            >
              <Link to="/demo" className="flex items-center gap-2">
                Request a Demo
                <RiArrowRightUpLine className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
