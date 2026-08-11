import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  RiArrowRightLine,
  RiBankLine,
  RiBuilding4Line,
  RiCheckLine,
  RiGlobeLine,
  RiHospitalLine,
} from "react-icons/ri";

import cloudImg from "@/assets/images/bank.jpg";
import dataImg from "@/assets/images/doctor.jpg";
import entImg from "@/assets/images/bernd-dittrich-eCc7FjMoR74-unsplash.jpg";
import consImg from "@/assets/images/africa.jpg";

const impacts = [
  {
    id: "finance",
    client: "Bank of Industry",
    sector: "Banking & Finance",
    icon: RiBankLine,
    image: cloudImg,
    headline: "Migrated core banking to Bridgesoft Cloud with zero customer-facing downtime.",
    quote:
      "Our IT team used to spend most of their time keeping systems running. With Bridgesoft, they now spend that time building new products for our customers.",
    metric: "99.99%",
    metricLabel: "Uptime since migration",
    outcomes: [
      "Core banking moved to sovereign cloud in 14 weeks",
      "Full regulatory compliance across 3 African markets",
      "70% reduction in infrastructure incidents",
    ],
  },
  {
    id: "healthcare",
    client: "Lagos University Teaching Hospital",
    sector: "Healthcare",
    icon: RiHospitalLine,
    image: dataImg,
    headline: "Connected patient records across 12 facilities into a single view.",
    quote:
      "For the first time, our doctors can see a patient's full history regardless of which facility they visited. That changes outcomes.",
    metric: "12",
    metricLabel: "Facilities connected",
    outcomes: [
      "Shared patient records across the hospital network",
      "Real-time bed occupancy and resource dashboards",
      "Audit-ready access logs for every record",
    ],
  },
  {
    id: "logistics",
    client: "Kenya Port Authority",
    sector: "Supply Chain & Ports",
    icon: RiBuilding4Line,
    image: entImg,
    headline: "Reduced container dwell time by 30% with real-time port operations.",
    quote:
      "Bridgesoft gave us visibility into every berth, every container, and every handoff. Delays we used to discover after the fact, we now catch in real time.",
    metric: "30%",
    metricLabel: "Faster container throughput",
    outcomes: [
      "Real-time cargo tracking across 4 terminals",
      "Integrated with existing ERP and customs systems",
      "40% reduction in IT operating costs",
    ],
  },
  {
    id: "gov",
    client: "Federal Ministry of Finance",
    sector: "Public Sector",
    icon: RiGlobeLine,
    image: consImg,
    headline: "Digitised payroll processing for 200,000+ civil servants across 14 states.",
    quote:
      "The system handles salary calculations, deductions, and disbursements that used to take our team weeks. Now it runs in hours, with a full audit trail.",
    metric: "200K+",
    metricLabel: "Civil servants on the platform",
    outcomes: [
      "Payroll accuracy improved from 87% to 99.6%",
      "Sovereign hosting on Bridgesoft's Nigerian data centres",
      "Complete audit trail for every transaction",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function MetricBadge({ value, label }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[36px] font-semibold leading-none tracking-tight text-[#0A2540] sm:text-[44px]">
        {value}
      </span>
      <span className="text-[13px] font-medium leading-tight text-[#425466]">
        {label}
      </span>
    </div>
  );
}

export default function ImpactScroll() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const featured = impacts[0];
  const rest = impacts.slice(1);

  return (
    <section
      className="relative overflow-hidden bg-white py-24 font-sans lg:py-32"
      aria-label="Customer Impact"
    >
      <div className="site-container relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="mb-16 max-w-3xl lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0A2540] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-sm">
            Proven results
          </span>
          <h2 className="mt-6 text-[36px] font-semibold tracking-tight text-[#0A2540] sm:text-[48px] lg:text-[56px] leading-[1.08]">
            The institutions we work with measure us in outcomes, not promises.
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-[1.7] text-[#425466] sm:text-[19px]">
            Banks, hospitals, ports, and governments across Africa run
            their most important systems on Bridgesoft. Here is what that
            looks like in practice.
          </p>
        </motion.div>

        {/* ── Featured Case Study (Large) ── */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="group relative mb-8 overflow-hidden rounded-[1.5rem] border border-[#E6ECF5] bg-white shadow-[0_12px_40px_rgba(10,37,64,0.06)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(10,37,64,0.1)]"
        >
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            {/* Image */}
            <div className="relative h-[280px] overflow-hidden bg-[#F6F9FC] lg:h-auto lg:min-h-[420px]">
              <img
                src={featured.image}
                alt={`${featured.client} case study`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/20 via-transparent to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-5 left-5 z-10">
                <div className="rounded-full border border-white/40 bg-white/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A2540] backdrop-blur-sm shadow-sm">
                  Featured case study
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F9FC] text-[#0A2540]">
                    <featured.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8898AA]">
                      {featured.sector}
                    </p>
                    <h3 className="text-[18px] font-semibold text-[#0A2540]">
                      {featured.client}
                    </h3>
                  </div>
                </div>

                <h4 className="text-[22px] font-semibold leading-[1.3] tracking-tight text-[#0A2540] sm:text-[26px]">
                  {featured.headline}
                </h4>

                <p className="mt-4 text-[16px] leading-[1.7] text-[#425466]">
                  "{featured.quote}"
                </p>

                <ul className="mt-6 space-y-2.5">
                  {featured.outcomes.map((outcome, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[14px] text-[#0A2540]"
                    >
                      <RiCheckLine className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#E6ECF5] pt-6">
                <MetricBadge
                  value={featured.metric}
                  label={featured.metricLabel}
                />
                <Link
                  to="/contact"
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-[#0A2540] px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all hover:-translate-y-[1px] hover:bg-[#08223a]"
                >
                  See how banks use Bridgesoft
                  <RiArrowRightLine className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ── Supporting Case Studies (3 Cards) ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-3"
        >
          {rest.map((impact) => (
            <motion.article
              key={impact.id}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-[1.25rem] border border-[#E6ECF5] bg-white shadow-[0_8px_24px_rgba(10,37,64,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(10,37,64,0.08)]"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden bg-[#F6F9FC]">
                <img
                  src={impact.image}
                  alt={`${impact.client} case study`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#F6F9FC] text-[#0A2540]">
                    <impact.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8898AA]">
                      {impact.sector}
                    </p>
                    <h3 className="text-[15px] font-semibold text-[#0A2540]">
                      {impact.client}
                    </h3>
                  </div>
                </div>

                <h4 className="text-[17px] font-semibold leading-[1.35] tracking-tight text-[#0A2540]">
                  {impact.headline}
                </h4>

                <ul className="mt-4 space-y-2">
                  {impact.outcomes.slice(0, 2).map((outcome, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[13px] text-[#425466]"
                    >
                      <RiCheckLine className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />
                      {outcome}
                    </li>
                  ))}
                </ul>

                {/* Metric */}
                <div className="mt-auto flex items-center gap-3 border-t border-[#E6ECF5] pt-5 mt-6">
                  <span className="text-[28px] font-semibold leading-none tracking-tight text-[#0A2540]">
                    {impact.metric}
                  </span>
                  <span className="text-[12px] font-medium leading-tight text-[#8898AA]">
                    {impact.metricLabel}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/newsroom"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#0A2540] transition-colors hover:text-accent"
          >
            See how institutions use Bridgesoft
            <RiArrowRightLine className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
