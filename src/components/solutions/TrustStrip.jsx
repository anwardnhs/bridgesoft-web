import { cn } from "@/lib/utils";

const wordmarkStyles = [
  "font-serif font-semibold uppercase tracking-[-0.08em]",
  "font-extrabold italic tracking-[-0.08em] uppercase",
  "font-semibold tracking-[-0.05em] lowercase",
  "font-medium tracking-[-0.03em]",
];

export default function TrustStrip({ headline, proofPoints }) {
  return (
    <section className="border-y border-[#E6ECF5] bg-white py-8 lg:py-9">
      <div className="site-container">
        <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8A94A6]">
          {headline}
        </p>

        <div className="overflow-hidden rounded-[1.75rem] border border-[#E6ECF5] bg-white">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((point, index) => (
              <div
                key={point}
                className={cn(
                  "flex min-h-[84px] items-center justify-center px-4 py-5 text-center",
                  "border-[#E6ECF5]",
                  index % 2 === 1 ? "border-l" : "",
                  index > 1 ? "border-t lg:border-t-0" : "",
                  index > 0 ? "lg:border-l" : "",
                )}
              >
                <span
                  className={cn(
                    "text-[22px] leading-none text-[#0A2540] sm:text-[24px] lg:text-[26px]",
                    wordmarkStyles[index % wordmarkStyles.length],
                  )}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
