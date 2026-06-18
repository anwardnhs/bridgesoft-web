import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";

// ─── Data Import ──────────────────────────────────────────────────────────────
import { featuredStory, stories } from "@/data/newsroom";

// Combine the main featured story with the top 3 stories to create the slideshow array
const carouselStories = [featuredStory, ...stories.slice(0, 3)].filter(Boolean); // Safety filter in case stories are missing

export default function FeaturedStory() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselStories.length);
    }, 6000); // Changes slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const activeStory = carouselStories[currentIndex];

  return (
    <section className="bg-[#F6F9FC] py-16 lg:py-24 font-sans border-b border-slate-200 overflow-hidden">
      <div className="site-container max-w-[1100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ─── Left: Editorial Text & Progress Bar ─── */}
          <div className="lg:col-span-5 flex flex-col justify-between relative min-h-[280px] lg:min-h-[360px] order-2 lg:order-1">
            {/* Text Content (Crossfades on change) */}
            <div className="flex-grow flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-start"
                >
                  {/* Stripe-style Category Tag with vertical line */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-[3px] h-4 bg-indigo-600 rounded-full" />
                    <span className="text-[14px] font-semibold text-[#0A2540] tracking-wide">
                      {activeStory.tag || activeStory.category}
                    </span>
                  </div>

                  {/* Massive Headline (No description, just like Stripe) */}
                  <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-bold text-[#0A2540] leading-[1.1] tracking-tight mb-8">
                    {activeStory.title}
                  </h2>

                  {/* Stripe-style 'Read more' link */}
                  <Link
                    to={activeStory.href}
                    className="group/link flex items-center text-[15px] font-semibold text-[#0A2540] hover:text-[#0A2540] transition-colors"
                  >
                    Read more
                    <RiArrowRightSLine className="w-5 h-5 ml-0.5 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Progress Indicators */}
            <div className="absolute bottom-0 left-0 w-full flex gap-2">
              {carouselStories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="h-[3px] flex-1 bg-slate-200 overflow-hidden rounded-full cursor-pointer"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  {i === currentIndex && (
                    <motion.div
                      layoutId="progress"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="h-full bg-indigo-600 rounded-full"
                    />
                  )}
                  {i < currentIndex && (
                    <div className="h-full w-full bg-indigo-600 rounded-full opacity-30" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ─── Right: Image Slideshow ─── */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Link
              to={activeStory.href}
              className="block relative aspect-[16/10] w-full rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-white ring-1 ring-slate-900/5 group"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={activeStory.image}
                  alt={activeStory.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </AnimatePresence>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
