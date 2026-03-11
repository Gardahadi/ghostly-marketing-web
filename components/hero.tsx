"use client";

import { motion } from "motion/react";
import { OverviewMockup } from "./mockups";

export function Hero({ onContact }: { onContact: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-14" style={{ background: "#ffffff" }}>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(#f0f0f1 1px, transparent 1px), linear-gradient(90deg, #f0f0f1 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          opacity: 0.6,
        }}
      />
      {/* Fade grid at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 text-xs font-medium"
                style={{ background: "#f4f4f5", border: "1px solid #e4e4e7", color: "#52525b" }}
              >
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#09090b" }} />
                Now in early access
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
              style={{ color: "#09090b" }}
            >
              Your Website Has{" "}
              <span style={{ color: "#09090b", borderBottom: "3px solid #09090b" }}>Ghosts.</span>
              <br />
              We&rsquo;re Here to Track&nbsp;them.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed mb-10"
              style={{ color: "#6b7280" }}
            >
              Ghost Monitor reveals how AI crawlers, LLMs, and bots are actually
              interacting with your site — real data that traditional analytics
              misses entirely. Stop flying blind in the age of AI&nbsp;search.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "#09090b",
                  color: "#ffffff",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.08)",
                }}
              >
                Contact Us
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="text-xs" style={{ color: "#9ca3af" }}>
                No setup fees &middot; Custom onboarding
              </span>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 mt-12 pt-8"
              style={{ borderTop: "1px solid #e4e4e7" }}
            >
              {[
                { value: "47K+", label: "AI visits tracked daily" },
                { value: "14",   label: "AI platforms detected"   },
                { value: "99.9%", label: "uptime"                 },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-xl font-bold font-mono tracking-tight" style={{ color: "#09090b", letterSpacing: "-0.03em" }}>{value}</div>
                  <div className="text-xs" style={{ color: "#9ca3af" }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:block hidden"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "perspective(1200px) rotateX(2deg) rotateY(-4deg)" }}
            >
              <OverviewMockup />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
