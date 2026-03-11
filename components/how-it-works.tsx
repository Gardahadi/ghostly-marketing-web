"use client";

import { motion } from "motion/react";
import { OverviewMockup } from "./mockups";

const steps = [
  {
    step: "01",
    title: "Fill Out Our Form",
    description:
      "Tell us about your site — your domain, what you want to track, and what matters most to you. The contact form takes about 2 minutes.",
    detail: "No code changes required at this stage. Just tell us about your needs.",
  },
  {
    step: "02",
    title: "We Set Up Your Dashboard",
    description:
      "Our team handles everything — SDK integration, data pipeline configuration, and dashboard customization. You get a Ghost Monitor instance tailored to your site.",
    detail: "We typically have you live within 48 hours of first contact.",
  },
];

export function HowItWorks({ onContact }: { onContact: () => void }) {
  return (
    <section className="relative py-32" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 text-xs font-medium"
            style={{ background: "#f4f4f5", border: "1px solid #e4e4e7", color: "#52525b" }}
          >
            How It Works
          </div>
          <h2 className="text-4xl font-bold tracking-tight" style={{ color: "#09090b" }}>
            Up and running in 48&nbsp;hours
          </h2>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "#6b7280" }}>
            We handle the heavy lifting. You get a fully configured dashboard without touching your codebase.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex gap-5"
              >
                <div className="flex flex-col items-center gap-2 pt-1">
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-xl text-xs font-bold font-mono flex-shrink-0"
                    style={{ background: "#09090b", color: "#ffffff" }}
                  >
                    {s.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 w-px" style={{ minHeight: "40px", background: "linear-gradient(to bottom, #e4e4e7, transparent)" }} />
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="text-lg font-semibold tracking-tight mb-2" style={{ color: "#09090b" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: "#6b7280" }}>{s.description}</p>
                  <p className="text-xs" style={{ color: "#9ca3af" }}>{s.detail}</p>
                </div>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "#09090b", color: "#ffffff", boxShadow: "0 4px 14px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.08)" }}
              >
                Get Started
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #e4e4e7", boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)" }}>
              <div className="px-4 py-2 flex items-center gap-2" style={{ background: "#fafafa", borderBottom: "1px solid #e4e4e7" }}>
                <span style={{ color: "#9ca3af", fontSize: "9px", fontWeight: 500 }}>YOUR DASHBOARD · STEP 2 RESULT</span>
                <span className="ml-auto inline-flex items-center gap-1" style={{ color: "#16a34a", fontSize: "9px" }}>
                  <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "#16a34a", boxShadow: "0 0 4px #16a34a" }} />
                  Live data
                </span>
              </div>
              <OverviewMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
