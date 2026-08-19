import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
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

// ─── New Figma Assets ───
import cloud3d from "@/assets/images/product-data-graphic.svg";
import logoCloud from "@/assets/images/product-growth-chart.svg";

// ─── Animations ────────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

// ─── Premium Mouse Spotlight Card ───────────────────────────────────────
function SpotlightCard({ children, className, to, dark = false }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Wrapper = to ? Link : "div";

  return (
    <Wrapper
      to={to}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[32px] transition-all duration-500",
        dark
          ? "bg-slate-950 border-white/10"
          : "bg-white border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border",
        className,
      )}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-300 group-hover:opacity-100 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${dark ? "rgba(255,255,255,0.06)" : "rgba(10,37,64,0.04)"},
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </Wrapper>
  );
}

// ─── Abstract Graphics ──────────────────────────────────────────────────
function CloudUI() {
  return (
    <div className="absolute inset-y-0 right-0 w-full md:w-[60%] flex items-center justify-end pointer-events-none p-8 z-0">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-colors duration-700" />
      <motion.img
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        src={cloud3d}
        alt="Cloud Infrastructure"
        className="w-[120%] max-w-[600px] h-auto object-contain translate-x-12 drop-shadow-2xl opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
      />
    </div>
  );
}

function DataUI() {
  return (
    <div className="absolute -bottom-12 -right-12 w-[110%] h-[280px] pointer-events-none z-0">
      <div className="absolute inset-0 bg-sky-500/5 rounded-full blur-[60px] group-hover:bg-sky-500/15 transition-colors duration-700" />
      <div className="w-full h-full relative">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-10 left-[20%] w-12 h-12 bg-white rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgb(0,0,0,0.1)] flex items-center justify-center backdrop-blur-md"
        >
          <RiDatabase2Line className="text-[#0A2540] w-5 h-5" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 right-[25%] w-10 h-10 bg-[#0A2540] rounded-[14px] shadow-xl flex items-center justify-center"
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
        </motion.div>

        <svg
          className="absolute inset-0 w-full h-full -z-10"
          overflow="visible"
        >
          <path
            d="M -20 80 C 80 80 120 160 250 120"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-[dash_20s_linear_infinite] group-hover:stroke-sky-200 transition-colors duration-500"
          />
        </svg>
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────
export default function ProductsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[#FAFAFA] py-24 lg:py-32 overflow-hidden font-sans">
      <div className="site-container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        {/* Section Header (Optional/Placeholder based on original code) */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="text-[13px] font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4">
            Our Ecosystem
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A2540] tracking-tight leading-[1.1]">
            Build faster with <br className="hidden md:block" />{" "}
            enterprise-grade tools.
          </h3>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* ── ROW 1: LIVE PRODUCTS ── */}

          {/* Bridgesoft Cloud (Large Bento) */}
          <motion.div
            variants={cardVariant}
            className="md:col-span-12 lg:col-span-7 h-[420px] md:h-[480px]"
          >
            <SpotlightCard to="/products/cloud" className="h-full w-full">
              <div className="relative z-10 flex flex-col h-full justify-between p-8 md:p-12 w-full md:w-[65%]">
                <div>
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[12px] font-bold uppercase tracking-wider text-slate-500">
                      Cloud Hosting
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] mb-4">
                    Bridgesoft Cloud
                  </h3>
                  <p className="text-[16px] md:text-[17px] leading-relaxed text-slate-600 font-medium">
                    Powerful cloud hosting on our own datacenters across Africa.
                    Your data stays local, safe, and entirely under your
                    control.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 text-[15px] font-semibold text-[#0A2540] group-hover:text-indigo-600 transition-colors">
                  Explore Cloud
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                    <RiArrowRightLine className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
              <CloudUI />
            </SpotlightCard>
          </motion.div>

          {/* Bridgesoft Data (Small Bento) */}
          <motion.div
            variants={cardVariant}
            className="md:col-span-12 lg:col-span-5 h-[420px] md:h-[480px]"
          >
            <SpotlightCard to="/products/data" className="h-full w-full">
              <div className="relative z-10 flex flex-col p-8 md:p-12">
                <span className="text-[12px] font-bold uppercase tracking-wider text-slate-500 mb-6">
                  Data Analytics
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] mb-4">
                  Bridgesoft Data
                </h3>
                <p className="text-[16px] md:text-[17px] leading-relaxed text-slate-600 font-medium max-w-[90%]">
                  Advanced reporting tools. Visualize trends and gain insights
                  that drive growth instantly.
                </p>
              </div>
              <DataUI />
            </SpotlightCard>
          </motion.div>

          {/* ── ROW 2: COMING SOON (Dark Mode / Image Glassmorphism) ── */}

          {[
            {
              title: "Enterprise",
              icon: RiDatabase2Line,
              img: entImg,
              desc: "Streamline operations and enhance collaboration for massive organizations.",
            },
            {
              title: "Consulting",
              icon: RiCloudWindyLine,
              img: consImg,
              desc: "Navigate technology adoption and digital transformation effortlessly.",
            },
            {
              title: "Ventures",
              icon: RiArrowRightLine,
              img: ventImg,
              desc: "Investment arm focused on supporting and funding innovative startups.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              className="md:col-span-4 h-[380px]"
            >
              <SpotlightCard dark className="h-full w-full border-none">
                {/* Background Image with dramatic overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-10 mix-blend-multiply" />
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 flex flex-col justify-between h-full p-8">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center text-white shadow-xl">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-widest text-white/90">
                      Coming Soon
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      Bridgesoft {item.title}
                    </h3>
                    <p className="text-[15px] text-white/70 leading-relaxed font-medium group-hover:text-white/90 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}

          {/* ── ROW 3: INTEGRATIONS ── */}
          <motion.div
            variants={cardVariant}
            className="md:col-span-12 mt-4 lg:mt-8"
          >
            <SpotlightCard className="bg-slate-900 overflow-visible py-16 md:py-24 border-none text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-950 pointer-events-none" />

              <div className="relative z-20 flex flex-col items-center max-w-2xl mx-auto px-6">
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  Connects with your stack.
                </h3>
                <p className="text-[16px] md:text-[18px] text-slate-400 mb-12">
                  Bridgesoft integrates seamlessly into the tools you already
                  rely on, ensuring smooth workflows out of the box.
                </p>

                <div className="relative w-full rounded-3xl p-4 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                  {/* Note: Added invert and brightness to make the SVG pop on dark background, adjust as needed based on your SVG asset */}
                  <img
                    src={logoCloud}
                    alt="Integrations"
                    className="w-full max-w-[800px] mx-auto h-auto object-contain filter invert brightness-200 opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                  />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Global CSS definition for dash animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes dash {
          to { stroke-dashoffset: -400; }
        }
      `,
        }}
      />
    </section>
  );
}
