import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiCheckLine, RiSubtractLine } from "react-icons/ri";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// ─── Data Import ──────────────────────────────────────────────────────────────
import { unifiedTiers, currency } from "@/data/pricing";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function UnifiedPricing({ isAnnual }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Helper to calculate and format prices based on the toggle
  const formatPrice = (basePrice) => {
    if (!basePrice) return null;
    const finalPrice = isAnnual
      ? basePrice * (1 - currency.annualDiscount)
      : basePrice;
    return new Intl.NumberFormat("en-NG").format(finalPrice);
  };

  return (
    <section
      className="bg-[#F6F9FC] py-24 lg:py-32 font-sans border-b border-rule"
      aria-label="Unified Platform Pricing"
    >
      <div className="site-container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            className="text-[28px] sm:text-[32px] font-medium text-[#0A2540] tracking-tight mb-4"
          >
            Unified Platform Pricing
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            className="text-[16px] text-[#425466] max-w-2xl mx-auto"
          >
            Our unified platform offers a comprehensive suite of tools for
            businesses looking to streamline their operations. Choose the plan
            that best fits your needs and scale as your business grows.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 items-start"
        >
          {unifiedTiers.map((tier) => {
            const isHighlighted = tier.id === "growth";
            const ngnPrice = formatPrice(tier.monthlyNGN);
            const usdPrice = formatPrice(tier.monthlyUSD);

            return (
              <motion.div
                key={tier.id}
                variants={fadeUp}
                className="relative h-full"
              >
                {/* Highlight Badge */}
                {tier.tag && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center z-10">
                    <Badge className="bg-[#0A2540] hover:bg-accent text-white font-bold uppercase tracking-widest text-[10px] px-3 py-1 border-none">
                      {tier.tag}
                    </Badge>
                  </div>
                )}

                <Card
                  className={cn(
                    "flex flex-col h-full transition-all duration-300 relative",
                    isHighlighted
                      ? "border-[#0A2540] shadow-[0_20px_40px_rgba(3,105,161,0.08)] bg-white ring-1 ring-[#0A2540]"
                      : "border-rule shadow-sm bg-white hover:border-accent/40",
                  )}
                >
                  <div className="p-8 flex flex-col flex-grow">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-[20px] font-bold text-[#0A2540] tracking-tight mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-[14px] text-[#425466] leading-[1.5] min-h-[42px]">
                        {tier.description}
                      </p>
                    </div>

                    {/* Price Block */}
                    <div className="mb-8 min-h-[90px] flex flex-col justify-center">
                      {!tier.enterprise ? (
                        <>
                          <div className="flex items-baseline gap-1">
                            <span className="text-[24px] font-medium text-[#0A2540]">
                              {currency.symbol}
                            </span>
                            <span className="font-mono text-[40px] sm:text-[48px] font-bold text-[#0A2540] leading-none tracking-tight">
                              {ngnPrice}
                            </span>
                            <span className="text-[14px] font-medium text-subtle ml-1">
                              / mo
                            </span>
                          </div>
                          <div className="font-mono text-[13px] text-subtle mt-2 flex items-center gap-1.5">
                            <span>
                              ~ {currency.usdSymbol}
                              {usdPrice} / mo
                            </span>
                            {isAnnual && (
                              <span className="inline-block px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] uppercase font-bold tracking-widest rounded">
                                Billed Annually
                              </span>
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="font-mono text-[32px] sm:text-[36px] font-bold text-[#0A2540] leading-none tracking-tight">
                          Custom
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      variant={isHighlighted ? "default" : "outline"}
                      className={cn(
                        "w-full h-12 font-bold uppercase tracking-widest text-[12px] rounded-sm mb-8",
                        isHighlighted
                          ? "bg-[#0A2540] hover:bg-[#02527D] text-white border-none shadow-md"
                          : "border-rule text-[#0A2540] hover:bg-[#F6F9FC]",
                      )}
                    >
                      <Link to={tier.ctaHref}>{tier.cta}</Link>
                    </Button>

                    {/* Features List */}
                    <div className="space-y-4 mt-auto">
                      <div className="text-[11px] font-bold uppercase tracking-widest text-subtle mb-4">
                        What's Included
                      </div>

                      <ul className="space-y-3">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <RiCheckLine className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-[14px] text-[#425466] font-medium leading-[1.4]">
                              {feature}
                            </span>
                          </li>
                        ))}

                        {tier.notIncluded?.map((feature, i) => (
                          <li
                            key={`not-${i}`}
                            className="flex items-start gap-3 opacity-50"
                          >
                            <RiSubtractLine className="w-5 h-5 text-subtle shrink-0 mt-0.5" />
                            <span className="text-[14px] text-subtle font-medium leading-[1.4]">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
