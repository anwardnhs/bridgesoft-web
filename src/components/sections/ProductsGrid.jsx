import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";

// ─── Animation Variants ────────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Products Data ────────────────────────────────────────────────────────────
const products = [
  {
    id: "cloud",
    title: "Bridgesoft Cloud",
    tags: ["PLATFORMS", "HOSTING", "+1"],
    desc: "A robust cloud platform that provides scalable infrastructure, seamless integration, and high availability for your applications and services. ",
    link: "/products/cloud",
    btnLabel: "Explore Cloud",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "data",
    title: "Bridgesoft Data",
    tags: ["ANALYTICS", "REPORTING", "ETL"],
    desc: "A comprehensive data management solution that enables organizations to collect, process, and analyze large volumes of data efficiently, turning insights into actionable strategies.",
    link: "/products/data",
    btnLabel: "Explore Data",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "ai",
    title: "Bridge Intelligence",
    tags: ["AI", "MACHINE LEARNING", "LLMs"],
    desc: "Our AI and machine learning platform leverages advanced algorithms and large language models to provide predictive analytics, natural language processing, and intelligent automation for businesses across industries.",
    link: "/bridge-intelligence",
    btnLabel: "Explore AI",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "enterprise",
    title: "Bridgesoft Enterprise",
    tags: ["ERP", "OPERATIONS", "SCALE"],
    desc: "A comprehensive suite of enterprise solutions designed to streamline complex operations, enhance collaboration, and drive growth for large organizations.",
    link: "/products/enterprise",
    btnLabel: "Explore Enterprise",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8ed7c66364?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "security",
    title: "Bridgesoft Security",
    tags: ["INFRASTRUCTURE", "ZERO-TRUST"],
    desc: "Bank-grade security protocols, identity management, and real-time threat monitoring designed for the world's most critical institutions.",
    link: "/products/security",
    btnLabel: "Explore Security",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProductsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative scroll-mt-24 overflow-hidden bg-[#FAFAFA] pb-24 pt-28 lg:pb-32 lg:pt-36"
      aria-label="Products"
    >
      <div className="site-container relative z-10">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariant}
              className="md:col-span-12 group"
            >
              <div className="w-full bg-white rounded-[20px] lg:rounded-[32px] border border-rule/40 overflow-hidden flex flex-col lg:flex-row shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 min-h-[400px]">
                {/* ── Left Content (Wink Digital Style) ── */}
                <div className="lg:w-[50%] p-10 md:p-16 lg:p-20 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white border border-slate-200 text-slate-800 text-[10px] font-black uppercase tracking-[0.15em] rounded-[4px] shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-[32px] md:text-[44px] font-medium text-slate-900 mb-6 tracking-tight leading-[1.1] uppercase">
                    {product.title}
                  </h3>

                  <p className="text-[17px] leading-[1.6] text-slate-600 mb-10 max-w-[90%]">
                    {product.desc}
                  </p>

                  <Link
                    to={product.link}
                    className="inline-flex items-center justify-center gap-2 bg-[#004ADD] text-white px-8 py-4 font-bold text-[14px] hover:bg-[#003399] transition-colors rounded-sm w-fit group-hover:-translate-y-1 group-hover:shadow-lg duration-300"
                  >
                    {product.btnLabel}
                    <RiArrowRightLine className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* ── Right Image (Edge to Edge) ── */}
                <div className="lg:w-[50%] h-[300px] lg:h-auto overflow-hidden relative bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
