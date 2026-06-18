import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiArrowRightLine,
  RiCheckLine,
  RiMapPinLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Make sure your map.svg is in this exact folder
import mapSvg from "@/assets/images/map.svg";

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// --- Updated Token Inputs ---
const inputClass = cn(
  "h-11 rounded-xl border-rule bg-white px-4 text-[14px] text-ink font-sans",
  "placeholder:text-subtle/50 shadow-sm transition-all duration-200",
  "hover:border-subtle/30",
  "focus-visible:border-accent focus-visible:ring-4 focus-visible:ring-accent/10 focus-visible:outline-none",
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F6F9FC] font-sans selection:bg-accent/20 pt-32 pb-20 px-6 flex flex-col items-center">
      {/* --- Educative Hero Section --- */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="max-w-3xl text-center mb-12"
      >
        <p className="text-[13px] font-bold tracking-widest text-accent uppercase mb-4">
          Connect with us
        </p>
        <h1 className="text-[40px] md:text-[48px] font-bold text-ink leading-tight tracking-tight mb-6">
          Let's build the future together.
        </h1>
        <p className="text-[16px] text-subtle leading-relaxed max-w-2xl mx-auto">
          Whether you’re looking to deploy BridgeIntelligence AI across your
          enterprise, explore compliance solutions, or just talk technical
          specs, our team is ready to guide you.
        </p>
      </motion.div>

      {/* --- Main Card Layout --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="w-full max-w-[1100px] bg-white rounded-[24px] shadow-[0_20px_40px_rgb(10,37,64,0.06)] border border-rule overflow-hidden flex flex-col lg:flex-row"
      >
        {/* === LEFT SIDE: Interactive Form === */}
        <div className="flex-1 p-10 lg:p-14 z-10 bg-white">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6">
                  <RiCheckLine className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-[24px] font-bold text-ink tracking-tight mb-3">
                  Request received.
                </h3>
                <p className="text-[15px] text-subtle leading-relaxed max-w-[320px] mb-8">
                  A product specialist will review your requirements and reach
                  out via email within one business day.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="rounded-full text-[13px] font-semibold text-ink border-rule hover:bg-gray-50"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div className="mb-2">
                  <h2 className="text-[20px] font-bold text-ink tracking-tight">
                    Get in touch
                  </h2>
                  <p className="text-[14px] text-subtle mt-1">
                    Fill out the form below and we'll route you to the right
                    expert.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold text-ink">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Jane Doe"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold text-ink">
                      Company
                    </label>
                    <Input
                      type="text"
                      placeholder="Acme Corp"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold text-ink">
                    Work Email
                  </label>
                  <Input
                    type="email"
                    placeholder="jane@company.com"
                    className={inputClass}
                    required
                  />
                  <p className="text-[11px] text-subtle/80 pl-1">
                    Please use your corporate email to ensure faster
                    verification.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold text-ink">
                    How can we help?
                  </label>
                  <select
                    required
                    className={cn(inputClass, "w-full appearance-none")}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="demo">Enterprise Demo</option>
                    <option value="technical">Technical Integration</option>
                    <option value="partnership">Partnerships</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold text-ink">
                    Project Details
                  </label>
                  <textarea
                    placeholder="Tell us about your infrastructure, compliance needs, or specific pain points..."
                    rows={4}
                    className={cn(
                      inputClass,
                      "h-auto resize-none py-3 leading-relaxed",
                    )}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className={cn(
                    "h-12 w-full mt-4 rounded-none",
                    "bg-[#0a2540] text-white font-semibold text-[14px]",
                    "shadow-[0_8px_20px_rgba(10,37,64,0.15)]",
                    "hover:bg-[#12365c] hover:-translate-y-0.5 transition-all duration-200",
                    "flex items-center justify-center gap-2 group",
                  )}
                >
                  Submit Request
                  <RiArrowRightLine className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* === RIGHT SIDE: Map & Floating Info Card === */}
        <div className="relative w-full lg:w-[45%] bg-[#F6F9FC] border-t lg:border-t-0 lg:border-l border-rule overflow-hidden p-8 lg:p-12 flex flex-col justify-end min-h-[400px]">
          {/* Map Background Integration (True Color) */}
          <div className="absolute inset-0 z-0">
            <img
              src={mapSvg}
              alt="Map Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Info Card (Glassmorphism to ensure readability) */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md border border-rule shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[20px] p-8 space-y-8 mt-auto">
            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-ink tracking-tight">
                Global infrastructure, <br /> localized support.
              </h3>

              {/* Location Details */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <RiMapPinLine className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-ink mb-1">
                    Bridgesoft HQ
                  </h4>
                  <p className="text-[13px] text-subtle leading-relaxed">
                    Bridgesoft Campus
                    <br />
                    Eko Atlantic City
                    <br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3 pt-6 border-t border-rule">
              <a
                href="mailto:hello@bridgesoft.com"
                className="flex items-center gap-3 group w-fit"
              >
                <div className="w-8 h-8 rounded-full border border-rule flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-colors bg-white">
                  <RiMailLine className="w-4 h-4 text-subtle group-hover:text-accent transition-colors" />
                </div>
                <span className="text-[14px] font-medium text-ink group-hover:text-accent transition-colors">
                  hello@bridgesoft.com
                </span>
              </a>

              <a
                href="tel:+23412345678"
                className="flex items-center gap-3 group w-fit"
              >
                <div className="w-8 h-8 rounded-full border border-rule flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-colors bg-white">
                  <RiPhoneLine className="w-4 h-4 text-subtle group-hover:text-accent transition-colors" />
                </div>
                <span className="text-[14px] font-medium text-ink group-hover:text-accent transition-colors">
                  +234 (0) 123 456 7890
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
