import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiShieldKeyholeLine,
  RiTimeLine,
  RiHeartPulseLine,
  RiHospitalLine,
  RiFileList3Line,
} from "react-icons/ri";
import { getSolutionBySlug } from "@/data/solutions";
import { cn } from "@/lib/utils";
import TrustStrip from "@/components/solutions/TrustStrip";
import SolutionWhoWeHelpSection from "@/components/solutions/SolutionWhoWeHelpSection";

import doctorImage from "@/assets/images/doctor.jpg";
import healthGraphic from "@/assets/images/health.svg";
import heartGraphic from "@/assets/images/heart.svg";
import brainGraphic from "@/assets/images/brain.svg";
import aidGraphic from "@/assets/images/aid.svg";
import hiconGraphic from "@/assets/images/hicon.svg";

const data = getSolutionBySlug("healthcare");

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
        "text-[12px] font-bold uppercase tracking-[0.25em] text-[#0D9488]",
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
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#0D9488] px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-[#0D9488]/20 transition-all duration-200 hover:-translate-y-[2px] hover:bg-[#0B7A70]",
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
        "inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#0A2540] border-2 border-[#E6ECF5] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#0D9488] hover:text-[#0D9488]",
        className,
      )}
    >
      {children}
      <RiArrowRightLine className="h-5 w-5" />
    </Link>
  );
}

function InfoPill({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-[#F0FDF4] border border-[#10B981]/20 px-5 py-2.5 text-[14px] font-medium text-[#0A2540]">
      <Icon className="h-5 w-5 text-[#10B981]" />
      {children}
    </div>
  );
}

function AlternatingUseCase({ title, description, image, reverse }) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "flex flex-col gap-10 lg:items-center py-12",
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      <div className="flex-1 w-full">
        <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-[#E6ECF5]">
          <img
            src={image}
            alt={title}
            className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 to-transparent" />
        </div>
      </div>
      <div className="flex-1 lg:px-12">
        <h3 className="text-[28px] font-bold text-[#0A2540] mb-4 sm:text-[34px] leading-tight">
          {title}
        </h3>
        <p className="text-[17px] text-[#0A2540]/70 leading-[1.8]">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export default function HealthcareSolution() {
  const { hero, trustBar } = data;

  const features = [
    {
      icon: RiHeartPulseLine,
      title: "Shared patient records",
      body: "Maintain a unified medical history across hospitals and clinics. Doctors get the full context instantly.",
      asset: healthGraphic,
    },
    {
      icon: RiHospitalLine,
      title: "Clinical workflow automation",
      body: "Reduce admin burden on care teams. Automate handoffs, referrals, and lab result routing.",
      asset: doctorImage,
    },
    {
      icon: RiFileList3Line,
      title: "Population health dashboards",
      body: "Track disease patterns, monitor bed capacity, and optimize resource allocation across districts.",
      asset: brainGraphic,
    },
  ];

  const useCases = [
    {
      title: "Hospital networks",
      description:
        "Connect inpatient, outpatient, and emergency records so teams can see the full picture at every facility. Streamline admissions and drastically reduce duplicate testing.",
      image: doctorImage,
    },
    {
      title: "Public health authorities",
      description:
        "Track capacity, wait times, and service delivery across districts with less back and forth. Deploy targeted interventions using real-time epidemiological data.",
      image: "https://plus.unsplash.com/premium_vector-1682306895029-1c07dc2c0dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Clinics",
      description:
        "Share referrals, results, and care plans between sites without duplicate work or paperwork. Give rural and urban clinics the same enterprise-grade capabilities.",
      image: "https://plus.unsplash.com/premium_vector-1726062951813-9dc592ec3a79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvc3BpdGFsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Health tech platforms",
      description:
        "Embed the tools hospitals and partners already use into one cleaner workflow. Use our compliant APIs to build telemedicine or diagnostic apps faster.",
      image: "https://plus.unsplash.com/premium_vector-1682310608698-02d7ef747d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <main className="bg-white font-sans text-[#0A2540] selection:bg-[#0D9488]/20">
      <section className="relative overflow-hidden bg-[#F8FAFC] pt-24 lg:pt-32 pb-20">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-[100px]" />
          <div className="absolute top-40 -left-40 w-96 h-96 bg-[#10B981]/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="site-container relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <SectionLabel>Connected Healthcare</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[46px] font-bold leading-[1.1] tracking-tight text-[#0A2540] sm:text-[56px] lg:text-[64px]"
            >
              Patient records that follow the patient, not the paperwork.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-[18px] leading-[1.8] text-[#0A2540]/70 sm:text-[20px]"
            >
              End the frustration of fragmented EMRs and referral delays. Bring connected, real-time care to Africa's hospital networks with unified systems that put patients first.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <PrimaryButton href={hero.ctas?.[0]?.href ?? "/contact"}>
                Explore healthcare features
              </PrimaryButton>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              <InfoPill icon={RiShieldKeyholeLine}>HIPAA & POPIA compliant</InfoPill>
              <InfoPill icon={RiHospitalLine}>Connected across 120+ health networks</InfoPill>
              <InfoPill icon={RiTimeLine}>24/7 critical systems uptime</InfoPill>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="site-container relative z-10 mt-16"
        >
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E6ECF5] bg-white p-3 shadow-[0_30px_80px_rgba(13,148,136,0.15)]">
            <div className="rounded-[1.5rem] bg-[#F8FAFC] overflow-hidden border border-[#E6ECF5]">
              <img
                src={healthGraphic}
                alt="Healthcare dashboard"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <TrustStrip
        headline={trustBar.headline}
        proofPoints={trustBar.proofPoints}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-12 max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Care that connects</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[36px] font-bold tracking-tight text-[#0A2540] sm:text-[44px]"
            >
              Tools that empower your staff
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex overflow-x-auto gap-6 pb-12 snap-x hide-scrollbar"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="min-w-[340px] md:min-w-[420px] snap-center flex flex-col gap-6 p-8 rounded-[2rem] border border-[#E6ECF5] bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 border-b border-[#E6ECF5] pb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#0D9488]/10 text-[#0D9488] rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#0A2540] leading-tight">{feature.title}</h3>
                </div>
                <div>
                  <p className="text-[16px] leading-[1.7] text-[#0A2540]/70">{feature.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 lg:py-32 border-t border-[#E6ECF5]">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center mb-20"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Use Cases</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[36px] font-bold tracking-tight text-[#0A2540] sm:text-[44px]"
            >
              Built for the health ecosystem
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col gap-8 divide-y divide-[#E6ECF5]"
          >
            {useCases.map((item, index) => (
              <AlternatingUseCase key={item.title} {...item} reverse={index % 2 !== 0} />
            ))}
          </motion.div>
        </div>
      </section>

      <SolutionWhoWeHelpSection
        title="More about our ecosystem"
        items={useCases}
      />
    </main>
  );
}
