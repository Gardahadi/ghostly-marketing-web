"use client";

import { motion } from "motion/react";

export function Nav({ onContact }: { onContact: () => void }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(255,255,255,0.90)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid #e4e4e7",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base font-bold tracking-tight" style={{ color: "#09090b" }}>◈</span>
          <span className="text-sm font-semibold tracking-tight" style={{ color: "#09090b" }}>Ghostly</span>
          <span
            className="text-xs px-1.5 py-0.5 rounded-md font-medium"
            style={{ background: "#f4f4f5", color: "#52525b", border: "1px solid #e4e4e7", fontSize: "10px" }}
          >
            Ghost Monitor
          </span>
        </div>
        <button
          onClick={onContact}
          className="text-sm font-medium px-4 py-1.5 rounded-lg transition-all hover:bg-zinc-800"
          style={{ background: "#09090b", color: "#ffffff" }}
        >
          Contact Us
        </button>
      </div>
    </motion.header>
  );
}
