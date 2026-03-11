"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  open: boolean;
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "oklch(0.09 0.012 260)",
  border: "1px solid oklch(0.22 0.02 260 / 0.6)",
  borderRadius: "10px",
  padding: "10px 14px",
  fontSize: "14px",
  color: "oklch(0.92 0.01 260)",
  outline: "none",
  transition: "border-color 0.15s",
  fontFamily: "var(--font-inter), sans-serif",
};

export function ContactModal({ open, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // Reset form when modal opens
  useEffect(() => {
    if (open) {
      setEmail("");
      setWebsite("");
      setDescription("");
      setStatus("idle");
      setTimeout(() => emailRef.current?.focus(), 100);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, description }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const focusedBorder = "1px solid oklch(0.78 0.16 195 / 0.7)";
  const focusedShadow = "0 0 0 3px oklch(0.78 0.16 195 / 0.12)";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: "oklch(0.04 0.01 260 / 0.80)", backdropFilter: "blur(8px)" }}
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="w-full max-w-md pointer-events-auto rounded-2xl p-7 relative"
              style={{
                background: "oklch(0.11 0.015 260)",
                border: "1px solid oklch(0.24 0.02 260 / 0.6)",
                boxShadow:
                  "0 24px 80px oklch(0.04 0.01 260 / 0.7), 0 0 0 1px oklch(0.78 0.16 195 / 0.08)",
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
                style={{
                  background: "oklch(0.18 0.015 260 / 0.0)",
                  color: "oklch(0.45 0.02 260)",
                }}
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 2l10 10M12 2L2 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold" style={{ color: "oklch(0.78 0.16 195)" }}>
                    ◈
                  </span>
                  <span
                    className="text-xs font-medium tracking-wide"
                    style={{ color: "oklch(0.60 0.02 260)" }}
                  >
                    GHOST MONITOR
                  </span>
                </div>
                <h2
                  className="text-xl font-bold tracking-tight"
                  style={{ color: "oklch(0.97 0.005 260)" }}
                >
                  Get in touch
                </h2>
                <p className="mt-1 text-sm" style={{ color: "oklch(0.52 0.02 260)" }}>
                  Tell us about your site and we&rsquo;ll set up your custom dashboard.
                </p>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                    style={{
                      background: "oklch(0.72 0.16 145 / 0.12)",
                      border: "1px solid oklch(0.72 0.16 145 / 0.25)",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="oklch(0.72 0.16 145)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-base font-semibold mb-1"
                    style={{ color: "oklch(0.97 0.005 260)" }}
                  >
                    Message sent!
                  </p>
                  <p className="text-sm" style={{ color: "oklch(0.52 0.02 260)" }}>
                    Our team will reach out within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="cm-email"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: "oklch(0.60 0.02 260)" }}
                    >
                      Email address <span style={{ color: "oklch(0.78 0.16 195)" }}>*</span>
                    </label>
                    <input
                      ref={emailRef}
                      id="cm-email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        ...inputStyle,
                        border: focusedField === "email" ? focusedBorder : inputStyle.border,
                        boxShadow: focusedField === "email" ? focusedShadow : "none",
                      }}
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label
                      htmlFor="cm-website"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: "oklch(0.60 0.02 260)" }}
                    >
                      Website URL <span style={{ color: "oklch(0.78 0.16 195)" }}>*</span>
                    </label>
                    <input
                      id="cm-website"
                      type="url"
                      required
                      placeholder="https://yoursite.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      onFocus={() => setFocusedField("website")}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        ...inputStyle,
                        border: focusedField === "website" ? focusedBorder : inputStyle.border,
                        boxShadow: focusedField === "website" ? focusedShadow : "none",
                      }}
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      htmlFor="cm-description"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: "oklch(0.60 0.02 260)" }}
                    >
                      What do you need?{" "}
                      <span style={{ color: "oklch(0.38 0.015 260)" }}>(optional)</span>
                    </label>
                    <textarea
                      id="cm-description"
                      rows={3}
                      placeholder="Tell us about your traffic goals, what you want to track, or any questions..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      onFocus={() => setFocusedField("description")}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: "80px",
                        border:
                          focusedField === "description" ? focusedBorder : inputStyle.border,
                        boxShadow: focusedField === "description" ? focusedShadow : "none",
                      }}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs" style={{ color: "oklch(0.70 0.18 25)" }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
                    style={{
                      background:
                        status === "loading"
                          ? "oklch(0.65 0.14 195)"
                          : "oklch(0.78 0.16 195)",
                      color: "oklch(0.08 0.015 260)",
                      boxShadow:
                        status === "loading"
                          ? "none"
                          : "0 0 20px oklch(0.78 0.20 195 / 0.30)",
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <circle
                            cx="7"
                            cy="7"
                            r="5"
                            stroke="currentColor"
                            strokeOpacity="0.3"
                            strokeWidth="2"
                          />
                          <path
                            d="M12 7a5 5 0 0 0-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M2 7h10M8 3l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
