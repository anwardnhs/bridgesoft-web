import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";

const stories = [
  {
    id: "finance",
    title: "Creating economic opportunity for all.",
    text: "By rebuilding our core financial infrastructure, we were able to reach millions of previously underserved individuals, giving them the power to save, invest, and build a secure future for their families.",
    linkText: "Learn about our financial impact",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "talent",
    title: "Prioritizing talent and career growth.",
    text: "A talent-driven organization is, by definition, an inclusive one. We're committed to creating a workplace where employees feel like they belong, empowering our teams to focus entirely on human-centric innovation.",
    linkText: "Explore our culture",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "community",
    title: "Making an impact in our communities.",
    text: "Behind every digital transformation is a community waiting for reliable services. Upgrading our logistics and public sector networks wasn't just about speed—it was about ensuring remote communities never go without essentials.",
    linkText: "Explore our communities",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  }
];

const stats = [
  {
    stat: "88%",
    desc: "increase in speed to market",
    tag: "ENTERPRISE",
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    stat: "18 hours",
    desc: "saved each month on operations",
    tag: "PUBLIC SECTOR",
    bg: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    stat: "10x",
    desc: "faster turnaround time",
    tag: "HEALTHCARE",
    bg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  },
  {
    stat: "46%",
    desc: "decrease in manual errors",
    tag: "FINANCE",
    bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ImpactScroll() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#FAF9F7] py-24 lg:py-32 overflow-hidden">
      <div className="site-container">
        
        {/* ── Zig-Zag Editorial Stories (JPMorgan Style) ── */}
        <div className="flex flex-col w-full max-w-[1200px] mx-auto border-t border-[#E5E5EA]">
          {stories.map((story, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={story.id} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="py-16 md:py-24 border-b border-[#E5E5EA] last:border-b-0"
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                  
                  {/* Text Side */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h3 className="font-serif text-[38px] md:text-[48px] lg:text-[56px] leading-[1.05] text-[#111111] mb-6 tracking-tight">
                      {story.title}
                    </h3>
                    <p className="text-[17px] md:text-[19px] text-[#425466] leading-[1.6] mb-8 font-sans">
                      {story.text}
                    </p>
                    <Link to="/about" className="group inline-flex items-center gap-2 text-[#9B3C1B] font-medium text-[16px] transition-all font-sans hover:text-[#7A2E14]">
                      {story.linkText}
                      <RiArrowRightLine className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                  
                  {/* Image Side */}
                  <div className="w-full md:w-1/2">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200">
                      <img 
                        src={story.image} 
                        alt={story.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" 
                      />
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── Stats Carousel / Grid (Ballance Style) ── */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-24 md:mt-32 max-w-[1400px] mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9B3C1B] mb-4 block">
              REAL MESSAGES - REAL FEEDBACK
            </span>
            <h3 className="text-[32px] md:text-[40px] font-medium text-[#111111] tracking-tight font-sans">
              What They Say About Bridgesoft
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden group bg-slate-900">
                <img 
                  src={stat.bg} 
                  alt="Background" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80" 
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#004ADD]/80 via-transparent to-black/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div>
                    <div className="text-[42px] lg:text-[48px] font-medium text-white leading-none mb-3 tracking-tight font-sans">
                      {stat.stat}
                    </div>
                    <div className="text-[16px] text-white/90 leading-[1.3] font-sans pr-4">
                      {stat.desc}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <span className="inline-block bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm font-sans shadow-sm">
                      {stat.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
