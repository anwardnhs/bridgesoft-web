import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SolutionOpportunitySection({
  label = "The opportunity",
  title,
  description,
  items = [],
}) {
  return (
    <section className="py-20 lg:py-28">
      <div className="site-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#635BFF]">
            {label}
          </p>
          <h2 className="mt-4 text-[32px] font-semibold tracking-tight text-[#0A2540] sm:text-[40px]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.65] text-[#425466]">
            {description}
          </p>
        </motion.div>

        {items.length > 0 && (
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {items.map((item) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border-t border-[#E6ECF5] pt-8"
              >
                <h3 className="text-[22px] font-semibold tracking-tight text-[#0A2540]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-[#425466]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
