import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  RiArrowRightLine,
  RiCloudWindyLine,
  RiDatabase2Line,
  RiTerminalBoxLine,
  RiBriefcase4Line,
} from "react-icons/ri";
import { cn } from "@/lib/utils";

// ─── Background Images ───
import entImg from "@/assets/images/joel-filipe-D1S4F_SKY2I-unsplash.jpg";
import consImg from "@/assets/images/austin-distel-mpN7xjKQ_Ns-unsplash.jpg";
import ventImg from "@/assets/images/lycs-architecture-U2BI3GMnSSE-unsplash.jpg";

// ─── Figma Assets ───
import cloud3d from "@/assets/images/product-data-graphic.svg";
import logoCloud from "@/assets/images/product-growth-chart.svg";

// ─── Utility Components ──────────────────────────────────────────────────────

// Subtle film-grain noise for premium tactile feel
const Noise = () => (
  <div className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.015] mix-blend-overlay">
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

// Mouse-tracking spotlight card wrapper
function SpotlightCard({ children, className, to, delay = 0 }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Wrapper = to ? Link : "div";
  const props = to ? { to } : {};

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
        },
      }}
      className="relative flex h-full w-full"
    >
      <Wrapper
        {...props}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative flex h-full w-full flex-col overflow-hidden rounded-[2.5rem] bg-white border border-zinc-200/80 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 duration-500",
          className,
        )}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px z-10 rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(120, 119, 198, 0.08),
                transparent 80%
              )
            `,
          }}
        />
        <Noise />
        {children}
      </Wrapper>
    </motion.div>
  );
}

// ─── Custom Card UIs ─────────────────────────────────────────────────────────

function CloudUI() {
  return (
    <div className="relative flex h-full min-h-[300px] w-full items-center justify-center lg:min-h-full">
      {/* Abstract background rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute h-[300px] w-[300px] rounded-full border border-blue-100/50 mix-blend-multiply blur-[1px] animate-[spin_20s_linear_infinite]" />
        <div className="absolute h-[400px] w-[400px] rounded-full border border-indigo-100/30 mix-blend-multiply blur-[1px] animate-[spin_30s_linear_infinite_reverse]" />
      </div>

      {/* Main Graphic with levitation */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-[480px] drop-shadow-[0_20px_40px_rgba(10,37,64,0.15)] transition-transform duration-700 ease-out group-hover:scale-105"
      >
        <img
          src={cloud3d}
          alt="Cloud Infrastructure"
          className="h-auto w-full object-contain"
        />
      </motion.div>
    </div>
  );
}

function DataUI() {
  return (
    <div className="relative flex h-full min-h-[350px] w-full max-w-[500px] items-center justify-center">
      <div className="relative h-full w-full">
        {/* Animated Circuit Grid */}
        <svg className="absolute inset-0 h-full w-full" overflow="visible">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Base Paths */}
          <path
            d="M 40 40 L 150 40 L 220 120 L 350 120"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-40"
          />
          <path
            d="M 80 280 L 150 280 L 220 180 L 320 180"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
          />

          {/* Animated Pulses */}
          <circle r="4" fill="#3B82F6" filter="url(#glow)">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M 40 40 L 150 40 L 220 120 L 350 120"
            />
          </circle>
          <circle r="3" fill="#10B981" filter="url(#glow)">
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              path="M 80 280 L 150 280 L 220 180 L 320 180"
            />
          </circle>
        </svg>

        {/* Floating Glass Panels */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
          className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-md"
        >
          <RiDatabase2Line className="h-6 w-6 text-[#0A2540]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-12 top-24 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-[#0A2540] shadow-xl"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)] animate-pulse" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-16 left-16 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/60 bg-white/40 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-md"
        >
          <div className="h-full w-full rounded-lg border border-blue-200 bg-blue-50/50" />
        </motion.div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProductsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden bg-[#FAFAFA] pb-24 pt-28 lg:pb-32 lg:pt-36"
      aria-label="Products"
    >
      {/* Subtle Architectural Grid Background */}
      <div className="pointer-events-none absolute inset-0 flex justify-center z-0">
        <div className="h-full w-full max-w-7xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVsNDAtLjVWMG0tMzkuNSAwTD41IDM5LjUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+PC9zdmc+')] opacity-50 mask-image:linear-gradient(to_bottom,white,transparent)" />
      </div>

      <div className="site-container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (Optional/Placeholder based on your original code) */}
        <div className="mb-16 text-center lg:mb-24">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-5xl">
            A unified suite for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              modern scale.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500">
            Purpose-built infrastructure and tooling to help you move faster,
            scale further, and retain total control.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8"
        >
          {/* ── LIVE PRODUCTS (Top Row) ── */}

          {/* Bridgesoft Cloud */}
          <div className="lg:col-span-12">
            <SpotlightCard
              to="/products/cloud"
              className="bg-gradient-to-br from-white to-slate-50/50"
            >
              <div className="grid grid-cols-1 items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
                <div className="relative z-10 flex flex-col">
                  <div className="mb-6 inline-flex w-fit items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                      Cloud Hosting
                    </span>
                  </div>
                  <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-[#0A2540] lg:text-5xl">
                    Bridgesoft Cloud
                  </h3>
                  <p className="mb-8 max-w-md text-lg leading-relaxed text-slate-600">
                    Powerful cloud hosting on our own data centres across
                    Africa. Your data stays local, safe, and entirely under our
                    control.
                  </p>
                  <div className="inline-flex items-center gap-3 font-semibold text-[#0A2540] group-hover:text-blue-600 transition-colors">
                    Explore Infrastructure
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 group-hover:bg-blue-100 transition-colors">
                      <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
                <CloudUI />
              </div>
            </SpotlightCard>
          </div>

          {/* Bridgesoft Data */}
          <div className="lg:col-span-12">
            <SpotlightCard
              to="/products/data"
              className="bg-gradient-to-tl from-white to-slate-50/50"
              delay={0.1}
            >
              <div className="grid grid-cols-1 items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
                <div className="order-2 lg:order-1">
                  <DataUI />
                </div>
                <div className="relative z-10 flex flex-col order-1 lg:order-2">
                  <div className="mb-6 inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                      Data & Analytics
                    </span>
                  </div>
                  <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-[#0A2540] lg:text-5xl">
                    Bridgesoft Data
                  </h3>
                  <p className="mb-8 max-w-md text-lg leading-relaxed text-slate-600">
                    Advanced analytics pipelines to help you make data-driven
                    decisions. Visualize trends in real-time and gain actionable
                    insights.
                  </p>
                  <div className="inline-flex items-center gap-3 font-semibold text-[#0A2540] group-hover:text-emerald-600 transition-colors">
                    Explore Analytics
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 group-hover:bg-emerald-100 transition-colors">
                      <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* ── COMING SOON PRODUCTS (Bottom Row) ── */}

          {[
            {
              title: "Enterprise",
              img: entImg,
              icon: RiTerminalBoxLine,
              desc: "Comprehensive solutions engineered to streamline complex operations for large-scale organizations.",
            },
            {
              title: "Consulting",
              img: consImg,
              icon: RiCloudWindyLine,
              desc: "Expert guidance to help businesses navigate digital transformation and architecture adoption.",
            },
            {
              title: "Ventures",
              img: ventImg,
              icon: RiBriefcase4Line,
              desc: "Strategic funding and mentorship supporting the next generation of innovative African startups.",
            },
          ].map((item, idx) => (
            <div key={item.title} className="lg:col-span-4 h-[420px]">
              <SpotlightCard
                delay={0.2 + idx * 0.1}
                className="group border-0 p-0 shadow-lg"
              >
                <div className="absolute top-6 right-6 z-20">
                  <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/20">
                    Coming Soon
                  </span>
                </div>

                {/* Image with Grayscale to Color Reveal */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A2540]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-70 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />
                </div>

                {/* Content Panel */}
                <div className="relative z-10 mt-auto flex h-full flex-col justify-end p-8">
                  <div className="translate-y-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-md shadow-lg">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white">
                      Bridgesoft {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}

          {/* ── INTEGRATIONS BANNER ── */}

          <div className="lg:col-span-12 mt-6 lg:mt-8">
            <SpotlightCard
              delay={0.5}
              className="overflow-hidden bg-[#0A2540] border-[#0A2540]"
            >
              {/* Premium abstract mesh background for the dark card */}
              <div
                className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 0%, #3B82F6 0%, transparent 60%)",
                }}
              />

              <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center lg:p-20">
                <h3 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  Connects with the systems you already run
                </h3>
                <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-400">
                  Our products are designed via API-first principles to
                  integrate flawlessly with your existing software stack,
                  eliminating silos instantly.
                </p>

                {/* Integration Logo display with premium presentation */}
                <div className="relative flex w-full max-w-4xl items-center justify-center rounded-3xl bg-white/5 p-8 border border-white/10 shadow-2xl backdrop-blur-xl">
                  {/* Glowing backdrop for the logos */}
                  <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-2xl" />

                  <img
                    src={logoCloud}
                    alt="100+ Integrations"
                    className="h-auto w-full object-contain brightness-0 invert opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </SpotlightCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
