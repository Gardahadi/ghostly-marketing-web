"use client";

import { motion } from "motion/react";

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "oklch(0.08 0.015 260 / 0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid oklch(0.20 0.02 260 / 0.4)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="text-base font-bold tracking-tight"
            style={{ color: "oklch(0.78 0.16 195)" }}
          >
            ◈
          </span>
          <span className="text-sm font-semibold tracking-tight" style={{ color: "oklch(0.92 0.01 260)" }}>
            Ghostly
          </span>
          <span
            className="text-xs px-1.5 py-0.5 rounded-md font-medium"
            style={{
              background: "oklch(0.78 0.16 195 / 0.12)",
              color: "oklch(0.78 0.16 195)",
              border: "1px solid oklch(0.78 0.16 195 / 0.25)",
              fontSize: "10px",
            }}
          >
            Ghost Monitor
          </span>
        </div>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-1.5 rounded-lg transition-all"
          style={{
            background: "oklch(0.78 0.16 195 / 0.12)",
            color: "oklch(0.85 0.16 195)",
            border: "1px solid oklch(0.78 0.16 195 / 0.30)",
          }}
        >
          Contact Us
        </a>
      </div>
    </motion.header>
  );
}
