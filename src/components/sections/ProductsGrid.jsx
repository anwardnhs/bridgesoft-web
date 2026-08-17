import { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  RiArrowRightLine,
  RiServerLine,
  RiBarChartBoxLine,
  RiBrainLine,
  RiBuildingLine,
  RiLightbulbLine,
  RiRocketLine,
} from "react-icons/ri";

// ─── Animation Variants ────────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Server Status Panel (Cloud Card Visual) ──────────────────────────────────
const servers = [
  { name: "NGS-01", location: "Lagos", status: "active", load: 23 },
  { name: "NRB-02", location: "Nairobi", status: "active", load: 41 },
  { name: "CPT-03", location: "Cape Town", status: "active", load: 17 },
  { name: "ACC-04", location: "Accra", status: "idle", load: 5 },
];

function ServerPanel() {
  return (
    <div className="pointer-events-none w-full max-w-[480px] ml-auto transform transition-transform duration-500 ease-out group-hover:-translate-y-1">
      {/* Panel Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/50">
            Live Infrastructure
          </span>
        </div>
        <span className="text-[11px] font-mono text-white/30">
          4 nodes
        </span>
      </div>

      {/* Server Rows */}
      <div className="space-y-2.5">
        {servers.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3"
          >
            <div
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                s.status === "active"
                  ? "bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.4)]"
                  : "bg-white/20"
              }`}
            />
            <span className="text-[13px] font-mono text-white/80 w-[56px]">
              {s.name}
            </span>
            <span className="text-[12px] text-white/40 flex-1">
              {s.location}
            </span>
            {/* Load Bar */}
            <div className="w-16 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent transition-all duration-700"
                style={{ width: `${s.load}%` }}
              />
            </div>
            <span className="text-[11px] font-mono text-white/30 w-8 text-right">
              {s.load}%
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Stat Row */}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.06]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/30 block mb-1">
            Uptime
          </span>
          <span className="text-[20px] font-semibold text-white tracking-tight">
            99.98%
          </span>
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/30 block mb-1">
            Latency
          </span>
          <span className="text-[20px] font-semibold text-white tracking-tight">
            12ms
          </span>
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/30 block mb-1">
            Regions
          </span>
          <span className="text-[20px] font-semibold text-white tracking-tight">
            4
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Data Chart Widget (Data Card Visual) ─────────────────────────────────────
const chartData = [35, 52, 45, 68, 82, 75, 95, 88, 72, 90, 85, 98];

function DataChart() {
  return (
    <div className="pointer-events-none w-full transform transition-transform duration-500 ease-out group-hover:-translate-y-1">
      <div className="bg-[#F6F9FC] rounded-2xl border border-[rgba(0,0,0,0.04)] p-6">
        {/* Chart Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-subtle block mb-1">
              Processing Volume
            </span>
            <span className="text-[22px] font-semibold text-[#0A2540] tracking-tight">
              2.4M
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-semibold text-emerald-700">
              +18.3%
            </span>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end gap-[6px] h-[100px]">
          {chartData.map((val, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[3px] transition-all duration-500"
              style={{
                height: `${val}%`,
                backgroundColor:
                  i === chartData.length - 1
                    ? "#004ADD"
                    : i >= chartData.length - 3
                      ? "rgba(0, 74, 221, 0.5)"
                      : "rgba(0, 74, 221, 0.15)",
              }}
            />
          ))}
        </div>

        {/* X-Axis Labels */}
        <div className="flex justify-between mt-3">
          <span className="text-[10px] text-subtle">Jan</span>
          <span className="text-[10px] text-subtle">Jun</span>
          <span className="text-[10px] text-subtle">Dec</span>
        </div>
      </div>
    </div>
  );
}

// ─── Coming Soon Card Data ────────────────────────────────────────────────────
const comingSoonProducts = [
  {
    name: "Enterprise",
    desc: "Comprehensive solutions for large-scale operations and collaboration.",
    icon: RiBuildingLine,
    gradient: "from-[#1a1a2e]/[0.04] to-[#16213e]/[0.08]",
  },
  {
    name: "Consulting",
    desc: "Expert guidance through technology adoption and digital transformation.",
    icon: RiLightbulbLine,
    gradient: "from-[#0a2540]/[0.03] to-[#1a3a5c]/[0.07]",
  },
  {
    name: "Ventures",
    desc: "Funding and mentorship for innovative startups across Africa.",
    icon: RiRocketLine,
    gradient: "from-[#0a2540]/[0.05] to-[#0a2540]/[0.10]",
  },
];

// ─── Integration Partners ─────────────────────────────────────────────────────
const integrations = [
  "SAP",
  "Oracle",
  "Salesforce",
  "AWS",
  "Azure",
  "Flutterwave",
  "Paystack",
  "Interswitch",
  "M-Pesa",
  "SWIFT",
  "Temenos",
  "Mambu",
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProductsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cloudCardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = cloudCardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <section
      className="relative scroll-mt-24 overflow-hidden bg-white pb-24 pt-28 lg:pb-32 lg:pt-36"
      aria-label="Products"
    >
      <div className="site-container relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 lg:mb-20"
          >
            <div className="lg:col-span-7">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-subtle block mb-5">
                Our Platform
              </span>
              <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-medium text-[#0A2540] leading-[1.08] tracking-[-0.02em]">
                Products built for Africa's critical infrastructure
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="text-[16px] lg:text-[17px] text-[#425466] leading-[1.6] max-w-[420px] lg:ml-auto">
                Cloud computing, data analytics, and enterprise intelligence —
                designed to meet the demands of the continent's fastest-growing
                institutions.
              </p>
            </div>
          </motion.div>

          {/* ── Product Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* ── Flagship: Bridgesoft Cloud ── */}
            <motion.div variants={cardVariant} className="md:col-span-12">
              <Link
                to="/products/cloud"
                ref={cloudCardRef}
                onMouseMove={handleMouseMove}
                className="noise-overlay group relative block w-full overflow-hidden rounded-[20px] bg-[#0A2540] transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(10,37,64,0.5)]"
              >
                {/* Cursor Spotlight */}
                <div
                  className="absolute inset-0 z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 74, 221, 0.07), transparent 40%)`,
                  }}
                />

                {/* Ambient Corner Glow */}
                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-accent/[0.08] rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-sky-500/[0.05] rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-2 lg:gap-16 lg:p-14">
                  <div className="flex flex-col">
                    <span className="mb-5 text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
                      Cloud Infrastructure
                    </span>
                    <h3 className="mb-4 text-[28px] lg:text-[36px] font-semibold tracking-[-0.02em] text-white leading-[1.1]">
                      Bridgesoft Cloud
                    </h3>
                    <p className="mb-8 max-w-[380px] text-[15px] lg:text-[16px] leading-[1.65] text-white/60">
                      Sovereign cloud hosting on our own data centres across
                      Africa. Your data stays local, compliant, and entirely
                      under your control — not routed through overseas
                      infrastructure.
                    </p>
                    <span className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-white uppercase tracking-[0.1em]">
                      Explore Cloud
                      <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                  <ServerPanel />
                </div>
              </Link>
            </motion.div>

            {/* ── Bridgesoft Data (8-col) ── */}
            <motion.div
              variants={cardVariant}
              className="md:col-span-8"
            >
              <Link
                to="/products/data"
                className="group relative block w-full h-full overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.06)] bg-white transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(10,37,64,0.1)] hover:border-transparent"
              >
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-6 p-8 lg:p-10">
                  <div className="flex flex-col">
                    <span className="mb-4 text-[11px] font-mono uppercase tracking-[0.2em] text-subtle">
                      Data & Analytics
                    </span>
                    <h3 className="mb-3 text-[24px] lg:text-[28px] font-semibold tracking-[-0.02em] text-[#0A2540] leading-[1.15]">
                      Bridgesoft Data
                    </h3>
                    <p className="mb-6 max-w-[340px] text-[15px] leading-[1.6] text-[#425466]">
                      Advanced analytics and reporting tools to visualize
                      trends, track performance, and turn raw data into
                      decisions that drive growth.
                    </p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0A2540] uppercase tracking-[0.08em]">
                      Explore Data
                      <RiArrowRightLine className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                  <DataChart />
                </div>
              </Link>
            </motion.div>

            {/* ── Bridge Intelligence (4-col companion) ── */}
            <motion.div
              variants={cardVariant}
              className="md:col-span-4"
            >
              <Link
                to="/bridge-intelligence"
                className="group relative flex flex-col justify-between w-full h-full overflow-hidden rounded-[20px] bg-[#F6F9FC] border border-[rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(10,37,64,0.08)] hover:border-transparent p-8 lg:p-9"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-white border border-[rgba(0,0,0,0.06)] shadow-sm flex items-center justify-center mb-8">
                  <RiBrainLine className="w-5 h-5 text-[#0A2540]" />
                </div>

                <div className="flex flex-col flex-1">
                  <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-accent mb-3">
                    AI-Powered
                  </span>
                  <h3 className="text-[22px] font-semibold text-[#0A2540] tracking-[-0.01em] mb-3 leading-[1.2]">
                    Bridge Intelligence
                  </h3>
                  <p className="text-[14px] text-[#425466] leading-[1.6] mb-6 flex-1">
                    Machine learning models trained on African market data —
                    fraud detection, risk scoring, and predictive analytics.
                  </p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0A2540] uppercase tracking-[0.08em]">
                    Learn more
                    <RiArrowRightLine className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* ── Coming Soon Row (3 × 4-col) ── */}
            {comingSoonProducts.map((product) => (
              <motion.div
                key={product.name}
                variants={cardVariant}
                className="md:col-span-4"
              >
                <div className="group relative w-full h-full overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.05)] bg-white p-7 lg:p-8 flex flex-col transition-all duration-500 hover:shadow-[0_16px_32px_-8px_rgba(10,37,64,0.08)] hover:-translate-y-1 opacity-90 hover:opacity-100">
                  {/* Subtle Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} pointer-events-none`}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-[#F6F9FC] border border-[rgba(0,0,0,0.04)] flex items-center justify-center mb-6">
                      <product.icon className="w-[18px] h-[18px] text-[#0A2540]/70" />
                    </div>

                    <h3 className="text-[17px] font-semibold text-[#0A2540] mb-2 tracking-tight">
                      Bridgesoft {product.name}
                    </h3>
                    <p className="text-[14px] text-[#425466] leading-[1.6] mb-5 flex-1">
                      {product.desc}
                    </p>

                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-subtle/60">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* ── Integration Strip ── */}
            <motion.div
              variants={cardVariant}
              className="md:col-span-12 mt-6 lg:mt-10"
            >
              <div className="text-center mb-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-subtle">
                  Works with the tools you already use
                </span>
              </div>
              <div className="relative overflow-hidden">
                {/* Fade Edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Marquee Track */}
                <div
                  className="flex gap-12 items-center whitespace-nowrap"
                  style={{
                    animation: "marquee-scroll 30s linear infinite",
                    width: "max-content",
                  }}
                >
                  {[...integrations, ...integrations].map((name, i) => (
                    <span
                      key={i}
                      className="text-[14px] font-medium text-[#0A2540]/20 tracking-wide select-none"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
