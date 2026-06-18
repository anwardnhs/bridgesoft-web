import { cn } from "@/lib/utils";
import { categories } from "@/data/newsroom";

export default function CategoryFilter({ activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300 outline-none border",
              isActive
                ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-sm",
            )}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
