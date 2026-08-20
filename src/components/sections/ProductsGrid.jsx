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
    desc: "Powerful cloud hosting on our own data centres. Your data stays local, safe, and entirely under our control with massive scalability.",
    link: "/products/cloud",
    btnLabel: "Explore Cloud",
    image: "https://media.istockphoto.com/id/2245861123/photo/aerial-view-data-center.jpg?s=612x612&w=0&k=20&c=rLNMn9kyObNZExi07J7I67yd94o8z-AK0k_pfnW8V4M="
  },
  {
    id: "data",
    title: "Bridgesoft Data",
    tags: ["ANALYTICS", "REPORTING", "ETL"],
    desc: "Advanced analytics and reporting tools to help you make data-driven decisions. Visualize trends, track performance, and gain insights that drive growth.",
    link: "/products/data",
    btnLabel: "Explore Data",
    image: "https://media.istockphoto.com/id/2166973319/photo/aerial-view-of-luandas-coastline-and-urban-landscape-in-angola.jpg?s=612x612&w=0&k=20&c=Rkc9jq9q1l-YcPJLGc3fqhmAUuSTbG2-9EnEeB4e69Q="
  },
  {
    id: "ai",
    title: "Bridge Intelligence",
    tags: ["AI", "MACHINE LEARNING", "LLMs"],
    desc: "Give your teams fast, policy-safe AI summaries and automation so they can move from questions to decisions with unprecedented confidence.",
    link: "/bridge-intelligence",
    btnLabel: "Explore AI",
    image: "https://media.istockphoto.com/id/2050780380/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.jpg?s=612x612&w=0&k=20&c=NjcxyCS1vjVqqLl6yv6GyPveBGTTUMR5MRN799x7kVs="
  },
  {
    id: "enterprise",
    title: "Bridgesoft Enterprise",
    tags: ["ERP", "OPERATIONS", "SCALE"],
    desc: "A comprehensive suite of enterprise solutions designed to streamline complex operations, enhance collaboration, and drive growth for large organizations.",
    link: "/products/enterprise",
    btnLabel: "Explore Enterprise",
    image: "https://media.istockphoto.com/id/1321495390/photo/onne-estate-camp-nigeria-orlean-invest-intels.jpg?s=612x612&w=0&k=20&c=dWkjiDCTSoFYnJ2DiVcwBzINewHeGFgRLCEurn6B2Fc="
  },
  {
    id: "security",
    title: "Bridgesoft Security",
    tags: ["INFRASTRUCTURE", "ZERO-TRUST"],
    desc: "Bank-grade security protocols, identity management, and real-time threat monitoring designed for the world's most critical institutions.",
    link: "/products/security",
    btnLabel: "Explore Security",
    image: "https://media.istockphoto.com/id/1187179311/photo/overhead-view-of-modern-office.jpg?s=612x612&w=0&k=20&c=8eNP7IDSagdU0_rvGQtjf_irMmhItt5OLedz6tEoAKA="
  }
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
                    {product.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-800 text-[10px] font-black uppercase tracking-[0.15em] rounded-[4px] shadow-sm">
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
                    className="inline-flex items-center justify-center gap-2 bg-[#E5F339] text-[#0A0A0A] px-8 py-4 font-bold text-[14px] hover:bg-[#D4E22A] transition-colors rounded-sm w-fit group-hover:-translate-y-1 group-hover:shadow-lg duration-300"
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
