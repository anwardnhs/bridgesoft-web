import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { stories } from "@/data/newsroom";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

export default function StoriesGrid({ searchQuery }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [visibleCount, setVisibleCount] = useState(5);

  // ─── Filter Logic ───
  const filteredStories = stories.filter((story) => {
    const title = story?.title || "";
    const desc = story?.desc || "";
    const query = (searchQuery || "").toLowerCase();

    const matchesSearch =
      title.toLowerCase().includes(query) || desc.toLowerCase().includes(query);
    const isNotFeatured = !story.featured; // Skip the featured story

    return matchesSearch && isNotFeatured;
  });

  const displayedStories = filteredStories.slice(0, visibleCount);

  return (
    <section
      className="bg-white py-12 lg:py-20 font-sans"
      aria-label="News Feed"
    >
      <div className="site-container max-w-6xl">
        {/* ─── Section Header ─── */}
        <div className="mb-10 flex flex-col items-start">
          <h2 className="text-[32px] lg:text-[40px] font-semibold text-slate-900 tracking-tight mb-2">
            News
          </h2>
          <button
            onClick={() => setVisibleCount(stories.length)}
            className="flex items-center text-[15px] font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            All news
            <RiArrowRightSLine className="w-5 h-5 ml-0.5" />
          </button>
        </div>

        {/* ─── List Layout ─── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="flex flex-col"
        >
          {displayedStories.length === 0 ? (
            <div className="py-12 text-slate-500">
              No stories match your search.
            </div>
          ) : (
            displayedStories.map((story) => (
              <motion.div key={story.id} variants={fadeUp}>
                <Link
                  to={story.href}
                  className="group block py-8 border-t border-slate-200 transition-colors hover:bg-slate-50/50 -mx-4 px-4 rounded-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                    {/* Column 1: Date */}
                    <div className="md:col-span-2 lg:col-span-2">
                      <span className="text-[14px] text-slate-500 font-medium md:mt-1 block">
                        {story.date}
                      </span>
                    </div>

                    {/* Column 2: Category & Title */}
                    <div className="md:col-span-6 lg:col-span-7 flex flex-col pr-0 md:pr-4">
                      <span className="text-[14px] font-medium text-indigo-600 mb-2">
                        {story.tag}
                      </span>
                      <h3 className="text-[18px] sm:text-[20px] font-semibold text-slate-900 leading-[1.4] tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                        {story.title}
                      </h3>
                    </div>

                    {/* Column 3: Thumbnail Image */}
                    <div className="md:col-span-4 lg:col-span-3 mt-4 md:mt-0">
                      <div className="relative aspect-[16/9] w-full max-w-[280px] overflow-hidden rounded-[12px] bg-slate-100 ring-1 ring-slate-200/50">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* ─── Load More Button ─── */}
        {visibleCount < filteredStories.length && (
          <div className="mt-12">
            <Button
              onClick={() => setVisibleCount((prev) => prev + 5)}
              variant="outline"
              className="rounded-full h-10 px-6 text-slate-700 border-slate-200 hover:bg-slate-50 transition-all font-medium text-[14px]"
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
