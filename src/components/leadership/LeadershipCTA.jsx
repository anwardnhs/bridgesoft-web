import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function LeadershipCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      className="bg-white py-24 lg:py-32 font-sans"
      aria-label="Join the team"
    >
      <div className="site-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-[32px] sm:text-[40px] font-medium text-[#0A2540] tracking-tight mb-8">
            Join the team building this.
          </h2>

          <p className="text-[18px] text-[#425466] leading-[1.6] mb-10">
            We are always looking for operators, engineers, and visionaries who
            want to solve high-stakes problems at continental scale.
          </p>

          <Link
            to="/careers"
            className={cn(
              "group inline-flex items-center justify-center gap-2",
              "px-8 py-4 bg-[#0A2540] text-white rounded-sm",
              "text-[14px] font-bold uppercase tracking-widest transition-all duration-200",
              "hover:bg-accent hover:scale-[1.02] active:scale-[0.98]",
            )}
          >
            View Open Roles
            <RiArrowRightLine className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
