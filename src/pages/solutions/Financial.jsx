import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiShieldKeyholeLine,
  RiTimeLine,
  RiCheckboxCircleLine,
  RiBankLine,
  RiSmartphoneLine,
  RiFileList3Line,
  RiWallet3Line,
} from "react-icons/ri";
import { getSolutionBySlug } from "@/data/solutions";
import { cn } from "@/lib/utils";
import TrustStrip from "@/components/solutions/TrustStrip";
import SolutionWhoWeHelpSection from "@/components/solutions/SolutionWhoWeHelpSection";

import bankImage from "@/assets/images/bank2.jpg";
import dashboardGraphic from "@/assets/images/dashboard.svg";
import phoneOne from "@/assets/images/fiphone.svg";
import phoneTwo from "@/assets/images/fianacedb.svg";
import phoneThree from "@/assets/images/fiphone3.svg";
import featureOne from "@/assets/images/ficon.svg";
import featureTwo from "@/assets/images/person2.svg";
import featureThree from "@/assets/images/ficon3.svg";
import recordGraphic from "@/assets/images/record3.avif";
import cloudGraphic from "@/assets/images/bank4.avif";

const data = getSolutionBySlug("financial");

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

function SectionLabel({ children, className }) {
  return (
    <p
      className={cn(
        "text-[11px] font-bold uppercase tracking-[0.32em] text-[#C7973F]",
        className,
      )}
    >
      {children}
    </p>
  );
}

function PrimaryButton({ children, href = "/contact", className }) {
  return (
    <Link
      to={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#C7973F] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(199,151,63,0.25)] transition-all duration-200 hover:-translate-y-[2px] hover:bg-[#b08436]",
        className,
      )}
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ children, href = "/products", className }) {
  return (
    <Link
      to={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1B365D] border-2 border-[#1B365D]/10 transition-all duration-200 hover:-translate-y-[2px] hover:bg-[#F8FAFC]",
        className,
      )}
    >
      {children}
      <RiArrowRightLine className="h-4 w-4" />
    </Link>
  );
}

function InfoPill({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#C7973F]/30 bg-[#C7973F]/5 px-4 py-2 text-[13px] font-semibold text-[#1B365D]">
      <Icon className="h-4 w-4 text-[#C7973F]" />
      {children}
    </div>
  );
}

function UseCaseCard({ title, description, image, eyebrow }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group overflow-hidden rounded-[1.5rem] border border-[#E6ECF5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(27,54,93,0.08)]"
    >
      <div className="relative h-64 w-full bg-[#F8FAFC] p-6 flex items-center justify-center border-b border-[#E6ECF5]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <p className="text-[12px] font-bold uppercase tracking-widest text-[#C7973F]">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-[22px] font-semibold text-[#1B365D]">
          {title}
        </h3>
        <p className="mt-3 text-[16px] leading-[1.7] text-[#1B365D]/70">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

function AlternatingFeature({ icon: Icon, title, body, asset, reverse }) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "flex flex-col gap-10 lg:items-center py-16",
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      <div className="flex-1 w-full lg:px-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C7973F]/10 text-[#C7973F] mb-6">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-[28px] font-semibold text-[#1B365D] mb-4 sm:text-[32px]">{title}</h3>
        <p className="text-[17px] leading-[1.8] text-[#1B365D]/70">{body}</p>
      </div>
      <div className="flex-1 w-full">
        <div className="overflow-hidden rounded-[2rem] border border-[#E6ECF5] bg-white shadow-[0_20px_50px_rgba(27,54,93,0.08)] p-6">
          <img src={asset} alt="" className="w-full h-[320px] object-contain rounded-xl" />
        </div>
      </div>
    </motion.article>
  );
}

export default function FinancialSolution() {
  const { hero, trustBar } = data;

  const useCases = [
    {
      eyebrow: "Commercial banks",
      title: "Core infrastructure for modern banking.",
      description:
        "Manage wholesale and retail operations securely, while expanding your digital offerings without replacing legacy cores immediately.",
      image: bankImage,
    },
    {
      eyebrow: "Fintechs",
      title: "Scale operations seamlessly.",
      description:
        "Access enterprise-grade infrastructure built for agility. Launch new lending, wallet, or remittance products in weeks.",
      image: phoneOne,
    },
    {
      eyebrow: "Insurance",
      title: "Streamlined policy management.",
      description:
        "Connect underwriting, claims, and actuary data. Offer real-time quotes and automated payouts on a unified platform.",
      image: phoneTwo,
    },
    {
      eyebrow: "Payment processors",
      title: "High-volume, sub-second routing.",
      description:
        "Handle millions of transactions per second with built-in fraud prevention, smart routing, and robust ledgering.",
      image: phoneThree,
    },
  ];

  return (
    <main className="bg-[#FAFCFF] font-sans text-[#1B365D] selection:bg-[#C7973F]/20">
      <section className="relative overflow-hidden bg-white pt-24 lg:pt-32 border-b border-[#E6ECF5]">
        <div className="site-container relative z-10 pb-16 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="max-w-2xl"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <SectionLabel>Institutional Finance</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-[44px] font-semibold leading-[1.1] tracking-tight text-[#1B365D] sm:text-[54px] lg:text-[62px]"
              >
                Where Africa's financial institutions build their next chapter.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-[18px] leading-[1.7] text-[#1B365D]/80"
              >
                Navigate regulatory pressures like KYC, AML, and Basel III with ease. Deliver real-time payment processing and consolidate multi-entity reporting across all your subsidiaries.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-4"
              >
                <PrimaryButton href={hero.ctas?.[0]?.href ?? "/contact"}>
                  See how banks use Bridgesoft
                </PrimaryButton>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-wrap gap-3"
              >
                <InfoPill icon={RiShieldKeyholeLine}>99.99% uptime SLA</InfoPill>
                <InfoPill icon={RiBankLine}>Data stays in-country</InfoPill>
                <InfoPill icon={RiFileList3Line}>Audit-ready from day one</InfoPill>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-[620px]"
            >
              <div className="rounded-[2rem] border border-[#1B365D]/10 bg-[#1B365D] shadow-[0_30px_100px_rgba(27,54,93,0.25)] p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#244574] via-[#1B365D] to-[#12243e] opacity-80" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#C7973F]" />
                      <span className="h-3 w-3 rounded-full bg-white/20" />
                      <span className="h-3 w-3 rounded-full bg-white/20" />
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/70">
                      Live Dashboard
                    </div>
                  </div>
                  
                  <div className="grid gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[12px] font-medium text-white/50">Total Processed (NGN)</p>
                          <p className="text-[28px] font-semibold text-white mt-1">₦ 452.8B</p>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-[#C7973F]/20 flex items-center justify-center">
                          <RiWallet3Line className="h-6 w-6 text-[#C7973F]" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                        <RiShieldKeyholeLine className="h-6 w-6 text-[#C7973F] mb-3" />
                        <p className="text-[12px] font-medium text-white/50">AML Screenings</p>
                        <p className="text-[18px] font-medium text-white mt-1">100% Cleared</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                        <RiTimeLine className="h-6 w-6 text-[#C7973F] mb-3" />
                        <p className="text-[12px] font-medium text-white/50">Avg Latency</p>
                        <p className="text-[18px] font-medium text-white mt-1">42ms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-10 -left-6 hidden w-48 rounded-[1.5rem] border border-[#E6ECF5] bg-white p-4 shadow-[0_20px_60px_rgba(27,54,93,0.15)] lg:block"
              >
                <img
                  src={featureOne}
                  alt=""
                  className="h-24 w-full object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustStrip
        headline={trustBar.headline}
        proofPoints={trustBar.proofPoints}
      />

      <section className="bg-[#FAFCFF] py-24 lg:py-32">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>From compliance to core banking</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[34px] font-semibold tracking-tight text-[#1B365D] sm:text-[44px]"
            >
              Enterprise architecture for regulated markets
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-[17px] leading-[1.8] text-[#1B365D]/70"
            >
              Rely on a robust foundation designed specifically to meet the stringent demands of Africa's financial watchdogs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-16 flex flex-col divide-y divide-[#E6ECF5]"
          >
            <AlternatingFeature
              icon={RiFileList3Line}
              title="Regulatory reporting"
              body="Automate Basel III, IFRS 9, and CBN returns. Say goodbye to manual spreadsheet consolidation and ensure you are always audit-ready with perfectly reconciled data."
              asset={recordGraphic}
              reverse={false}
            />
            <AlternatingFeature
              icon={RiTimeLine}
              title="Real-time payments"
              body="Achieve sub-second transaction processing. Bridge legacy cores to instant payment rails securely, providing your customers with the speed they demand."
              asset={dashboardGraphic}
              reverse={true}
            />
            <AlternatingFeature
              icon={RiBankLine}
              title="Multi-entity consolidation"
              body="Streamline group reporting across all subsidiaries. Get a single pane of glass for real-time liquidity management, forex exposure, and capital adequacy."
              asset={cloudGraphic}
              reverse={false}
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32 border-t border-[#E6ECF5]">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-16 max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Use Cases</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[34px] font-semibold tracking-tight text-[#1B365D] sm:text-[42px]"
            >
              Powering the ecosystem
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-2"
          >
            {useCases.map((item) => (
              <UseCaseCard key={item.title} {...item} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
