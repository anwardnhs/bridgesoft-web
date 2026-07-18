import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const companies = [
  {
    id: "dangote",
    name: "DANGOTE",
    className: "font-serif font-black tracking-tight uppercase text-[22px]",
  },
  {
    id: "mtn",
    name: "MTN",
    className:
      "font-sans font-black italic tracking-tighter text-[28px] leading-none",
  },
  {
    id: "flutterwave",
    name: "flutterwave",
    className: "font-sans font-extrabold tracking-tight text-[22px] lowercase",
  },
  {
    id: "standardbank",
    name: "Standard Bank",
    className: "font-sans font-semibold tracking-tight text-[20px]",
  },
  {
    id: "paystack",
    name: "paystack",
    className: "font-sans font-bold tracking-tighter text-[22px] lowercase",
  },
  {
    id: "oando",
    name: "OANDO",
    className: "font-sans font-black tracking-widest uppercase text-[20px]",
  },
]

const marqueeVariants = {
  hidden: { x: 0 },
  show: {
    x: ["0%", "-50%"],
    transition: {
      duration: 24,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
}

export default function TrustStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const items = [...companies, ...companies]

  return (
    <section className="border-y border-[#E6ECF5] bg-white py-8 lg:py-10" aria-label="Trusted Companies">
      <div className="site-container" ref={ref}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#635BFF]">
            Trusted by institutions across financial services
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#425466] sm:text-base">
            Trusted by teams that want software to feel steady, simple, and easy to run.
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={marqueeVariants}
            className="flex w-max items-center py-2"
            style={{ willChange: "transform" }}
          >
            {items.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex shrink-0 items-center px-6 sm:px-8 lg:px-10"
                aria-hidden={index >= companies.length}
              >
                <span
                  className={`select-none whitespace-nowrap text-[18px] font-semibold tracking-tight text-[#0A2540] sm:text-[22px] lg:text-[24px] ${company.className}`}
                  title={company.name}
                >
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
