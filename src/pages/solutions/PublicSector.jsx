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
} from "react-icons/ri";
import { getSolutionBySlug } from "@/data/solutions";
import { cn } from "@/lib/utils";
import TrustStrip from "@/components/solutions/TrustStrip";
import SolutionStatsSection from "@/components/solutions/SolutionStatsSection";
import SolutionHeroSection from "@/components/solutions/SolutionHeroSection";
import person3Illustration from "@/assets/images/person3.svg";

const data = getSolutionBySlug("public-sector");

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const featureIcons = {
  RiGovernmentLine,
  RiFileList3Line,
  RiTeamLine,
};

const whoWeHelp = [
  {
    title: "State and local government",
    description:
      "Modernize treasury operations and citizen services by digitizing permits, licenses, payroll, and revenue collection.",
    image:
      "https://plus.unsplash.com/premium_vector-1720765607922-62693a8d440c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Universities and education",
    description:
      "Expand digital options for tuition, campus services, records, and institutional giving.",
    image:
      "https://plus.unsplash.com/premium_vector-1720824711826-bdfbcc05cfe9?q=80&w=534&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Nonprofits and foundations",
    description:
      "Run programs, grants, and donor relationships on tools built for transparency and accountability.",
    image:
      "https://plus.unsplash.com/premium_vector-1682300668981-8a72e705d783?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Public-sector platforms",
    description:
      "Embed cloud, data, and workflow tools directly into the software agencies already use.",
    image:
      "https://plus.unsplash.com/premium_vector-1714618902715-40dec86c6f19?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

function PrimaryButton({ children, href = "/contact", className }) {
  return (
    <Link
      to={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#0A2540] px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#12365c]",
        className,
      )}
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ children, href = "/contact", className }) {
  return (
    <Link
      to={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[4px] border border-[#E6ECF5] bg-white px-5 py-2.5 text-[14px] font-medium text-[#0A2540] shadow-sm transition-colors hover:bg-[#F6F9FC]",
        className,
      )}
    >
      {children}
    </Link>
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

function CitizenPortalMock() {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[#E6ECF5] bg-white p-5 shadow-[0_18px_50px_rgba(10,37,64,0.12)]">
      <div className="mb-4 flex items-center justify-between border-b border-[#EEF2F7] pb-3">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8898AA]">
          Citizen services
        </span>
        <span className="rounded-full bg-[#E8F5EE] px-2 py-0.5 text-[10px] font-semibold text-[#1B7F4E]">
          Active
        </span>
      </div>
      <div className="rounded-[1rem] bg-gradient-to-br from-[#F4F7FF] via-white to-[#EEF4FF] p-5">
        <img
          src={person3Illustration}
          alt="Citizen services illustration"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg border border-[#EEF2F7] bg-[#FAFBFC] px-4 py-3">
        <span className="text-[13px] font-medium text-[#0A2540]">
          Faster digital access
        </span>
        <span className="text-[11px] text-[#635BFF]">Open</span>
      </div>
    </div>
  );
}

function CloudStatusMock() {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[#E6ECF5] bg-white p-5 shadow-[0_18px_50px_rgba(10,37,64,0.12)]">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8898AA]">
          Agency dashboard
        </span>
        <span className="text-[11px] text-[#1B7F4E]">Live view</span>
      </div>
      <div className="rounded-[1rem] bg-gradient-to-br from-[#F4F7FF] via-white to-[#EEF4FF] p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: RiCheckboxCircleLine,
              label: "Payroll services",
              detail: "99.99% available",
            },
            {
              icon: RiShieldCheckLine,
              label: "Citizen records",
              detail: "Protected and tracked",
            },
            {
              icon: RiBarChart2Line,
              label: "Permit processing",
              detail: "Status at a glance",
            },
            {
              icon: RiUserSettingsLine,
              label: "Agency teams",
              detail: "Clear permissions",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-[1rem] border border-white/80 bg-white/90 p-4 shadow-[0_10px_30px_rgba(10,37,64,0.06)]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#635BFF]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-[14px] font-semibold text-[#0A2540]">
                  {item.label}
                </p>
                <p className="mt-1 text-[12px] leading-snug text-[#425466]">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg border border-[#EEF2F7] bg-[#FAFBFC] px-4 py-3">
        <span className="text-[13px] font-medium text-[#0A2540]">
          Clear oversight
        </span>
        <span className="text-[11px] text-[#635BFF]">Updated</span>
      </div>
    </div>
  );
}

export default function PublicSectorSolution() {
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
      {/* ── 02. Trust strip ────────────────────────────────────────────── */}
      <TrustStrip
        headline={trustBar.headline}
        proofPoints={trustBar.proofPoints}
      />

      {/* ── 03. The opportunity (Premium Asymmetrical Layout) ────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Subtle background element to break the solid white */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#F6F9FC] to-transparent rounded-full blur-[100px] opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3" />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* --- LEFT SIDE: Sticky Narrative --- */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <SectionLabel>The opportunity</SectionLabel>
              <h2 className="mt-5 text-[36px] font-bold leading-[1.1] tracking-tight text-[#0A2540] sm:text-[44px]">
                Simplify digital services for your community.
              </h2>
              <p className="mt-6 text-[18px] leading-[1.65] text-[#425466]">
                {problem.body}
              </p>
            </motion.div>

            {/* --- RIGHT SIDE: Node List --- */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-12 lg:pt-16">
              {[
                {
                  title: "Offer fast, intuitive citizen services",
                  body: "Make it easy for people to apply for permits, pay fees, access benefits, and complete tasks online—on web and mobile.",
                  icon: RiCheckboxCircleLine,
                },
                {
                  title: "Improve oversight and reporting",
                  body: "Give finance, audit, and leadership teams clearer records—reducing manual work and making reviews easier to complete.",
                  icon: RiBarChart2Line,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: index * 0.15,
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                    className="relative pl-10 md:pl-12 group"
                  >
                    {/* Elegant Vertical Line */}
                    <div className="absolute left-[15px] top-10 bottom-[-48px] w-[1px] bg-gradient-to-b from-[#E6ECF5] to-transparent last:hidden" />

                    {/* Icon Node */}
                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#E6ECF5] text-[#635BFF] shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-4 w-4" />
                    </div>

                    <h3 className="text-[22px] font-bold tracking-tight text-[#0A2540]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.65] text-[#425466]">
                      {item.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Ensure the stats section flows cleanly from the white background above */}
      <SolutionStatsSection
        eyebrow="Why Bridgesoft"
        title="Simple systems for services people use every day"
        description="Help departments work together, serve citizens faster, and keep records easy to manage across every office and region."
        stats={stats}
      />
      {/* ── 05. Use cases (Stripe product showcase) ────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <SectionLabel>Use cases</SectionLabel>
            <h2 className="mt-4 text-[32px] font-semibold tracking-tight sm:text-[40px]">
              Solutions built for your mission
            </h2>
            <p className="mt-5 text-[17px] leading-[1.65] text-[#425466]">
              Whether you serve citizens, run national programs, or support
              agencies across regions, Bridgesoft helps you deliver services
              with less friction and more control.
            </p>
          </motion.div>

          <div className="space-y-24 lg:space-y-32">
            {/* Use case 1 */}
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#F6F9FC]" />
                <div className="relative lg:pr-8">
                  <CitizenPortalMock />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-[13px] font-semibold uppercase tracking-widest text-[#8898AA]">
                  Bridgesoft Enterprise
                </p>
                <h3 className="mt-3 text-[28px] font-semibold tracking-tight sm:text-[34px]">
                  {useCases[0].title}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.65] text-[#425466]">
                  {useCases[0].description}
                </p>
                <div className="mt-6">
                  <ExploreLink href="/products/enterprise">
                    Explore Enterprise
                  </ExploreLink>
                </div>
              </div>
            </div>

            {/* Use case 2 */}
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-widest text-[#8898AA]">
                  Bridgesoft Cloud
                </p>
                <h3 className="mt-3 text-[28px] font-semibold tracking-tight sm:text-[34px]">
                  {useCases[1].title}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.65] text-[#425466]">
                  {useCases[1].description}
                </p>
                <div className="mt-6">
                  <ExploreLink href="/products/cloud">
                    Explore Cloud
                  </ExploreLink>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-bl from-[#EEF2FF] to-[#F6F9FC]" />
                <div className="relative lg:pl-8">
                  <CloudStatusMock />
                </div>
                <img
                  src={useCases[1].image}
                  alt={useCases[1].title}
                  className="relative mt-6 aspect-[16/10] w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. How Bridgesoft helps (feature grid) ────────────────────── */}
      <section className="border-t border-[#E6ECF5] bg-[#F6F9FC] py-20 lg:py-28">
        <div className="site-container">
          <h2 className="text-center text-[28px] font-semibold tracking-tight sm:text-[36px]">
            {features.title}
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.items.map((feature) => {
              const Icon = featureIcons[feature.icon] ?? RiGovernmentLine;
              return (
                <div
                  key={feature.title}
                  className="rounded-lg border border-[#E6ECF5] bg-white p-8 shadow-[0_2px_8px_rgba(10,37,64,0.04)]"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[#F6F9FC] text-[#635BFF]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#0A2540]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 07. Testimonial ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <SectionLabel>Customer stories</SectionLabel>
            <h2 className="mt-4 text-[28px] font-semibold tracking-tight sm:text-[36px]">
              Trusted by public sector organizations
            </h2>
            <blockquote className="mt-10 text-[20px] font-medium leading-[1.55] text-[#0A2540] sm:text-[24px]">
              &ldquo;Bridgesoft didn&apos;t just give us software—they helped us
              roll out digital payroll and citizen services at a scale we
              couldn&apos;t have reached on our own. The platform held up under
              pressure from day one.&rdquo;
            </blockquote>
            <p className="mt-6 text-[14px] font-semibold text-[#0A2540]">
              Federal Ministry of Finance
            </p>
            <p className="text-[13px] text-[#8898AA]">
              Civil service digitization program
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 08. Who we help ────────────────────────────────────────────── */}
      <section className="border-t border-[#E6ECF5] bg-white py-20 lg:py-28">
        <div className="site-container">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel>Who we help</SectionLabel>
            <h2 className="mt-4 text-[28px] font-semibold tracking-tight sm:text-[36px]">
              Serving governments, institutions, and platforms
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {whoWeHelp.map((segment) => (
              <article
                key={segment.title}
                className="group overflow-hidden rounded-lg border border-[#E6ECF5] bg-white transition-shadow hover:shadow-[0_12px_40px_rgba(10,37,64,0.08)]"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-t-lg bg-[#F6F9FC] p-5">
                  <img
                    src={segment.image}
                    alt={segment.title}
                    className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[18px] font-semibold text-[#0A2540]">
                    {segment.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">
                    {segment.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09. Product spotlight ──────────────────────────────────────── */}
      <section className="pb-20 lg:pb-28">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-lg bg-[#0A2540]">
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
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&auto=format&fit=crop"
                  alt={spotlight.visualLabel}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-[#0A2540] lg:via-transparent lg:to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Final CTA (Stripe-style split) ───────────────────────── */}
      <section className="border-t border-[#E6ECF5] bg-[#F6F9FC] py-20 lg:py-24">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-[28px] font-semibold tracking-tight sm:text-[32px]">
                {cta.headline}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#425466]">
                Get a demo of Bridgesoft&apos;s public sector capabilities and
                explore solutions tailored to your organization.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryButton>{cta.primary.label}</PrimaryButton>
                <SecondaryButton>{cta.secondary.label}</SecondaryButton>
              </div>
            </div>
            <div className="rounded-lg border border-[#E6ECF5] bg-white p-8">
              <h3 className="text-[18px] font-semibold">
                Professional services
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">
                Work with Bridgesoft specialists to plan rollouts, migrations,
                and agency-wide adoption.
              </p>
              <ExploreLink href="/contact">Learn more</ExploreLink>
            </div>
            <div className="rounded-lg border border-[#E6ECF5] bg-white p-8">
              <h3 className="text-[18px] font-semibold">For IT teams</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">
                Explore products, security practices, and integration options
                for your existing government systems.
              </p>
              <ExploreLink href="/products">Explore products</ExploreLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
