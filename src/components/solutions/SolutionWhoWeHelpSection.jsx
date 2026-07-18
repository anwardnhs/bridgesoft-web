import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SolutionWhoWeHelpSection({
  title,
  items,
  label = "Who we help",
}) {
  return (
    <section className="border-t border-[#E6ECF5] bg-white py-20 lg:py-28">
      <div className="site-container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#0A2540]">
            {label}
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight sm:text-[36px]">
            {title}
          </h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="grid gap-6 sm:grid-cols-2"
        >
          {items.map((segment) => (
            <article
              key={segment.title}
              className="group overflow-hidden rounded-lg border border-[#E6ECF5] bg-white transition-shadow hover:shadow-[0_12px_40px_rgba(10,37,64,0.08)]"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-t-lg bg-[#F6F9FC] p-5">
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[18px] font-semibold text-[#0A2540]">
                  {segment.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">
                  {segment.description}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
