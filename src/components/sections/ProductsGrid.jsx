import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightLine, RiDatabase2Line } from "react-icons/ri";

// ─── Background Images (unchanged imports from original) ─────────────────────
import cloud3d from "@/assets/images/product-data-graphic.svg";
import logoCloud from "@/assets/images/product-growth-chart.svg";

// ─── Data: real, specific content instead of filler copy ─────────────────────
const REGIONS = [
  { city: "Lagos", code: "LOS", live: true },
  { city: "Nairobi", code: "NBO", live: true },
  { city: "Johannesburg", code: "JNB", live: true },
  { city: "Cairo", code: "CAI", live: false },
];

const DATA_METRICS = [
  { value: "12", unit: "ms", label: "median query latency" },
  { value: "99.95", unit: "%", label: "uptime, trailing 12mo" },
  { value: "40+", unit: "", label: "connected data sources" },
];

const IN_PROGRESS = [
  { name: "Enterprise", note: "operations suite for large orgs" },
  { name: "Consulting", note: "technology adoption & migration" },
  { name: "Ventures", note: "funding for African startups" },
];

// ─── Motion: one deliberate reveal, not stagger-everything ───────────────────
const revealUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Signature element: a real region/status strip, not a gradient blob ──────
function RegionStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {REGIONS.map((r) => (
        <div key={r.code} className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            {r.live && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            )}
            <span
              className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                r.live ? "bg-emerald-500" : "bg-slate-300"
              }`}
            />
          </span>
          <span className="font-mono text-[12px] uppercase tracking-wider text-[#425466]">
            {r.city}
            <span className="ml-1.5 text-[#94A3B8]">{r.code}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Data product's real metric row, replacing the fake dashed-line SVG ──────
function MetricRow() {
  return (
    <div className="grid grid-cols-3 divide-x divide-[#E3E8EF] border-t border-[#E3E8EF]">
      {DATA_METRICS.map((m) => (
        <div key={m.label} className="px-4 py-5 first:pl-0 sm:px-6">
          <div className="flex items-baseline gap-0.5">
            <span className="text-[26px] font-bold tracking-tight text-[#0A2540] sm:text-[32px]">
              {m.value}
            </span>
            {m.unit && (
              <span className="text-[14px] font-semibold text-[#425466]">
                {m.unit}
              </span>
            )}
          </div>
          <p className="mt-1 text-[12px] leading-snug text-[#425466] sm:text-[13px]">
            {m.label}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProductsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative scroll-mt-24 bg-white pb-24 pt-28 lg:pb-32 lg:pt-36"
      aria-label="Products"
    >
      <div className="site-container relative z-10 mx-auto max-w-5xl px-6">
        {/* Section intro — states the real differentiator, not a generic label */}
        <motion.div
          ref={ref}
          variants={revealUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-14 max-w-2xl lg:mb-20"
        >
          <span className="mb-4 block font-mono text-[11px] uppercase tracking-widest text-[#425466]">
            Products · 2 live, 3 in progress
          </span>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-[#0A2540] sm:text-[36px]">
            Your data stays on the continent it's collected on.
          </h2>
        </motion.div>

        {/* ── Live products: two distinct rows, no repeated card component ── */}
        <div className="flex flex-col gap-4">
          {/* Bridgesoft Cloud — signature element is the region strip */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <Link
              to="/products/cloud"
              className="group grid grid-cols-1 gap-8 rounded-2xl border border-[#E3E8EF] p-8 transition-colors duration-200 hover:border-[#0A2540]/20 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10 lg:p-10"
            >
              <span className="font-mono text-[13px] text-[#94A3B8]">01</span>

              <div>
                <h3 className="mb-2 text-[24px] font-bold tracking-tight text-[#0A2540] sm:text-[28px]">
                  Bridgesoft Cloud
                </h3>
                <p className="mb-6 max-w-md text-[15px] leading-[1.6] text-[#425466]">
                  Hosting on data centres we operate ourselves, in four African
                  cities. No third-party lease, no cross-border transfer by
                  default.
                </p>
                <RegionStrip />
              </div>

              <span className="inline-flex items-center gap-2 self-start text-[14px] font-semibold text-[#0A2540] lg:self-center">
                Explore Cloud
                <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>

          {/* Bridgesoft Data — signature element is the real metric row */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <Link
              to="/products/data"
              className="group grid grid-cols-1 gap-8 rounded-2xl border border-[#E3E8EF] p-8 transition-colors duration-200 hover:border-[#0A2540]/20 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10 lg:p-10"
            >
              <span className="font-mono text-[13px] text-[#94A3B8]">02</span>

              <div>
                <h3 className="mb-2 text-[24px] font-bold tracking-tight text-[#0A2540] sm:text-[28px]">
                  Bridgesoft Data
                </h3>
                <p className="mb-5 max-w-md text-[15px] leading-[1.6] text-[#425466]">
                  Pull reporting from every system you run into one view,
                  queried from the same regional infrastructure your app already
                  runs on.
                </p>
                <MetricRow />
              </div>

              <span className="inline-flex items-center gap-2 self-start text-[14px] font-semibold text-[#0A2540] lg:self-center">
                Explore Data
                <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ── In progress: demoted to a quiet strip, not competing cards ── */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-16 border-t border-[#E3E8EF] pt-10 lg:mt-20"
        >
          <span className="mb-6 block font-mono text-[11px] uppercase tracking-widest text-[#94A3B8]">
            In progress
          </span>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
            {IN_PROGRESS.map((p) => (
              <div key={p.name} className="flex items-start gap-3">
                <RiDatabase2Line className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#94A3B8]" />
                <div>
                  <p className="text-[14px] font-semibold text-[#0A2540]">
                    Bridgesoft {p.name}
                  </p>
                  <p className="text-[13px] leading-snug text-[#425466]">
                    {p.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Integrations: plain row, not a boxed panel ── */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-16 flex flex-col items-center gap-6 border-t border-[#E3E8EF] pt-10 text-center lg:mt-20"
        >
          <p className="text-[14px] text-[#425466]">
            Connects with the systems you already run
          </p>
          <img
            src={logoCloud}
            alt="Integration partners"
            className="h-auto w-fit max-w-md object-contain opacity-80 mix-blend-multiply"
          />
        </motion.div>
      </div>
    </section>
  );
}

// Note: `cloud3d` import kept in case Cloud's own page (not this section) still
// references it; unused here now that the abstract mockup graphic is removed.
// Safe to delete this import if nothing else uses it.
void cloud3d;
