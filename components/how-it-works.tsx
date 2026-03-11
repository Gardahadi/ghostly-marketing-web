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

export function HowItWorks() {
  return (
    <section
      className="relative py-32"
      style={{ background: "oklch(0.095 0.013 260)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, oklch(0.55 0.14 250 / 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 text-xs font-medium"
            style={{
              background: "oklch(0.78 0.16 195 / 0.08)",
              border: "1px solid oklch(0.78 0.16 195 / 0.20)",
              color: "oklch(0.75 0.14 195)",
            }}
          >
            How It Works
          </div>
          <h2
            className="text-4xl font-bold tracking-tight"
            style={{ color: "oklch(0.97 0.005 260)" }}
          >
            Up and running in 48&nbsp;hours
          </h2>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "oklch(0.55 0.02 260)" }}>
            We handle the heavy lifting. You get a fully configured dashboard
            without touching your codebase.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
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
                {/* Step number + connector */}
                <div className="flex flex-col items-center gap-2 pt-1">
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-xl text-xs font-bold font-mono flex-shrink-0"
                    style={{
                      background: "oklch(0.78 0.16 195 / 0.12)",
                      border: "1px solid oklch(0.78 0.16 195 / 0.30)",
                      color: "oklch(0.78 0.16 195)",
                    }}
                  >
                    {s.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="flex-1 w-px"
                      style={{
                        minHeight: "40px",
                        background:
                          "linear-gradient(to bottom, oklch(0.78 0.16 195 / 0.25), transparent)",
                      }}
                    />
                  )}
                </div>

                <div className="pb-4">
                  <h3
                    className="text-lg font-semibold tracking-tight mb-2"
                    style={{ color: "oklch(0.97 0.005 260)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: "oklch(0.57 0.02 260)" }}>
                    {s.description}
                  </p>
                  <p className="text-xs" style={{ color: "oklch(0.42 0.015 260)" }}>
                    {s.detail}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="mailto:hello@ghostly.dev"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "oklch(0.78 0.16 195)",
                  color: "oklch(0.08 0.015 260)",
                  boxShadow:
                    "0 0 20px oklch(0.78 0.20 195 / 0.30), 0 4px 12px oklch(0.05 0.01 260 / 0.3)",
                }}
              >
                Get Started
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="absolute -inset-4 rounded-2xl pointer-events-none"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse at center, oklch(0.78 0.16 195 / 0.07) 0%, transparent 70%)",
              }}
            />
            <div
              className="rounded-xl overflow-hidden text-xs"
              style={{
                border: "1px solid oklch(0.22 0.02 260 / 0.5)",
              }}
            >
              <div
                className="px-4 py-2 flex items-center gap-2"
                style={{
                  background: "oklch(0.10 0.015 260)",
                  borderBottom: "1px solid oklch(0.18 0.015 260 / 0.5)",
                }}
              >
                <span style={{ color: "oklch(0.45 0.02 260)", fontSize: "9px", fontWeight: 500 }}>
                  YOUR DASHBOARD · STEP 2 RESULT
                </span>
                <span
                  className="ml-auto inline-flex items-center gap-1"
                  style={{ color: "oklch(0.60 0.14 145)", fontSize: "9px" }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: "oklch(0.72 0.16 145)", boxShadow: "0 0 4px oklch(0.72 0.16 145)" }}
                  />
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
