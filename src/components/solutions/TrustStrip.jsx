import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

const wordmarkStyles = [
  "font-serif font-semibold uppercase tracking-[-0.08em]",
  "font-extrabold italic tracking-[-0.08em] uppercase",
  "font-semibold tracking-[-0.05em] lowercase",
  "font-medium tracking-[-0.03em]",
]

const trackVariants = {
  hidden: { x: 0 },
  show: {
    x: ["0%", "-50%"],
    transition: {
      duration: 22,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
}

export default function TrustStrip({ headline, proofPoints = [] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const marqueeItems = [...proofPoints, ...proofPoints]

  return (
    <section className="overflow-hidden bg-slate-50 py-10 lg:py-14">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
            {headline}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Trusted performance that scales with your business.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Real results, clear metrics, and confident decisions - all built on
            a foundation of reliability and transparency.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 to-transparent md:w-28" />

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={trackVariants}
            className="flex w-max items-stretch py-2"
            style={{ willChange: "transform" }}
          >
            {marqueeItems.map((point, index) => (
              <div
                key={`${point}-${index}`}
                className="flex shrink-0 items-center px-4 md:px-6 lg:px-8"
                aria-hidden={index >= proofPoints.length}
              >
                <div className="rounded-[2rem] bg-white px-6 py-10 text-center shadow-[0_24px_60px_-32px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-40px_rgba(15,23,42,0.18)] min-w-[220px]">
                  <span
                    className={cn(
                      "block text-[28px] leading-none text-slate-950 sm:text-[32px] lg:text-[34px]",
                      wordmarkStyles[index % wordmarkStyles.length],
                    )}
                  >
                    {point}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
