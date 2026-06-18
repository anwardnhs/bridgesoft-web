import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import { getSolutionBySlug } from "@/data/solutions";
import { cn } from "@/lib/utils";
import TrustStrip from "@/components/solutions/TrustStrip";
import SolutionStatsSection from "@/components/solutions/SolutionStatsSection";
import SolutionHeroSection from "@/components/solutions/SolutionHeroSection";
import SolutionOpportunitySection from "@/components/solutions/SolutionOpportunitySection";
import SolutionWhoWeHelpSection from "@/components/solutions/SolutionWhoWeHelpSection";

import iconHicon from "@/assets/images/hicon.svg";
import iconAid from "@/assets/images/aid.svg";
import iconBrain from "@/assets/images/brain.svg";

const data = getSolutionBySlug("healthcare");

const featureIcons = [iconHicon, iconAid, iconBrain];

const whoWeHelp = [
  {
    title: "Hospital networks",
    description:
      "Connect inpatient, outpatient, and emergency records so clinicians see the full patient picture at every facility.",
    image:
      "https://plus.unsplash.com/premium_vector-1708168961443-3c88498cc413?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Public health authorities",
    description:
      "Give regional leaders live visibility into capacity, wait times, and program performance across districts.",
    image:
      "https://plus.unsplash.com/premium_vector-1682270091935-677cd4ff2f4e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Clinics and outpatient care",
    description:
      "Share lab results, referrals, and care plans between primary care sites without duplicate tests or paperwork.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=547&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Health tech platforms",
    description:
      "Embed data, integration, and analytics into the software hospitals and partners already rely on every day.",
    image:
      "https://plus.unsplash.com/premium_vector-1720649830326-aec72b8a447b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZSUyMHRlY2h8ZW58MHx8MHx8fDA%3D",
  },
];

function SectionLabel({ children, className }) {
  return (
    <p
      className={cn(
        "text-[13px] font-semibold uppercase tracking-[0.14em] text-[#635BFF]",
        className,
      )}
    >
      {children}
    </p>
  );
}

function ExploreLink({ children, href }) {
  return (
    <Link
      to={href}
      className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-[#635BFF] transition-colors hover:text-[#0A2540]"
    >
      {children}
      <RiArrowRightLine className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

function FeatureGrid({ items }) {
  return (
    <section className="border-t border-[#E6ECF5] bg-[#F6F9FC] py-20 lg:py-28">
      <div className="site-container">
        <h2 className="text-center text-[28px] font-semibold tracking-tight sm:text-[36px]">
          How Bridgesoft helps
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((feature, index) => (
            <div
              key={feature.title}
              className="rounded-[1.25rem] border border-[#E6ECF5] bg-white p-8 shadow-[0_2px_8px_rgba(10,37,64,0.04)]"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[#F6F9FC]">
                <img src={featureIcons[index]} alt="" className="h-7 w-7 object-contain" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#0A2540]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection({ items }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel>Use cases</SectionLabel>
            <h2 className="mt-4 text-[32px] font-semibold tracking-tight text-[#0A2540] sm:text-[40px]">
              Health systems that feel connected
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-[#425466]">
              Make records easier to find, make decisions easier to trust, and
              make the day smoother for staff and patients.
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-[#E6ECF5] bg-[#F6F9FC] p-4">
              <img
                src={items[0]?.image}
                alt={items[0]?.title}
                className="aspect-[16/11] w-full rounded-[1rem] object-cover shadow-[0_10px_35px_rgba(10,37,64,0.08)]"
              />
            </div>
          </div>

          <div className="space-y-6">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="group grid gap-5 rounded-[1.75rem] border border-[#E6ECF5] bg-white p-5 shadow-[0_18px_50px_rgba(10,37,64,0.06)] sm:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="overflow-hidden rounded-[1.25rem] bg-[#F6F9FC] p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-col justify-center py-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8898AA]">
                    {index === 0 ? "Bridgesoft Data" : "Bridgesoft Cloud"}
                  </p>
                  <h3 className="mt-2 text-[24px] font-semibold tracking-tight text-[#0A2540]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#425466]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HealthcareSolution() {
  const { hero, trustBar, problem, features, spotlight, useCases, stats, cta } =
    data;

  return (
    <main className="bg-white font-sans text-[#0A2540] selection:bg-[#635BFF]/15">
      <SolutionHeroSection
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subtext={hero.subtext}
        heroImage={hero.heroImage}
        heroImageAlt={hero.eyebrow}
        primaryCta={hero.ctas?.[0]}
        secondaryCta={hero.ctas?.[1]}
      />

      <TrustStrip
        headline={trustBar.headline}
        proofPoints={trustBar.proofPoints}
      />

      <SolutionOpportunitySection
        title={problem.statement}
        description={problem.body}
        items={[
          {
            title: "Give care teams one view of every patient",
            body: "Connect clinical, lab, and admin records so doctors see history, allergies, and results wherever the patient is treated.",
          },
          {
            title: "Meet privacy rules without slowing care",
            body: "Control access, encrypt sensitive data, and keep audit logs that support health privacy requirements built into daily workflows.",
          },
        ]}
      />

      <SolutionStatsSection
        eyebrow="Why Bridgesoft"
        title="Connected tools for hospitals and care teams"
        description="Give staff a clearer view of patients and operations without adding extra complexity to daily work."
        stats={stats}
      />

      <UseCasesSection items={useCases} />

      <FeatureGrid items={features.items} />

      <SolutionWhoWeHelpSection
        title="Serving hospitals, authorities, clinics, and platforms"
        items={whoWeHelp}
      />

      <section className="pb-20 lg:pb-28">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0A2540]">
            <div className="pointer-events-none absolute inset-0">
              <img
                src={spotlight.backgroundImage}
                alt=""
                className="h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/90 to-[#0A2540]/70" />
            </div>
            <div className="relative grid lg:grid-cols-2">
              <div className="flex flex-col justify-center p-10 lg:p-14">
                <p className="text-[12px] font-semibold uppercase tracking-widest text-[#A5B4FC]">
                  {spotlight.eyebrow}
                </p>
                <h3 className="mt-4 text-[28px] font-semibold leading-tight text-white sm:text-[36px]">
                  {spotlight.title}
                </h3>
                <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/75">
                  {spotlight.description}
                </p>
                <div className="mt-8">
                  <Link
                    to={spotlight.cta.href}
                    className="inline-flex items-center gap-2 rounded-[4px] bg-white px-5 py-2.5 text-[14px] font-medium text-[#0A2540] transition-colors hover:bg-[#F6F9FC]"
                  >
                    {spotlight.cta.label}
                    <RiArrowRightLine className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[240px] lg:min-h-[360px]">
                <img
                  src={spotlight.backgroundImage}
                  alt={spotlight.visualLabel}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-[#0A2540] lg:via-transparent lg:to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E6ECF5] bg-[#F6F9FC] py-20 lg:py-24">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-[28px] font-semibold tracking-tight sm:text-[32px]">
                {cta.headline}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#425466]">
                Get a demo of Bridgesoft&apos;s healthcare platform and explore
                solutions tailored to your organization.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to={cta.primary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#0A2540] px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#12365c]"
                >
                  {cta.primary.label}
                </Link>
                <Link
                  to={cta.secondary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-[#E6ECF5] bg-white px-5 py-2.5 text-[14px] font-medium text-[#0A2540] shadow-sm transition-colors hover:bg-[#F6F9FC]"
                >
                  {cta.secondary.label}
                </Link>
              </div>
            </div>
            <div className="rounded-[1.25rem] border border-[#E6ECF5] bg-white p-8">
              <h3 className="text-[18px] font-semibold">Professional services</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">
                Work with Bridgesoft specialists to plan rollouts, privacy
                reviews, and hospital-wide adoption.
              </p>
              <ExploreLink href="/contact">Learn more</ExploreLink>
            </div>
            <div className="rounded-[1.25rem] border border-[#E6ECF5] bg-white p-8">
              <h3 className="text-[18px] font-semibold">For IT teams</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">
                Explore products, security practices, and integration options
                for your existing health systems.
              </p>
              <ExploreLink href="/products">Explore products</ExploreLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
