import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PersonCard from "@/components/shared/PersonCard";

// ─── Asset Imports (Kept exactly as requested) ───────────────────────────────
import murigiImg from "@/assets/images/murigi.png";
import tundeImg from "@/assets/images/tunde.png";
import ovieImg from "@/assets/images/ovie.png";
import anwarImg from "@/assets/images/anwar.png";
import davidImg from "@/assets/images/saro.png";
import damilolaImg from "@/assets/images/damilola.png";
import nalediImg from "@/assets/images/naledi.png";
import taranjeetImg from "@/assets/images/taranjeet.png";
import amiraImg from "@/assets/images/amira.png";
import adeyemiImg from "@/assets/images/adeyemi.png";
import ibiereImg from "@/assets/images/ibere.png";

// ─── Board Data (Updated from your leadership.js structure) ───────────────────
const boardMembers = [
  {
    id: "murigi",
    fullName: "Mr. Murigi Kiprop",
    title: "Non-Executive Chairman",
    image: murigiImg,
    bio: "Former Managing Director of Accenture East Africa. Holds an MBA from INSEAD. Chairs the Governance & Nominations Committee.",
    colorTheme: "bg-[#0A2540]", // Deep Brand Navy
  },
  {
    id: "tunde",
    fullName: "Mr. Tunde Adesanya",
    title: "Chief Executive Officer",
    image: tundeImg,
    bio: "Appointed CEO 2019. Previously CEO, Bridgesoft Cloud from its inception in 2009.",
    colorTheme: "bg-[#0369A1]", // Ocean Blue
  },
  {
    id: "ovie",
    fullName: "Mr. Ovie Ejiro",
    title: "Chief Financial Officer",
    image: ovieImg,
    bio: "Former CFO of Corporate & Investment Banking at Stanbic IBTC Bank. Fellow of ICAN.",
    colorTheme: "bg-[#4338CA]", // Indigo
  },
  {
    id: "anwar",
    fullName: "Mr. Anwar Alhassan",
    title: "Co-Founder & NED",
    image: anwarImg,
    bio: "Co-founder, Former Chairman 2019–2025, CEO 1998–2019. Built Bridgesoft from a 3-person startup to a $28B enterprise.",
    colorTheme: "bg-[#B45309]", // Amber
  },
  {
    id: "david",
    fullName: "Mr. David Saro",
    title: "Co-Founder & NED",
    image: davidImg,
    bio: "Co-Founder, Former President & CTO, Co-recipient of the ACM SIGMOD Systems Award (2016).",
    colorTheme: "bg-[#BE123C]", // Rose
  },
  {
    id: "damilola",
    fullName: "Mrs. Damilola Shonibar",
    title: "Independent NED",
    image: damilolaImg,
    bio: "Former CFO of NSIA and ICAN Fellow. Spent 14 years as a PwC Nigeria audit partner leading the TMT practice.",
    colorTheme: "bg-[#0F766E]", // Teal
  },
  {
    id: "naledi",
    fullName: "Ms. Naledi Dlamini",
    title: "Independent NED",
    image: nalediImg,
    bio: "Former CIO of Standard Bank Group. PhD in Computer Science, UCT. Former NED of the Johannesburg Stock Exchange.",
    colorTheme: "bg-[#5B21B6]", // Deep Violet
  },
  {
    id: "taranjeet",
    fullName: "Mr. Taranjeet Bhatia",
    title: "Independent NED",
    image: taranjeetImg,
    bio: "30-year investment banking veteran. Former MD and Head of Africa Investment Banking at Standard Chartered Bank London.",
    colorTheme: "bg-[#047857]", // Emerald
  },
  {
    id: "amira",
    fullName: "Mrs. Amira Bekele",
    title: "Independent NED",
    image: amiraImg,
    bio: "Senior Advisor of the African Union's Digital Transformation Strategy Secretariat. MSc from LSE.",
    colorTheme: "bg-[#C2410C]", // Orange
  },
  {
    id: "adeyemi",
    fullName: "Mr. Adeyemi Bankole",
    title: "Independent NED",
    image: adeyemiImg,
    bio: "General Partner of Sahel Capital's technology fund. Former Head of Tech Investment Banking at Coronation Merchant Bank.",
    colorTheme: "bg-[#1D4ED8]", // Royal Blue
  },
  {
    id: "ibiere",
    fullName: "Ms. Ibiere Briggs",
    title: "Independent NED",
    image: ibiereImg,
    bio: "Cybersecurity specialist and founder of CyberShield Africa. CISSP certified. MSc from Royal Holloway.",
    colorTheme: "bg-[#86198F]", // Fuchsia
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function BoardGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-[#F6F9FC] py-24 lg:py-32 font-sans border-b border-rule overflow-hidden"
      aria-label="Board of Directors"
    >
      <div className="site-container">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* ── LEFT: Sticky Editorial Section (Figma Style) ── */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-40 shrink-0">
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
            >
              <h2 className="text-[40px] sm:text-[48px] font-medium text-[#0A2540] leading-[1.1] tracking-tight mb-6">
                Board of <br /> Directors
              </h2>
              <p className="text-[17px] text-[#425466] leading-[1.6]">
                Our board combines decades of public sector governance with deep
                technical expertise. They provide the oversight required to
                scale Bridgesoft's infrastructure securely across highly
                regulated continental markets.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: Dynamic Color Grid ── */}
          <div className="w-full lg:w-2/3">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={container}
              // Using a masonry-style staggered layout
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
            >
              {boardMembers.map((person, index) => (
                <motion.div
                  key={person.id}
                  variants={fadeUp}
                  // Pushing the even columns down slightly to create an asymmetrical masonry look
                  className={index % 2 !== 0 ? "sm:mt-12" : ""}
                >
                  <PersonCard person={person} colorTheme={person.colorTheme} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
