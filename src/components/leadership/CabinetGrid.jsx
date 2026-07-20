import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PersonCard from "@/components/shared/PersonCard";

// ─── Asset Imports ────────────────────────────────────────────────────────────
import tundeImg from "@/assets/images/tunde.png";
import ovieImg from "@/assets/images/ovie.png";
import aaravImg from "@/assets/images/aarav.png";
import felixImg from "@/assets/images/felix.png";
import emekaImg from "@/assets/images/emeka.png";
import solaImg from "@/assets/images/sola.png";
import adamuImg from "@/assets/images/adamu.png";
import angelaImg from "@/assets/images/angela.png";
import tomiyeImg from "@/assets/images/tomiye.png";

// ─── The Operators Data (AWS/Stripe Enterprise Tone) ──────────────────────────
const cabinet = [
  {
    id: "tunde",

    fullName: "Mr. Tunde Adesanya",
    title: "Chief Executive Officer",
    bio: "Setting the strategic vision and architecting the capital allocation required for continental scale.",
    image: tundeImg,
    colorTheme: "bg-[#0A2540]", // Navy
  },
  {
    id: "ovie",

    fullName: "Mr. Ovie Ejiro",
    title: "Chief Financial Officer",
    bio: "Driving unit economics, managing capital efficiency, and scaling financial infrastructure.",
    image: ovieImg,
    colorTheme: "bg-[#4338CA]", // Indigo
  },
  {
    id: "aarav",

    fullName: "Mr. Aarav Kumar Sharma",
    title: "Chief Operating Officer",
    bio: "Overseeing global operations and ensuring 63MW of mission-critical infrastructure operates flawlessly.",
    image: aaravImg,
    colorTheme: "bg-[#047857]", // Emerald
  },
  {
    id: "felix",

    fullName: "Mr. Felix Onwudiwe",
    title: "Chief Technology Officer",
    bio: "Architecting the proprietary cloud stack and leading the deployment of the BridgeIntelligence AI layer.",
    image: felixImg,
    colorTheme: "bg-[#B45309]", // Amber
  },
  {
    id: "emeka",

    fullName: "Mr. Emeka Osagie",
    title: "Chief Product Officer",
    bio: "Defining the product roadmap and engineering the user experience across all enterprise software suites.",
    image: emekaImg,
    colorTheme: "bg-[#0369A1]", // Ocean Blue
  },
  {
    id: "sola",

    fullName: "Mr. Sola Adegbite",
    title: "Chief Revenue Officer",
    bio: "Accelerating continental expansion and leading strategic acquisition of eight-figure enterprise portfolios.",
    image: solaImg,
    colorTheme: "bg-[#BE123C]", // Rose
  },
  {
    id: "adamu",

    fullName: "Mr. Adamu Shafiu",
    title: "General Counsel",
    bio: "Navigating complex cross-border regulatory frameworks to ensure seamless, compliant expansion.",
    image: adamuImg,
    colorTheme: "bg-[#0F766E]", // Teal
  },
  {
    id: "angela",

    fullName: "Ms. Angela Ikpeama",
    title: "Chief Communications Officer",
    bio: "Controlling the corporate narrative and aligning external communications with long-term strategic goals.",
    image: angelaImg,
    colorTheme: "bg-[#86198F]", // Fuchsia
  },
  {
    id: "tomiye",

    fullName: "Mrs. Tomiye Alagoa",
    title: "Chief People Officer",
    bio: "Scaling the human capital layer, acquiring top-tier engineering talent, and maintaining high-performance output.",
    image: tomiyeImg,
    colorTheme: "bg-[#5B21B6]", // Deep Violet
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CabinetGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-white py-24 lg:py-32 border-b border-rule font-sans overflow-hidden"
      aria-label="Executive Management"
    >
      <div className="site-container">
        {/* ── Section Header ── */}
        <div className="max-w-2xl mb-16 lg:mb-24 relative z-10">
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="w-8 h-px bg-accent" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent">
                Executive Management
              </span>
            </div>

            <h2 className="text-[40px] sm:text-[48px] font-medium text-[#0A2540] leading-[1.1] tracking-tight mb-6">
              Powering the Bridge: The Executive Team
            </h2>
            <p className="text-[18px] text-[#425466] leading-[1.6]">
              The core executive team responsible for executing our continental
              mandate. Each leader brings a unique expertise, but together they
              form the strategic brain trust driving Bridgesoft's growth and
              innovation across Africa.
            </p>
          </motion.div>
        </div>

        {/* ── 9-Card Dynamic Geometric Grid ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          // Utilizing a dynamic 3-column stagger to match the Figma energy
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cabinet.map((person, index) => {
            // Create a visually stunning cascading masonry effect for the 3 columns
            let staggerClass = "";
            if (index % 3 === 1) staggerClass = "lg:mt-12";
            if (index % 3 === 2) staggerClass = "lg:mt-24";

            return (
              <motion.div
                key={person.id}
                variants={fadeUp}
                className={staggerClass}
              >
                <PersonCard person={person} colorTheme={person.colorTheme} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
