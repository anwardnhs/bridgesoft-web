import { Link } from "react-router-dom";
import { RiArrowRightLine, RiCheckLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

function HeroButton({ children, to, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200";

  // Stripe-style buttons: subtle hover lift, precise shadows, no harsh linear gradients.
  const styles =
    variant === "primary"
      ? "bg-[#0A2540] text-white shadow-[0_8px_24px_rgba(10,37,64,0.16)] hover:bg-[#08223a] hover:shadow-[0_10px_30px_rgba(10,37,64,0.18)] hover:-translate-y-[1px]"
      : "bg-white text-[#0A2540] ring-1 ring-slate-200 shadow-sm hover:bg-slate-50 hover:text-[#0A2540]";

  return (
    <Link to={to} className={cn(base, styles)}>
      {children}
      {variant === "primary" ? null : (
        <RiArrowRightLine className="h-4 w-4 text-slate-400" />
      )}
    </Link>
  );
}

export default function SolutionHeroSection({
  eyebrow,
  headline,
  subtext,
  heroImage,
  heroImageAlt,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section className="relative overflow-hidden bg-[#F6F9FC] pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Clean, subtle background glow instead of chaotic colored blur blobs */}

      <div className="site-container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column: Copy & CTA */}
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="mb-4 text-sm font-bold tracking-wide text-[#0A2540] uppercase">
                {eyebrow}
              </p>
            )}

            {/* Tighter tracking and better line-height for a professional feel */}
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#0A2540] sm:text-6xl lg:text-[4rem]">
              {(headline ?? "").replace(/\.$/, "")}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#0A2540] sm:text-xl">
              {subtext}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <HeroButton to={primaryCta?.href ?? "/contact"} variant="primary">
                {primaryCta?.label ?? "Contact sales"}
              </HeroButton>
              <HeroButton
                to={secondaryCta?.href ?? "/contact"}
                variant="secondary"
              >
                {secondaryCta?.label ?? "Get started"}
              </HeroButton>
            </div>

            {/* Clean inline feature list replacing the bulky colored pills */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                "Built for operations",
                "Key compliance controls",
                "Enterprise-grade security",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-[#0A2540]"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#0A2540] shadow-[0_1px_3px_rgba(10,37,64,0.1)] ring-1 ring-emerald-200">
                    <RiCheckLine className="h-3 w-3" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Imagery */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Stripe often uses floating cards that look like clean browser/app windows */}
            <div className="relative rounded-2xl bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] ring-1 ring-slate-900/5">
              {/* Optional App Window Header Dots */}
              <div className="flex items-center border-b border-slate-100 px-4 py-3">
                <div className="flex space-x-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                </div>
              </div>

              <div className="p-2">
                <img
                  src={heroImage}
                  alt={heroImageAlt}
                  className="aspect-[4/3] w-full rounded-xl bg-slate-50 object-cover object-center"
                />
              </div>
            </div>

            {/* Floating Element - Replaced glassmorphism with sharp, opaque card */}
            <div className="absolute -bottom-6 -left-6 z-20 rounded-xl bg-white p-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] ring-1 ring-slate-900/5 sm:-bottom-8 sm:-left-8">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6F9FC] text-[#0A2540] shadow-[0_2px_6px_rgba(10,37,64,0.1)]">
                  <RiCheckLine className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Ready now
                  </p>
                  <p className="text-sm font-medium text-slate-900">
                    Built for operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
