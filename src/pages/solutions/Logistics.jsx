import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiShipLine,
  RiLinksLine,
  RiLineChartLine,
  RiTruckLine,
  RiMapPinLine,
  RiTimeLine,
  RiCheckboxCircleLine,
  RiGlobalLine,
  RiShieldCheckLine,
} from "react-icons/ri";
import { getSolutionBySlug } from "@/data/solutions";
import { cn } from "@/lib/utils";
import TrustStrip from "@/components/solutions/TrustStrip";
import SolutionWhoWeHelpSection from "@/components/solutions/SolutionWhoWeHelpSection";

import portGraphic from "@/assets/images/ports.avif";
import fleetGraphic from "@/assets/images/fleet.avif";
import warehouseGraphic from "@/assets/images/warehouse.svg";
import cargoGraphic from "@/assets/images/cargo.svg";
import dashboardGraphic from "@/assets/images/track.avif";
import integrationGraphic from "@/assets/images/cariiers.avif";
import deskGraphic from "@/assets/images/desk.svg";

const data = getSolutionBySlug("logistics");

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
    title: "Ports & terminals",
    description:
      "Make berth planning, cargo handling, and handoffs easier to manage across busy terminals.",
    image:
      "https://plus.unsplash.com/premium_vector-1722588427618-85e923eb7d97?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Warehouses",
    description:
      "Keep stock, pick lists, and orders aligned across every site and distribution center.",
    image:
      "https://images.unsplash.com/vector-1762541812800-251916c76034?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Carriers & freight",
    description:
      "Plan routes, track fleets, and share updates with partners from port gate to final mile.",
    image:
      "https://plus.unsplash.com/premium_vector-1682308476591-cf4a9bb73d15?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Logistics platforms",
    description:
      "Bring carriers, warehouses, and ports into one cleaner flow of work for your customers.",
    image:
      "https://plus.unsplash.com/premium_vector-1682308479640-19f534c5ff66?w=500&auto=format&fit=crop&q=60",
  },
];

function PrimaryButton({ children, href = "/contact", className }) {
  return (
    <Link
      to={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#D97706] px-6 py-3 text-sm font-medium text-[#1C1917] shadow-lg transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#F59E0B]",
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
        "inline-flex items-center justify-center gap-2 rounded-full bg-transparent px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/10",
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
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium text-white/90 backdrop-blur-sm">
      <Icon className="h-4 w-4 text-[#D97706]" />
      {children}
    </div>
  );
}

export default function LogisticsSolution() {
  const { hero, trustBar } = data;

  const features = [
    {
      icon: RiShipLine,
      title: "Port and terminal management",
      body: "Streamline berth planning, track cargo movements in real-time, and automate customs clearance documents. Eliminate the bottlenecks that leave ships waiting and cargo stranded.",
      asset: portGraphic,
    },
    {
      icon: RiTruckLine,
      title: "Fleet visibility",
      body: "Maintain real-time tracking of every vehicle in your fleet. Optimize routing based on live traffic and port conditions, minimizing turnaround times and fuel costs.",
      asset: fleetGraphic,
    },
    {
      icon: RiMapPinLine,
      title: "Warehouse orchestration",
      body: "Connect your inventory across every site. Automatically update stock levels, generate dynamic pick lists, and ensure order fulfillment is rapid and error-free.",
      asset: warehouseGraphic,
    },
  ];

  return (
    <main className="bg-[#1C1917] font-sans text-white selection:bg-[#D97706]/30">
      <section className="relative overflow-hidden pt-24 lg:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[#1C1917]" />
          <div className="absolute right-0 top-[-20%] h-[40rem] w-[40rem] rounded-full bg-[#D97706]/10 blur-[120px]" />
        </div>

        <div className="site-container relative z-10 pb-16 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="max-w-2xl"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#D97706]">
                  {hero.eyebrow}
                </p>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-[44px] font-bold leading-[1.05] tracking-tight text-white sm:text-[58px] lg:text-[68px]"
              >
                Every container. Every route. One view.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-[18px] leading-[1.8] text-[#A8A29E] sm:text-[20px]"
              >
                Disconnected port systems and manual cargo tracking cost millions in delays across African logistics. Bridgesoft brings your entire supply chain onto a single, real-time infrastructure.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <PrimaryButton href={hero.ctas?.[0]?.href ?? "/contact"}>
                  See the logistics dashboard
                </PrimaryButton>
                <SecondaryButton href="/products">Explore platform</SecondaryButton>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-3"
              >
                <InfoPill icon={RiLineChartLine}>40% average IT overhead reduction</InfoPill>
                <InfoPill icon={RiTimeLine}>24/7 operations support</InfoPill>
                <InfoPill icon={RiLinksLine}>Connects to existing ERP and WMS</InfoPill>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-[600px] lg:mr-0"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#292524] shadow-2xl">
                <img
                  src={dashboardGraphic}
                  alt="Logistics Dashboard"
                  className="w-full object-cover opacity-90"
                />
                <div className="border-t border-white/5 bg-[#1C1917]/80 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">Live Operations</p>
                      <p className="text-xs text-[#A8A29E]">4,291 active shipments</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-[#D97706]/20 px-3 py-1 text-xs font-semibold text-[#D97706]">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D97706] opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D97706]"></span>
                      </span>
                      System Healthy
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-[#292524]">
        <TrustStrip
          headline={trustBar.headline}
          proofPoints={trustBar.proofPoints}
          className="border-y border-white/5 bg-transparent text-white"
        />
      </div>

      <section className="bg-[#1C1917] py-20 lg:py-28">
        <div className="site-container">
          <div className="mb-16 text-center">
            <h2 className="text-[32px] font-bold tracking-tight text-white sm:text-[42px]">
              Operations that never sleep
            </h2>
          </div>
          
          {/* Stat Cards */}
          <div className="mb-24 grid gap-6 md:grid-cols-3">
            {[
              { label: "Uptime guarantee", value: "99.99%" },
              { label: "Data centers in Africa", value: "4 Tier-III" },
              { label: "Daily transactions processed", value: "2M+" }
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-[#292524] p-8 text-center">
                <p className="text-[40px] font-bold text-[#D97706]">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-[#A8A29E] uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Feature Blocks */}
          <div className="space-y-24">
            {features.map((feature, idx) => (
              <div key={feature.title} className={cn("grid gap-12 lg:grid-cols-2 lg:items-center", idx % 2 === 1 && "lg:grid-cols-[1fr_1fr] lg:space-x-reverse")}>
                <div className={cn(idx % 2 === 1 && "lg:order-2")}>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D97706]/10 text-[#D97706]">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="text-lg leading-relaxed text-[#A8A29E]">{feature.body}</p>
                </div>
                <div className={cn("overflow-hidden rounded-2xl border border-white/10 bg-[#292524] p-2", idx % 2 === 1 && "lg:order-1")}>
                  <img src={feature.asset} alt={feature.title} className="w-full rounded-xl object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#292524] py-20 lg:py-28">
        <div className="site-container">
          <div className="mb-12">
            <h2 className="text-[32px] font-bold tracking-tight text-white sm:text-[42px]">
              Built for the whole network
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] text-[#A8A29E]">
              From the port gate to the final mile, our infrastructure supports every node in your supply chain.
            </p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
            {whoWeHelp.map((item) => (
              <article key={item.title} className="min-w-[280px] snap-start overflow-hidden rounded-2xl border border-white/5 bg-[#1C1917] transition-all hover:border-[#D97706]/30">
                <div className="h-48 overflow-hidden bg-black">
                  <img src={item.image} alt="" className="h-full w-full object-cover opacity-70 transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A8A29E]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* We won't strictly use SolutionWhoWeHelpSection since we built a custom one above, but the prompt says to use it. I will keep the custom one and also use the component if required, or adapt the component to fit. Actually, the prompt says "Use TrustStrip and SolutionWhoWeHelpSection components". I will use SolutionWhoWeHelpSection at the bottom instead of my custom horizontal one to strictly follow instructions, but maybe style it dark if possible. Wait, SolutionWhoWeHelpSection has hardcoded colors likely. I'll just drop it in. */}
      
      <div className="bg-white">
        <SolutionWhoWeHelpSection
          title="Serving the logistics ecosystem"
          items={whoWeHelp}
        />
      </div>
    </main>
  );
}
