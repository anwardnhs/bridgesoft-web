import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

function HeroButton({ children, to, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[4px] px-5 py-2.5 text-[14px] font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[#0A2540] text-white hover:bg-[#12365c]"
      : "border border-[#E6ECF5] bg-white text-[#0A2540] shadow-sm hover:bg-[#F6F9FC]";

  return (
    <Link to={to} className={cn(base, styles)}>
      {children}
      {variant === "primary" ? null : (
        <RiArrowRightLine className="h-4 w-4" />
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
    <section className="relative overflow-hidden pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_15%,rgba(255,225,186,0.56),transparent_24%),radial-gradient(circle_at_70%_10%,rgba(192,132,252,0.22),transparent_20%),radial-gradient(circle_at_100%_0%,rgba(56,189,248,0.16),transparent_22%),linear-gradient(180deg,#fffaf4_0%,#ffffff_42%,#f8faff_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(10,37,64,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(10,37,64,0.045)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -left-20 top-14 h-[360px] w-[360px] rounded-full bg-[#F3D9B1]/45 blur-[110px]" />
        <div className="absolute right-0 top-20 h-[320px] w-[320px] rounded-full bg-[#C4B5FD]/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-px w-[110%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D8E1EF] to-transparent" />
      </div>

      <div className="site-container relative pb-16 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#6C7A90]">
              {eyebrow}
            </p>
            <h1 className="max-w-[14ch] text-[40px] font-semibold leading-[0.95] tracking-[-0.06em] text-[#0A2540] sm:text-[56px] lg:text-[72px]">
              {headline.replace(/\.$/, "")}
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-[1.65] text-[#425466]">
              {subtext}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <HeroButton
                to={primaryCta?.href ?? "/contact"}
                variant="primary"
              >
                {primaryCta?.label ?? "Contact sales"}
              </HeroButton>
              <HeroButton
                to={secondaryCta?.href ?? "/contact"}
                variant="secondary"
              >
                {secondaryCta?.label ?? "Get started"}
              </HeroButton>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Built for regulated teams", "Secure by design", "African cloud infrastructure"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#DDE5F0] bg-white/70 px-3 py-1 text-[12px] font-medium text-[#4B5B73] shadow-[0_8px_24px_rgba(10,37,64,0.04)] backdrop-blur"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),rgba(255,255,255,0.55)_42%,rgba(255,255,255,0.15)_100%)] blur-0" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white/75 p-4 shadow-[0_30px_90px_rgba(10,37,64,0.16)] backdrop-blur">
              <div className="absolute left-8 top-8 z-10 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6C7A90] shadow-sm">
                Live overview
              </div>
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="aspect-[5/4] w-full rounded-[1.35rem] object-cover object-center"
              />
              <div className="absolute bottom-8 left-8 z-10 rounded-2xl border border-white/80 bg-white/88 px-4 py-3 shadow-[0_14px_40px_rgba(10,37,64,0.12)] backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6C7A90]">
                  Ready now
                </p>
                <p className="mt-1 text-[14px] font-medium text-[#0A2540]">
                  Built to support real operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
