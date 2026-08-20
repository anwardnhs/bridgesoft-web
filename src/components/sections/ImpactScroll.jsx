import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";

const stories = [
  {
    id: "finance",
    title: "Creating economic opportunity for all.",
    tags: ["FINANCE", "GLOBAL IMPACT", "SCALE"],
    text: "By rebuilding our core financial infrastructure, we were able to reach millions of previously underserved individuals, giving them the power to save, invest, and build a secure future for their families.",
    linkText: "Read the finance story",
    link: "/impact/finance"
  },
  {
    id: "talent",
    title: "Prioritizing talent and career growth.",
    tags: ["CULTURE", "ENTERPRISE", "GROWTH"],
    text: "A talent-driven organization is, by definition, an inclusive one. We're committed to creating a workplace where employees feel like they belong, empowering our teams to focus entirely on human-centric innovation.",
    linkText: "Explore our culture",
    link: "/impact/talent"
  },
  {
    id: "community",
    title: "Making an impact in our communities.",
    tags: ["PUBLIC SECTOR", "LOGISTICS", "COMMUNITY"],
    text: "Behind every digital transformation is a community waiting for reliable services. Upgrading our logistics and public sector networks wasn't just about speed—it was about ensuring remote communities never go without essentials.",
    linkText: "Explore our communities",
    link: "/impact/community"
  }
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ImpactScroll() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#FAFAFA] py-24 lg:py-32 overflow-hidden">
      <div className="site-container">
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-mono uppercase tracking-widest text-[#004ADD] border border-slate-200 mb-6 shadow-sm">
            Real Stories, Real Impact
          </span>
          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-medium text-[#0A0A0A] leading-[1.05] tracking-tight">
            The technology global<br className="hidden md:block" /> institutions rely on.
          </h2>
        </div>

        {/* ── Wink-Style Text Cards (No Images) ── */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="flex flex-col gap-8 lg:gap-12 w-full max-w-[1000px] mx-auto"
        >
          {stories.map((story) => (
            <motion.div 
              key={story.id} 
              variants={cardVariant}
              className="group w-full bg-white rounded-[20px] lg:rounded-[32px] border border-rule/40 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 p-10 md:p-16 lg:p-20"
            >
              <div className="flex flex-wrap gap-2 mb-8">
                {story.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-800 text-[10px] font-black uppercase tracking-[0.15em] rounded-[4px] shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-[32px] md:text-[44px] font-medium text-slate-900 mb-6 tracking-tight leading-[1.1]">
                {story.title}
              </h3>
              
              <p className="text-[17px] md:text-[19px] text-[#425466] leading-[1.6] mb-10 max-w-[90%]">
                {story.text}
              </p>
              
              <Link 
                to={story.link} 
                className="inline-flex items-center justify-center gap-2 bg-[#004ADD] text-white px-8 py-4 font-bold text-[14px] hover:bg-[#003399] transition-colors rounded-sm w-fit group-hover:-translate-y-1 group-hover:shadow-lg duration-300"
              >
                {story.linkText}
                <RiArrowRightLine className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
