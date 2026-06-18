import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function NewsCard({ story }) {
  return (
    <Link
      to={story.href}
      className="group flex flex-col h-full bg-white border border-slate-200/60 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
    >
      {/* Image Container with Zoom on Hover */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        {/* Meta Line: Badge & Date */}
        <div className="flex items-center gap-3 mb-4">
          <Badge className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-none px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide shadow-none">
            {story.tag}
          </Badge>
          <span className="text-[13px] font-medium text-slate-500">
            {story.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[20px] font-semibold text-slate-900 leading-[1.3] tracking-tight mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
          {story.title}
        </h3>

        {/* Description */}
        <p className="text-[15px] text-slate-600 leading-[1.6] mb-8 line-clamp-2 font-normal">
          {story.desc}
        </p>

        {/* Read Article Link (Pushed to bottom) */}
        <div className="mt-auto flex items-center gap-2 text-[14px] font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors">
          Read article
          <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
