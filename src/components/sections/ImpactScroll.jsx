import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  RiArrowRightLine,
  RiBankLine,
  RiBuilding4Line,
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
    headline: "Moved core banking to Bridgesoft Cloud without any downtime for customers.",
    quote:
      "Our IT team used to spend most of their time keeping systems running. With Bridgesoft, they now spend that time building new products for our customers.",
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
  },
  {
    id: "logistics",
    client: "Kenya Port Authority",
    sector: "Supply Chain & Ports",
    icon: RiBuilding4Line,
    image: entImg,
    headline: "Moved containers 30% faster with real-time port tracking.",
    quote:
      "Bridgesoft gave us visibility into every berth, every container, and every handoff. Delays we used to discover after the fact, we now catch in real time.",
  },
  {
    id: "gov",
    client: "Federal Ministry of Finance",
    sector: "Public Sector",
    icon: RiGlobeLine,
    image: consImg,
    headline: "Moved payroll online for 200,000+ civil servants across 14 states.",
    quote:
      "The system handles salary calculations, deductions, and disbursements that used to take our team weeks. Now it runs in hours, with a full audit trail.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function ImpactScroll() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden bg-[#FAFAFA] py-24 font-sans lg:py-32"
      aria-label="Customer Impact"
    >
      <div className="site-container relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="mb-16 flex flex-col items-center text-center max-w-3xl mx-auto lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A2540] shadow-sm">
            Proven results
          </span>
          <h2 className="mt-6 text-[36px] font-medium tracking-tight text-[#0A2540] sm:text-[48px] lg:text-[56px] leading-[1.1]">
            The technology Africa's institutions rely on.
          </h2>
          <p className="mt-6 text-[17px] leading-[1.7] text-[#425466] sm:text-[19px]">
            Banks, hospitals, ports, and governments across Africa run
            their most important systems on Bridgesoft. Here is what that
            looks like in practice.
          </p>
        </motion.div>

        {/* ── 2x2 Grid of Customer Stories ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid gap-8 md:grid-cols-2"
        >
          {impacts.map((impact) => (
            <motion.article
              key={impact.id}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-[260px] sm:h-[320px] w-full overflow-hidden">
                <img
                  src={impact.image}
                  alt={impact.client}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                
                {/* Floating Tag over Image */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-[#0A2540] shadow-sm">
                  <impact.icon className="h-4 w-4" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em]">
                    {impact.sector}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#8898AA] mb-4">
                  {impact.client}
                </p>
                <h3 className="text-[22px] sm:text-[26px] font-semibold leading-[1.3] tracking-tight text-[#0A2540] mb-6">
                  {impact.headline}
                </h3>
                <p className="text-[16px] leading-[1.7] text-[#425466] italic mb-8">
                  "{impact.quote}"
                </p>
                
                <div className="mt-auto">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-[#0A2540]"
                  >
                    Read case study
                    <RiArrowRightLine className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
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
          className="mt-16 flex justify-center"
        >
          <Link
            to="/newsroom"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0A2540] px-8 py-4 text-[14px] font-bold uppercase tracking-widest text-white shadow-[0_8px_20px_rgb(10,37,64,0.15)] transition-all duration-300 hover:bg-accent hover:shadow-[0_12px_24px_rgb(10,37,64,0.25)] hover:-translate-y-1"
          >
            View all stories
            <RiArrowRightLine className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
