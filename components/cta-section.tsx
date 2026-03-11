"use client";

import { motion } from "motion/react";

export function CtaSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(0.78 0.16 195 / 0.08) 0%, transparent 65%)",
          }}
        />
        {/* Horizontal line accents */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 195 / 0.20), transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 195 / 0.20), transparent)" }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Ghost icon */}
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8 text-2xl"
            style={{
              background: "oklch(0.78 0.16 195 / 0.10)",
              border: "1px solid oklch(0.78 0.16 195 / 0.25)",
              boxShadow: "0 0 30px oklch(0.78 0.16 195 / 0.15)",
            }}
          >
            ◈
          </div>

          <h2
            className="text-5xl font-bold tracking-tight mb-6"
            style={{ color: "oklch(0.97 0.005 260)" }}
          >
            Ready to Stop Flying Blind?
          </h2>

          <p className="text-lg leading-relaxed mb-10" style={{ color: "oklch(0.58 0.02 260)" }}>
            Join businesses already using Ghost Monitor to understand their AI-era
            traffic. Get a custom dashboard — no code required, no long-term
            contract, and your first insights in 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:hello@ghostly.dev"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold"
              style={{
                background: "oklch(0.78 0.16 195)",
                color: "oklch(0.08 0.015 260)",
                boxShadow:
                  "0 0 32px oklch(0.78 0.20 195 / 0.40), 0 8px 24px oklch(0.05 0.01 260 / 0.4)",
              }}
            >
              Contact Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
            <span className="text-sm" style={{ color: "oklch(0.42 0.015 260)" }}>
              hello@ghostly.dev
            </span>
          </div>

          {/* Trust bar */}
          <div
            className="flex items-center justify-center gap-8 mt-14 pt-10"
            style={{ borderTop: "1px solid oklch(0.18 0.015 260 / 0.5)" }}
          >
            {[
              { icon: "⚡", label: "48-hour setup" },
              { icon: "🔒", label: "No vendor lock-in" },
              { icon: "📊", label: "Custom dashboard" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-base">{icon}</span>
                <span className="text-xs" style={{ color: "oklch(0.48 0.015 260)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
