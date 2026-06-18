import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  RiFilePdf2Line,
  RiDownloadCloud2Line,
  RiInformationLine,
} from "react-icons/ri";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Data Import ──────────────────────────────────────────────────────────────
import { reports } from "@/data/investors";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function FinancialReports() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-[#F6F9FC] py-24 lg:py-32 font-sans border-b border-rule"
      aria-label="Financial Reports"
    >
      <div className="site-container max-w-6xl">
        {/* ── Section Header ── */}
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <h2 className="text-[28px] sm:text-[32px] font-medium text-[#0A2540] tracking-tight mb-4">
              Financial Reports
            </h2>
            <p className="text-[16px] text-[#425466] mb-6">
              Download our latest annual reports, quarterly results, and
              original listing prospectuses. All documents are provided in
              standard PDF format.
            </p>

            {/* Currency Disclaimer Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-rule rounded-md text-[13px] text-[#425466]">
              <RiInformationLine className="w-4 h-4 text-accent shrink-0" />
              <span>
                <strong>Reporting Currency:</strong> All financial disclosures
                are reported in Nigerian Naira (NGN), with US Dollar (USD)
                translations provided for international convenience.
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Document Grid ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reports.map((report) => (
            <motion.div key={report.id} variants={fadeUp} className="h-full">
              <Card className="flex flex-col h-full shadow-sm border-rule bg-white hover:border-accent/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(10,37,64,0.05)]">
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  {/* Top Bar: Icon & Date */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                      <RiFilePdf2Line className="w-6 h-6" />
                    </div>
                    <span className="text-[12px] font-bold text-subtle uppercase tracking-widest bg-[#F6F9FC] px-2 py-1 rounded-sm border border-rule">
                      {report.date}
                    </span>
                  </div>

                  {/* Document Info */}
                  <h3 className="text-[20px] font-bold text-[#0A2540] tracking-tight mb-2">
                    {report.title}
                  </h3>
                  <p className="text-[14px] text-[#425466] leading-[1.6] mb-8">
                    {report.subtitle}
                  </p>

                  {/* Footer Actions */}
                  <div className="mt-auto pt-6 border-t border-rule flex items-center justify-between">
                    <span className="font-mono text-[12px] text-subtle">
                      {report.size}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 font-bold uppercase tracking-widest text-[11px] text-[#0A2540] border-rule hover:bg-[#F6F9FC]"
                    >
                      <RiDownloadCloud2Line className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
