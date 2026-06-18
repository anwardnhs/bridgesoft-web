import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function PersonCard({ person, colorTheme }) {
  return (
    <motion.div
      className="group relative w-full h-[400px] cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* ── Background Geometric Shape (Figma Style) ── */}
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-500 ease-out",
          colorTheme,
          // Subtle rotation for the resting state, straightens on hover
          "group-hover:rotate-0 rotate-1 rounded-2xl md:rounded-[2rem]",
        )}
        // Using an asymmetrical clip-path to match the Figma reference
        style={{ clipPath: "polygon(0 0, 100% 4%, 100% 100%, 0 96%)" }}
      />

      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
        {/* Top Section: Text */}
        <div className="relative z-20 transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="text-[24px] md:text-[28px] font-bold text-white tracking-tight leading-tight">
            {person.firstName} <br />
            <span className="text-white/90">
              {person.fullName.split(" ").slice(1).join(" ")}
            </span>
          </h3>
          <div className="text-[13px] font-bold text-white/80 uppercase tracking-widest mt-3">
            {person.title}
          </div>
        </div>

        {/* Bottom Section: Image & Bio Reveal */}
        <div className="relative z-20 flex items-end justify-between">
          {/* Bio text that fades in and slides up over the image space on hover */}
          <div className="absolute bottom-0 left-0 right-16 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
            <p className="text-[14px] text-white/95 leading-[1.6] font-medium">
              {person.bio}
            </p>
          </div>

          {/* The Image (Circular crop to overlap the geometric background cleanly) */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl ml-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:opacity-0">
            <img
              src={person.image}
              alt={person.fullName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
