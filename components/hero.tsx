"use client";

import { motion } from "motion/react";
import { OverviewMockup } from "./mockups";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
      {/* Ambient background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        {/* Teal glow top-left */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.16 195 / 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Blue glow bottom-right */}
        <div
          className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.14 250 / 0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.85 0.01 260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.85 0.01 260) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 text-xs font-medium"
                style={{
                  background: "oklch(0.78 0.16 195 / 0.10)",
                  border: "1px solid oklch(0.78 0.16 195 / 0.25)",
                  color: "oklch(0.82 0.14 195)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "oklch(0.78 0.16 195)",
                    boxShadow: "0 0 6px oklch(0.78 0.16 195)",
                    display: "inline-block",
                  }}
                />
                Now in early access
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
              style={{ color: "oklch(0.97 0.005 260)" }}
            >
              Your Website Has{" "}
              <span
                style={{
                  color: "oklch(0.78 0.16 195)",
                  textShadow: "0 0 40px oklch(0.78 0.20 195 / 0.35)",
                }}
              >
                Ghost Traffic.
              </span>
              <br />
              It&rsquo;s Time to Track&nbsp;It.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed mb-10"
              style={{ color: "oklch(0.60 0.02 260)" }}
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
              <a
                id="contact"
                href="mailto:hello@ghostly.dev"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "oklch(0.78 0.16 195)",
                  color: "oklch(0.08 0.015 260)",
                  boxShadow:
                    "0 0 24px oklch(0.78 0.20 195 / 0.35), 0 4px 16px oklch(0.05 0.01 260 / 0.4)",
                }}
              >
                Contact Us
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="text-xs" style={{ color: "oklch(0.42 0.015 260)" }}>
                No setup fees &middot; Custom onboarding
              </span>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 mt-12 pt-8"
              style={{ borderTop: "1px solid oklch(0.18 0.015 260 / 0.5)" }}
            >
              {[
                { value: "47K+", label: "AI visits tracked daily" },
                { value: "14", label: "AI platforms detected" },
                { value: "99.9%", label: "uptime" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div
                    className="text-xl font-bold font-mono tracking-tight"
                    style={{ color: "oklch(0.95 0.01 260)", letterSpacing: "-0.03em" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs" style={{ color: "oklch(0.45 0.015 260)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:block hidden"
          >
            {/* Glow behind the card */}
            <div
              className="absolute inset-0 -m-8"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse at center, oklch(0.78 0.20 195 / 0.12) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "perspective(1200px) rotateX(2deg) rotateY(-4deg)" }}
            >
              <OverviewMockup />
            </motion.div>
            {/* Reflection fade */}
            <div
              className="absolute -bottom-8 left-0 right-0 h-16 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, oklch(0.08 0.015 260))",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
