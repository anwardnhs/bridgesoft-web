import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  RiArrowRightLine,
  RiBankLine,
  RiBuilding4Line,
  RiGlobeLine,
  RiHospitalLine,
  RiSparkling2Line,
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
    headline:
      "Migrated core banking to our local cloud in 14 weeks, cutting downtime and improving reliability.",
    quote:
      "Bridgesoft helped us move our core banking systems to a local cloud environment that meets strict regulatory requirements. The migration was fast, smooth, and has improved uptime and performance.",
  },
  {
    id: "healthcare",
    client: "Kenya Medical Research Institute",
    sector: "Healthcare",
    icon: RiHospitalLine,
    image: dataImg,
    headline:
      "Connected 12 hospitals across Kenya to a single patient record system, improving care and reducing errors.",
    quote:
      "Bridgesoft's platform allowed us to connect multiple hospitals and clinics to a single patient record system. Doctors can now access patient histories in real time, reducing errors and improving care.",
  },
  {
    id: "logistics",
    client: "Nigerian Ports Authority",
    sector: "Supply Chain & Ports",
    icon: RiBuilding4Line,
    image: entImg,
    headline:
      "Enabled real-time cargo tracking across major ports, improving visibility and reducing delays.",
    quote:
      "Bridgesoft's platform allowed us to track cargo in real time across multiple ports. This has improved efficiency, reduced delays, and provided better visibility for our clients.",
  },
  {
    id: "gov",
    client: "Africa Finance Corporation",
    sector: "Public Sector",
    icon: RiGlobeLine,
    image: consImg,
    headline:
      "Helped teams manage operations across multiple countries with stronger transparency and accountability.",
    quote:
      "Bridgesoft's solutions have allowed us to manage our operations across multiple countries with greater transparency and accountability. The platform has improved our reporting and decision-making processes.",
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

function StoryBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
      {children}
    </span>
  );
}

function SupportingStory({ impact }) {
  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-[#E7EDF6] bg-white shadow-[0_18px_48px_rgba(6,18,37,0.08)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-[210px] overflow-hidden bg-[#0B1728]">
        <img
          src={impact.image}
          alt={`${impact.client} case study`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111f]/85 via-[#06111f]/25 to-transparent" />
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-md">
            <impact.icon className="h-5 w-5" />
          </span>
          <StoryBadge>{impact.sector}</StoryBadge>
        </div>
      </div>

      <div className="flex h-full flex-col p-6 sm:p-7">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7A8AA0]">
          {impact.client}
        </p>
        <h3 className="mt-3 text-[20px] font-semibold leading-[1.25] tracking-tight text-[#0A2540]">
          {impact.headline}
        </h3>
        <p className="mt-4 text-[15px] leading-[1.75] text-[#425466]">
          {impact.quote}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-[#E7EDF6] pt-5">
          <Link
            to="/newsroom"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0A2540] transition-colors hover:text-[#0B63CE]"
          >
            Read the story
            <RiArrowRightLine className="h-4 w-4" />
          </Link>
          <span className="text-[12px] font-medium text-[#7A8AA0]">
            Customer story
          </span>
        </div>
      </div>
    </article>
  );
}

export default function ImpactScroll() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const featured = impacts[0];
  const rest = impacts.slice(1);

  return (
    <section
      className="relative overflow-hidden bg-[#F7F9FC] py-24 font-sans lg:py-32"
      aria-label="Customer Impact"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(9,37,64,0.1),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(20,184,166,0.12),transparent_22%),linear-gradient(180deg,#06111f_0%,#06111f_38%,#f7f9fc_38%,#f7f9fc_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />

      <div className="site-container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="mb-12 max-w-4xl lg:mb-16"
        >
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
              Customer Impact
            </span>
            <span className="inline-flex items-center gap-2 text-[12px] font-medium text-white/60">
              <RiSparkling2Line className="h-4 w-4 text-teal-300" />
              Story-led transformation across banking, healthcare, logistics,
              and public services
            </span>
          </div>
          <h2 className="max-w-3xl text-[38px] font-semibold tracking-tight text-white sm:text-[52px] lg:text-[64px] leading-[1.02]">
            Stories of systems that finally feel fast, local, and reliable.
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-[#B7C3D6] sm:text-[18px]">
            We redesigned this section to feel more editorial and less
            spreadsheet-like. Each card now focuses on the work itself, the
            client it served, and the kind of change Bridgesoft delivered.
          </p>
        </motion.div>

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_100px_rgba(6,18,37,0.28)] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[320px] overflow-hidden">
              <img
                src={featured.image}
                alt={`${featured.client} case study`}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,17,31,0.06),rgba(6,17,31,0.82))]" />
              <div className="absolute left-6 top-6 z-10 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
                  Featured case study
                </span>
                <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-200 backdrop-blur-md">
                  Spotlight
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-lg">
                  <featured.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                    {featured.sector}
                  </p>
                  <h3 className="text-[18px] font-semibold text-white">
                    {featured.client}
                  </h3>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="max-w-xl text-[28px] font-semibold leading-[1.18] tracking-tight text-white sm:text-[34px]">
                  {featured.headline}
                </h4>
                <p className="mt-5 max-w-2xl text-[16px] leading-[1.75] text-[#D6DEEA]">
                  {featured.quote}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                      Focus
                    </p>
                    <p className="mt-2 text-[14px] font-medium text-white/90">
                      Cloud modernization
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                      Outcome
                    </p>
                    <p className="mt-2 text-[14px] font-medium text-white/90">
                      Better control and uptime
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                      Audience
                    </p>
                    <p className="mt-2 text-[14px] font-medium text-white/90">
                      Enterprise operations teams
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A2540] transition-transform hover:-translate-y-[1px]"
                >
                  Start a conversation
                  <RiArrowRightLine className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <span className="text-[13px] text-white/55">
                  Built for teams that need local infrastructure and cleaner
                  operations.
                </span>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-6 lg:grid-cols-3"
        >
          {rest.map((impact) => (
            <motion.div key={impact.id} variants={fadeUp}>
              <SupportingStory impact={impact} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Link
            to="/newsroom"
            className="group inline-flex items-center gap-2 rounded-full border border-[#D9E2EE] bg-white px-5 py-3 text-[14px] font-semibold text-[#0A2540] shadow-[0_8px_30px_rgba(6,18,37,0.08)] transition-transform hover:-translate-y-[1px]"
          >
            Explore more customer stories
            <RiArrowRightLine className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
