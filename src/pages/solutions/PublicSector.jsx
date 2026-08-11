import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiGovernmentLine,
  RiFileList3Line,
  RiTeamLine,
  RiCheckboxCircleLine,
  RiShieldCheckLine,
  RiBarChart2Line,
  RiUserSettingsLine,
  RiTimeLine,
  RiMapPinLine,
  RiGlobalLine,
} from "react-icons/ri";
import { getSolutionBySlug } from "@/data/solutions";
import { cn } from "@/lib/utils";
import TrustStrip from "@/components/solutions/TrustStrip";
import SolutionWhoWeHelpSection from "@/components/solutions/SolutionWhoWeHelpSection";

import person3Illustration from "@/assets/images/person3.svg";
import person2Illustration from "@/assets/images/person2.svg";
import dashboardGraphic from "@/assets/images/dashboard.svg";
import cloudGraphic from "@/assets/images/cloud.svg";
import deskGraphic from "@/assets/images/bank4.avif";
import mapGraphic from "@/assets/images/lag.jpg";

const data = getSolutionBySlug("public-sector");

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const whoWeHelp = [
  {
    title: "State & local government",
    description: "Make public-facing services easier to reach, understand, and complete.",
    image: "https://plus.unsplash.com/premium_vector-1722003185674-dd50f8ff460b?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Universities",
    description: "Keep student records, applications, and programs organized across departments.",
    image: "https://plus.unsplash.com/premium_vector-1682305954108-23bc99bbddd1?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Nonprofits",
    description: "Run grants, programs, and donor relationships with clearer reporting.",
    image: "https://plus.unsplash.com/premium_vector-1682300668981-8a72e705d783?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Public-sector platforms",
    description: "Help governments and institutions run public-facing platforms with less friction.",
    image: "https://plus.unsplash.com/premium_vector-1731488506688-9f4300f9e055?w=500&auto=format&fit=crop&q=60",
  },
];

function PrimaryButton({ children, href = "/contact", className }) {
  return (
    <Link
      to={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#312E81] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-[#3730A3] hover:shadow-xl",
        className,
      )}
    >
      {children}
    </Link>
  );
}

function InfoPill({ value, label }) {
  return (
    <div className="flex flex-col border-l-2 border-[#6366F1] pl-4">
      <span className="text-2xl font-bold text-[#312E81]">{value}</span>
      <span className="text-sm font-medium text-[#4F46E5]">{label}</span>
    </div>
  );
}

export default function PublicSectorSolution() {
  const { hero, trustBar } = data;

  const features = [
    {
      icon: RiShieldCheckLine,
      title: "National identity systems",
      body: "Deploy secure citizen identification and authentication at scale. Built on sovereign data infrastructure to ensure compliance with strict local data residency mandates.",
    },
    {
      icon: RiFileList3Line,
      title: "Government payroll and treasury",
      body: "Process public sector salaries and treasury disbursements accurately and on time. Maintain auditable records that meet strict government procurement and accounting standards.",
    },
    {
      icon: RiGovernmentLine,
      title: "Citizen service portals",
      body: "Digitize public touchpoints. Provide citizens with intuitive online portals for permits, licenses, and registrations that they can actually complete without visiting an office.",
    },
  ];

  return (
    <main className="bg-[#F8FAFC] font-sans text-[#1E293B] selection:bg-[#6366F1]/20">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF2FF] to-white pt-24 lg:pt-32">
        <div className="site-container relative z-10 pb-20 text-center lg:pb-28">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mx-auto max-w-4xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 text-[12px] font-bold uppercase tracking-[0.2em] text-[#6366F1]"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-[42px] font-extrabold leading-[1.1] tracking-tight text-[#312E81] sm:text-[56px] lg:text-[72px]"
            >
              Sovereign infrastructure for the institutions that define a nation.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-8 max-w-3xl text-[18px] leading-[1.8] text-[#475569] sm:text-[20px]"
            >
              Government IT faces unique challenges: legacy system migration, data sovereignty mandates, citizen service digitisation, and complex procurement requirements. Bridgesoft provides the secure, locally-hosted foundation.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center justify-center gap-4"
            >
              <PrimaryButton href={hero.ctas?.[0]?.href ?? "/contact"}>
                Read the government deployment guide
              </PrimaryButton>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-8 border-t border-[#E0E7FF] pt-8 sm:justify-between sm:gap-4"
            >
              <InfoPill value="14" label="African markets" />
              <InfoPill value="160M+" label="Citizens managed" />
              <InfoPill value="20+" label="Years gov experience" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="bg-white">
        <TrustStrip
          headline={trustBar.headline}
          proofPoints={trustBar.proofPoints}
        />
      </div>

      <section className="bg-white py-20 lg:py-32">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[36px] font-extrabold tracking-tight text-[#312E81] sm:text-[48px]">
              From national ID to citizen services
            </h2>
            <p className="mt-6 text-[18px] leading-[1.8] text-[#475569]">
              Modernize the critical workflows that keep society running, backed by local Tier-III data centers ensuring full data sovereignty.
            </p>
          </div>

          <div className="mx-auto mt-20 max-w-5xl space-y-12">
            {features.map((feature, idx) => (
              <div key={feature.title} className="group relative flex flex-col gap-6 rounded-3xl bg-[#F8FAFC] p-8 transition-shadow hover:shadow-xl sm:flex-row sm:items-center sm:p-10">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2FF] text-[#4F46E5]">
                  <span className="text-3xl font-black opacity-30">0{idx + 1}</span>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <feature.icon className="h-6 w-6 text-[#6366F1]" />
                    <h3 className="text-2xl font-bold text-[#312E81]">{feature.title}</h3>
                  </div>
                  <p className="text-[17px] leading-relaxed text-[#475569]">{feature.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionWhoWeHelpSection
        title="Serving state, local, and national institutions"
        items={whoWeHelp}
      />
    </main>
  );
}
