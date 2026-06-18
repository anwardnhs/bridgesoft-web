import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  RiArrowRightLine,
  RiCloudWindyLine,
  RiDatabase2Line,
} from "react-icons/ri";
import { cn } from "@/lib/utils";

// ─── Background Images ───
import entImg from "@/assets/images/joel-filipe-D1S4F_SKY2I-unsplash.jpg";
import consImg from "@/assets/images/austin-distel-mpN7xjKQ_Ns-unsplash.jpg";
import ventImg from "@/assets/images/lycs-architecture-U2BI3GMnSSE-unsplash.jpg";

// ─── New Figma Assets (Make sure these match your filenames!) ───
import cloud3d from "@/assets/images/product-data-graphic.svg";
import logoCloud from "@/assets/images/product-growth-chart.svg";

// ─── Animation Variants ────────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
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

// ─── Abstract Graphics for Cards ──────────────────────────────────────────────
function CloudGraphic() {
  return (
    <div className="absolute -right-10 -top-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
  );
}

function CloudUI() {
  return (
    <div className="pointer-events-none flex items-center justify-center transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
      <img
        src={cloud3d}
        alt="Cloud Infrastructure"
        className="w-full max-w-[520px] h-auto drop-shadow-2xl"
      />
    </div>
  );
}

function DataGraphic() {
  return (
    <div className="absolute -right-10 -bottom-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-tl from-sky-100/40 to-blue-50/20 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
  );
}

function DataUI() {
  return (
    <div className="pointer-events-none flex h-[280px] w-full max-w-[520px] items-center justify-center transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
      <div className="w-full h-full relative">
        <div className="absolute top-0 left-10 w-12 h-12 bg-white rounded-2xl border border-rule shadow-lg flex items-center justify-center">
          <RiDatabase2Line className="text-[#0A2540] w-5 h-5" />
        </div>
        <div className="absolute top-20 right-10 w-10 h-10 bg-[#0A2540] rounded-xl shadow-xl flex items-center justify-center">
          <div className="w-2 h-2 bg-accent rounded-full" />
        </div>
        <div className="absolute bottom-0 left-20 w-14 h-14 bg-white rounded-2xl border border-rule shadow-lg flex items-center justify-center p-2">
          <div className="w-full h-full bg-accent/10 rounded-lg border border-accent/20" />
        </div>
        <svg
          className="absolute inset-0 w-full h-full -z-10"
          overflow="visible"
        >
          <path
            d="M 60 24 Q 150 24 200 90"
            fill="none"
            stroke="#E5E5EA"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="animate-[dash_20s_linear_infinite]"
          />
          <path
            d="M 80 180 Q 150 180 200 110"
            fill="none"
            stroke="#E5E5EA"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProductsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative scroll-mt-24 overflow-hidden bg-white pb-24 pt-28 lg:pb-32 lg:pt-36"
      aria-label="Products"
    >
      <div className="site-container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[32px] sm:text-[40px] font-black text-[#0A2540] leading-[1.1] tracking-[-0.03em] mb-4"
          >
            Everything you need to run <br className="hidden sm:block" />
            your business smoothly.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[17px] text-[#425466] leading-[1.6]"
          >
            Bridgesoft offers a suite of products designed to help you manage
            your business efficiently. From cloud hosting to data management, we
            have the tools you need to succeed.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* ── LIVE PRODUCTS (Top Row) ── */}

          {/* Bridgesoft Cloud */}
          <motion.div variants={cardVariant} className="md:col-span-12">
            <Link
              to="/products/cloud"
              className="group relative block w-full overflow-hidden rounded-3xl border border-rule bg-white transition-all duration-300 hover:border-transparent hover:shadow-[0_30px_60px_-15px_rgba(50,50,93,0.15),0_18px_36px_-18px_rgba(0,0,0,0.2)]"
            >
              <CloudGraphic />
              <div className="relative z-10 grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
                <div className="flex flex-col">
                  <span className="mb-4 text-[11px] font-mono uppercase tracking-widest text-subtle">
                    Hosting & Speed
                  </span>
                  <h3 className="mb-3 text-[32px] font-bold tracking-tight text-[#0A2540]">
                    Bridgesoft Cloud
                  </h3>
                  <p className="mb-8 max-w-[380px] text-[16px] leading-[1.6] text-[#425466]">
                    Fast, secure, and reliable cloud hosting for your business.
                    Get started today!
                  </p>
                  <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-slate-950">
                    Explore Cloud
                    <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
                <CloudUI />
              </div>
            </Link>
          </motion.div>

          {/* Bridgesoft Data */}
          <motion.div variants={cardVariant} className="md:col-span-12">
            <Link
              to="/products/data"
              className="group relative block w-full overflow-hidden rounded-3xl border border-rule bg-white transition-all duration-300 hover:border-transparent hover:shadow-[0_30px_60px_-15px_rgba(50,50,93,0.15),0_18px_36px_-18px_rgba(0,0,0,0.2)]"
            >
              <DataGraphic />
              <div className="relative z-10 grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
                <div className="flex flex-col">
                  <span className="mb-4 text-[11px] font-mono uppercase tracking-widest text-subtle">
                    Insights & Storage
                  </span>
                  <h3 className="mb-3 text-[32px] font-bold tracking-tight text-[#0A2540]">
                    Bridgesoft Data
                  </h3>
                  <p className="mb-8 max-w-[380px] text-[16px] leading-[1.6] text-[#425466]">
                    Store, organize, and understand your data easily. Get the
                    clear insights you need to make smart decisions.
                  </p>
                  <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-slate-950">
                    Explore Data
                    <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
                <DataUI />
              </div>
            </Link>
          </motion.div>

          {/* ── COMING SOON PRODUCTS (Bottom Row) ── */}

          {/* Bridgesoft Enterprise */}
          <motion.div variants={cardVariant} className="md:col-span-4">
            <div className="group relative w-full h-full overflow-hidden rounded-3xl border border-rule/50 p-8 flex flex-col transition-opacity hover:opacity-100">
              <img
                src={entImg}
                alt="Enterprise background"
                className="absolute inset-0 w-full h-full object-cover opacity-60 brightness-95 contrast-[1.05] group-hover:opacity-75 transition-all duration-500"
              />
              <div className="relative z-10 flex flex-col h-full bg-white/90 backdrop-blur-sm p-6 rounded-[28px] shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-rule flex items-center justify-center">
                    <RiDatabase2Line className="text-subtle w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-[18px] font-extrabold text-slate-950 mb-2">
                  Bridgesoft Enterprise
                </h3>
                <p className="text-[15px] text-slate-700 leading-[1.7]">
                  Manage your team, customers, and daily operations all in one
                  simple dashboard.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bridgesoft Consulting */}
          <motion.div variants={cardVariant} className="md:col-span-4">
            <div className="group relative w-full h-full overflow-hidden rounded-3xl border border-rule/50 p-8 flex flex-col transition-opacity hover:opacity-100">
              <img
                src={consImg}
                alt="Consulting background"
                className="absolute inset-0 w-full h-full object-cover opacity-60 brightness-95 contrast-[1.05] group-hover:opacity-75 transition-all duration-500"
              />
              <div className="relative z-10 flex flex-col h-full bg-white/90 backdrop-blur-sm p-6 rounded-[28px] shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-rule flex items-center justify-center">
                    <RiCloudWindyLine className="text-subtle w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-[18px] font-extrabold text-slate-950 mb-2">
                  Bridgesoft Consulting
                </h3>
                <p className="text-[15px] text-slate-700 leading-[1.7]">
                  Need help growing? Our experts will work directly with you to
                  build a strategy that works.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bridgesoft Ventures */}
          <motion.div variants={cardVariant} className="md:col-span-4">
            <div className="group relative w-full h-full overflow-hidden rounded-3xl border border-rule/50 p-8 flex flex-col transition-opacity hover:opacity-100">
              <img
                src={ventImg}
                alt="Ventures background"
                className="absolute inset-0 w-full h-full object-cover opacity-60 brightness-95 contrast-[1.05] group-hover:opacity-75 transition-all duration-500"
              />
              <div className="relative z-10 flex flex-col h-full bg-white/90 backdrop-blur-sm p-6 rounded-[28px] shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-rule flex items-center justify-center">
                    <RiArrowRightLine className="text-subtle w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-[18px] font-extrabold text-slate-950 mb-2">
                  Bridgesoft Ventures
                </h3>
                <p className="text-[15px] text-slate-700 leading-[1.7]">
                  Funding and support for new startups. We help you turn your
                  big ideas into reality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 🔥 ASSET #4: The Integrations Logo Cloud Banner */}
          <motion.div
            variants={cardVariant}
            className="md:col-span-12 mt-4 lg:mt-8"
          >
            <div className="w-full bg-[#F6F9FC] rounded-3xl border border-rule/50 p-10 md:p-16 flex flex-col items-center justify-center text-center overflow-hidden">
              <h3 className="text-[24px] md:text-[32px] font-bold text-[#0A2540] mb-3 tracking-tight">
                Work with 100+ global brands
              </h3>
              <p className="text-[15px] text-[#425466] mb-10 max-w-lg mx-auto">
                Bridgesoft integrates seamlessly with a wide range of popular
                tools and platforms, making it easy to connect your existing
                workflows and maximize productivity.
              </p>
              <img
                src={logoCloud}
                alt="100+ Integrations"
                className="w-fit max-w-4xl h-auto object-contain mix-blend-multiply transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
