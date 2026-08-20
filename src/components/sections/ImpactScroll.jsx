import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

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

export default function ImpactScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#FAFAFA] py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="site-container">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-mono uppercase tracking-widest text-[#004ADD] border border-slate-200 mb-6 shadow-sm">
            Real Stories, Real Impact
          </span>
          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-medium text-[#0A0A0A] leading-[1.05] tracking-tight">
            The technology global<br className="hidden md:block" /> institutions rely on.
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[1000px] mx-auto">
          
          <div className="overflow-hidden w-full pb-8">
            <motion.div 
              className="flex transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              {stories.map((story) => (
                <div key={story.id} className="w-full flex-shrink-0 px-2 lg:px-4">
                  <div className="group w-full h-full bg-white rounded-[20px] lg:rounded-[32px] border border-rule/40 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-shadow duration-500 p-10 md:p-16 lg:p-20 flex flex-col items-start justify-center">
                    
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
                    
                    <div className="mt-auto">
                      <Link 
                        to={story.link} 
                        className="inline-flex items-center justify-center gap-2 bg-[#004ADD] text-white px-8 py-4 font-bold text-[14px] hover:bg-[#003399] transition-colors rounded-sm w-fit group-hover:-translate-y-1 group-hover:shadow-lg duration-300"
                      >
                        {story.linkText}
                        <RiArrowRightLine className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-[#004ADD] hover:border-transparent hover:shadow-md transition-all duration-300"
              aria-label="Previous story"
            >
              <RiArrowLeftLine className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2 mx-4">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentIndex === idx ? "w-8 bg-[#004ADD]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-[#004ADD] hover:border-transparent hover:shadow-md transition-all duration-300"
              aria-label="Next story"
            >
              <RiArrowRightLine className="w-6 h-6" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
