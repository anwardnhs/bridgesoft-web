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

const marqueeItems = [...companies, ...companies]

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

export default function TrustStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section
      className="overflow-hidden border-b border-rule bg-white py-8"
      aria-label="Trusted Companies"
    >
      <div className="site-container">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent md:w-28" />

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={trackVariants}
            className="flex w-max items-center py-4"
            style={{ willChange: "transform" }}
          >
            {marqueeItems.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex shrink-0 items-center px-8 md:px-12 lg:px-16"
                aria-hidden={index >= companies.length}
              >
                <span
                  className={`select-none whitespace-nowrap text-slate-400 transition-colors duration-300 hover:text-slate-900 ${company.className}`}
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
