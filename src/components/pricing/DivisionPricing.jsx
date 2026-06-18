import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiCheckLine, RiArrowRightUpLine } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// ─── Data Import ──────────────────────────────────────────────────────────────
import { divisionPricing, currency } from "@/data/pricing";

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

export default function PerDivisionPricing({ isAnnual }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Helper to calculate and format prices
  const formatPrice = (basePrice) => {
    if (!basePrice) return null;
    const finalPrice = isAnnual
      ? basePrice * (1 - currency.annualDiscount)
      : basePrice;
    return new Intl.NumberFormat("en-NG").format(finalPrice);
  };

  const divisions = Object.entries(divisionPricing);

  return (
    <section
      className="bg-white py-24 lg:py-32 font-sans border-b border-rule"
      aria-label="Per-Division Pricing"
      id="per-division"
    >
      <div className="site-container max-w-6xl">
        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <motion.h2
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            className="text-[28px] sm:text-[32px] font-medium text-[#0A2540] tracking-tight mb-4"
          >
            A la Carte Division Pricing
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            className="text-[16px] text-[#425466] max-w-2xl mx-auto"
          >
            Choose the divisions that best fit your business needs. Each
            division is priced individually, allowing you to customize your plan
            and only pay for what you use.
          </motion.p>
        </div>

        {/* ── Tabs Interface ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
        >
          <Tabs defaultValue="cloud" className="w-full">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12 overflow-x-auto pb-4 sm:pb-0">
              <TabsList className="bg-[#F6F9FC] border border-rule h-auto p-1.5 rounded-full inline-flex">
                {divisions.map(([key, division]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="rounded-full px-6 py-2.5 text-[13px] font-bold uppercase tracking-widest text-[#425466] data-[state=active]:bg-white data-[state=active]:text-[#0A2540] data-[state=active]:shadow-sm transition-all"
                  >
                    {key}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab Content Areas */}
            {divisions.map(([key, division]) => (
              <TabsContent
                key={key}
                value={key}
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                {/* Division Title & Desc */}
                <div className="text-center mb-12">
                  <h3 className="text-[20px] font-bold text-[#0A2540] tracking-tight mb-2">
                    {division.label}
                  </h3>
                  <p className="text-[14px] text-subtle font-medium">
                    {division.description}
                  </p>
                </div>

                {/* Division Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 items-start">
                  {division.tiers.map((tier) => {
                    const isHighlighted = tier.tag === "Most Popular";
                    const ngnPrice = formatPrice(tier.monthlyNGN);
                    const usdPrice = formatPrice(tier.monthlyUSD);

                    return (
                      <div key={tier.id} className="relative h-full">
                        {/* Highlight Badge */}
                        {tier.tag && (
                          <div className="absolute -top-3 left-0 right-0 flex justify-center z-10">
                            <Badge className="bg-[#0A2540] hover:bg-[#02527D] text-white font-bold uppercase tracking-widest text-[10px] px-3 py-1 border-none shadow-sm">
                              {tier.tag}
                            </Badge>
                          </div>
                        )}

                        <Card
                          className={cn(
                            "flex flex-col h-full transition-all duration-300",
                            isHighlighted
                              ? "border-[#0A2540] shadow-md bg-white ring-1 ring-[#0A2540]"
                              : "border-rule shadow-none bg-white hover:border-accent/40",
                          )}
                        >
                          <div className="p-8 flex flex-col flex-grow">
                            <h4 className="text-[18px] font-bold text-[#0A2540] tracking-tight mb-6">
                              {tier.name}
                            </h4>

                            {/* Price Block */}
                            <div className="mb-8 min-h-[70px] flex flex-col justify-center">
                              {ngnPrice ? (
                                <>
                                  <div className="flex items-baseline gap-1">
                                    <span className="text-[18px] font-medium text-[#0A2540]">
                                      {currency.symbol}
                                    </span>
                                    <span className="font-mono text-[32px] sm:text-[40px] font-bold text-[#0A2540] leading-none tracking-tight">
                                      {ngnPrice}
                                    </span>
                                  </div>
                                  <div className="font-mono text-[12px] text-subtle mt-2">
                                    ~ {currency.usdSymbol}
                                    {usdPrice} / mo
                                  </div>
                                </>
                              ) : (
                                <div className="font-mono text-[28px] sm:text-[32px] font-bold text-[#0A2540] leading-none tracking-tight">
                                  Custom
                                </div>
                              )}
                            </div>

                            {/* CTA Button */}
                            <Button
                              asChild
                              variant={isHighlighted ? "default" : "outline"}
                              className={cn(
                                "w-full h-11 font-bold uppercase tracking-widest text-[11px] rounded-sm mb-8",
                                isHighlighted
                                  ? "bg-[#0A2540] hover:bg-[#02527D] text-white border-none shadow-md"
                                  : "border-rule text-[#0A2540] hover:bg-[#F6F9FC]",
                              )}
                            >
                              <Link to="/contact">{tier.cta}</Link>
                            </Button>

                            {/* Features List */}
                            <ul className="space-y-3 mt-auto">
                              {tier.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <RiCheckLine className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                  <span className="text-[13px] text-[#425466] font-medium leading-[1.4]">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* ── Return to Unified CTA ── */}
          <div className="mt-16 text-center border-t border-rule pt-12">
            <p className="text-[14px] text-subtle font-bold mb-4">
              Looking for a more comprehensive solution? Our Unified Plan offers
              all divisions bundled together for a seamless experience.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 text-[13px] font-bold text-[#0A2540] uppercase tracking-widest hover:text-accent transition-colors"
            >
              Get everything in the Unified Plan
              <RiArrowRightUpLine className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
