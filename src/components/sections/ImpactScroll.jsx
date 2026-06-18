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
    quote:
      "Before Bridgesoft, our IT team was firefighting 24/7 just to keep our core banking system running. Now, we have a stable, secure cloud infrastructure that actually lets us innovate.",
    metric: "99.999%",
    metricLabel: "Guaranteed uptime",
    outcomes: [
      "Zero-downtime migration",
      "Full compliance with regional data laws",
    ],
  },
  {
    id: "healthcare",
    client: "Lagos State Health Services",
    sector: "Public Health",
    icon: RiHospitalLine,
    image: dataImg,
    quote:
      "Our partnership with Bridgesoft has been transformative. For the first time, we have a unified view of patient data across all our hospitals, enabling real-time decision-making that has directly improved patient outcomes.",
    metric: "50TB+",
    metricLabel: "Processed daily",
    outcomes: [
      "Real-time health data analytics",
      "Unified dashboard for hospital administrators",
    ],
  },
  {
    id: "logistics",
    client: "Kenya Port Authority",
    sector: "Supply Chain",
    icon: RiBuilding4Line,
    image: entImg,
    quote:
      "Bridgesoft didn't just help us move to the cloud; they reimagined our entire operational model. The efficiency gains have been staggering, and we're now on track to expand our services across East Africa much faster than we ever thought possible.",
    metric: "40%",
    metricLabel: "Lower IT costs",
    outcomes: [
      "Hybrid cloud architecture for critical port operations",
      "Seamless integration with legacy ERPs",
    ],
  },
  {
    id: "tech",
    client: "African Technology Venture",
    sector: "Technology Ventures",
    icon: RiGlobeLine,
    image: consImg,
    quote:
      "Bridgesoft's strategic consulting was a game-changer for our expansion plans. They helped us design an infrastructure that can scale globally while navigating the complex regulatory landscape across different African markets.",
    metric: "14",
    metricLabel: "New markets reached",
    outcomes: [
      "Global infrastructure design and implementation",
      "Strategic advisory for digital expansion",
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

export default function ImpactScroll() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden border-t border-rule bg-[#FAFAFA] py-20 font-sans lg:py-28"
      aria-label="Customer Impact"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Abstract soft background"
          className="h-full w-full object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-[#FAFAFA]" />
      </div>

      <div className="site-container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          <span className="inline-flex items-center rounded-none px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A2540]">
            Real world results
          </span>
          <h2 className="mt-6 text-[36px] font-medium tracking-tight text-[#0A2540] sm:text-[48px] lg:text-[58px]">
            Real results for the organizations we work with.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.7] text-[#425466] sm:text-[18px]">
            From banks to hospitals to ports, Bridgesoft helps teams work more
            smoothly, solve problems faster, and stay focused on what matters
            most.
          </p>
          <Link
            to="/newsroom"
            className="group mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0A2540] transition-colors hover:text-accent"
          >
            Read all impact stories
            <RiArrowRightLine className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {impacts.map((impact, index) => (
            <motion.article
              key={impact.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05 }}
              // Added flex and flex-col here to stack children vertically
              className="group relative flex flex-col overflow-hidden rounded-none border border-rule bg-white shadow-[0_8px_24px_rgba(10,37,64,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(10,37,64,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 z-10" />

              {/* === TOP: Image Section === */}
              {/* Replaced xl: grid classes with standardized height and a bottom border */}
              <div className="relative w-full shrink-0 h-[240px] sm:h-[280px] overflow-hidden bg-[#EEF4FF] border-b border-rule">
                <img
                  src={impact.image}
                  alt={`${impact.client} impact`}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/14 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="rounded-none border border-white/60 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A2540] backdrop-blur-sm">
                    Case study
                  </div>
                </div>
              </div>

              {/* === BOTTOM: Text Section === */}
              {/* Added flex-1 to push the bottom evenly if text lengths differ */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 xl:p-10">
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F6F9FC] text-[#0A2540] ring-1 ring-inset ring-[#E6ECF5]">
                      <impact.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-subtle">
                        {impact.sector}
                      </div>
                      <h3 className="mt-1 text-[20px] font-semibold tracking-tight text-[#0A2540] sm:text-[22px]">
                        {impact.client}
                      </h3>
                    </div>
                  </div>

                  <p className="max-w-xl text-[16px] leading-[1.65] text-[#425466]">
                    {impact.quote}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
