import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { RiMailSendLine, RiCheckLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function NewsletterStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically handle the API call to your newsletter service
    }
  };

  return (
    <section
      className="bg-[#FAFAFA] py-20 lg:py-28 font-sans border-b border-slate-200 relative overflow-hidden"
      aria-label="Newsletter Subscription"
    >
      {/* ─── Soft Abstract Background ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        {/* Very subtle, light abstract blur from Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2529&auto=format&fit=crop"
          alt="Abstract background"
          className="w-full h-full object-cover opacity-[0.08] grayscale-[50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-[#FAFAFA]" />
      </div>

      <div className="site-container max-w-3xl relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="flex flex-col items-center text-center"
        >
          {/* Icon */}
          <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-indigo-100/50">
            <RiMailSendLine className="w-6 h-6 text-indigo-600" />
          </div>

          {/* Text Content */}
          <h2 className="text-[32px] sm:text-[40px] font-semibold text-slate-900 tracking-tight mb-4">
            Stay informed.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-slate-600 leading-[1.6] mb-10 max-w-lg font-normal">
            Get the latest press releases, product updates, and corporate
            announcements delivered directly to your inbox.
          </p>

          {/* Form */}
          <div className="w-full max-w-md mx-auto">
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center w-full"
              >
                <Input
                  type="email"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 pl-6 pr-[130px] rounded-full bg-white border-slate-200 shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-600 text-[15px] text-slate-900 placeholder:text-slate-400 transition-shadow"
                />
                <Button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 h-11 px-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-[14px] shadow-sm transition-all"
                >
                  Subscribe
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-14 w-full flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full font-medium"
              >
                <RiCheckLine className="w-5 h-5" />
                Subscription confirmed
              </motion.div>
            )}

            {/* Legal Note */}
            <p className="text-[12px] text-slate-400 mt-4 font-medium">
              By subscribing, you agree to our{" "}
              <a
                href="/privacy"
                className="text-slate-500 hover:text-indigo-600 transition-colors underline underline-offset-2"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
