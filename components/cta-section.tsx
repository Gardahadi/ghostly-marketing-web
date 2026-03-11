"use client";

import { motion } from "motion/react";

export function CtaSection({ onContact }: { onContact: () => void }) {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: "#f8f8f9" }}>
      {/* Top/bottom edge blends */}
      <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, #ffffff, transparent)" }} aria-hidden />
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, #ffffff, transparent)" }} aria-hidden />

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8 text-2xl font-bold"
            style={{ background: "#09090b", color: "#ffffff", boxShadow: "0 8px 24px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)" }}
          >
            ◈
          </div>

          <h2 className="text-5xl font-bold tracking-tight mb-6" style={{ color: "#09090b" }}>
            Ready to Stop Flying Blind?
          </h2>

          <p className="text-lg leading-relaxed mb-10" style={{ color: "#6b7280" }}>
            Join businesses already using Ghost Monitor to understand their AI-era
            traffic. Get a custom dashboard — no code required, no long-term
            contract, and your first insights in 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={onContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold"
              style={{
                background: "#09090b",
                color: "#ffffff",
                boxShadow: "0 8px 28px rgba(0,0,0,0.20), 0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              Contact Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </div>

          {/* Trust bar */}
          <div
            className="flex items-center justify-center gap-8 mt-14 pt-10"
            style={{ borderTop: "1px solid #e4e4e7" }}
          >
            {[
              { icon: "⚡", label: "48-hour setup"     },
              { icon: "🔒", label: "No vendor lock-in" },
              { icon: "📊", label: "Custom dashboard"  },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-base">{icon}</span>
                <span className="text-xs" style={{ color: "#9ca3af" }}>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
