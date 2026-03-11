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
  background: "#ffffff",
  border: "1px solid #e4e4e7",
  borderRadius: "10px",
  padding: "10px 14px",
  fontSize: "14px",
  color: "#09090b",
  outline: "none",
  transition: "border-color 0.15s, box-shadow 0.15s",
  fontFamily: "var(--font-inter), sans-serif",
};

export function ContactModal({ open, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setEmail(""); setWebsite(""); setDescription(""); setStatus("idle");
      setTimeout(() => emailRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape" && open) onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

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

  const focusedBorder = "1px solid #09090b";
  const focusedShadow = "0 0 0 3px rgba(9,9,11,0.08)";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)" }}
          />

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
                background: "#ffffff",
                border: "1px solid #e4e4e7",
                boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg transition-colors hover:bg-zinc-100"
                style={{ color: "#9ca3af" }}
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold" style={{ color: "#09090b" }}>◈</span>
                  <span className="text-xs font-medium tracking-wide" style={{ color: "#9ca3af" }}>GHOST MONITOR</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight" style={{ color: "#09090b" }}>Get in touch</h2>
                <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>
                  Tell us about your site and we&rsquo;ll set up your custom dashboard.
                </p>
              </div>

              {status === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                    style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-base font-semibold mb-1" style={{ color: "#09090b" }}>Message sent!</p>
                  <p className="text-sm" style={{ color: "#6b7280" }}>Our team will reach out within 48 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="cm-email" className="block text-xs font-medium mb-1.5" style={{ color: "#52525b" }}>
                      Email address <span style={{ color: "#09090b" }}>*</span>
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
                      style={{ ...inputStyle, border: focusedField === "email" ? focusedBorder : inputStyle.border, boxShadow: focusedField === "email" ? focusedShadow : "none" }}
                    />
                  </div>

                  <div>
                    <label htmlFor="cm-website" className="block text-xs font-medium mb-1.5" style={{ color: "#52525b" }}>
                      Website URL <span style={{ color: "#09090b" }}>*</span>
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
                      style={{ ...inputStyle, border: focusedField === "website" ? focusedBorder : inputStyle.border, boxShadow: focusedField === "website" ? focusedShadow : "none" }}
                    />
                  </div>

                  <div>
                    <label htmlFor="cm-description" className="block text-xs font-medium mb-1.5" style={{ color: "#52525b" }}>
                      What do you need?{" "}
                      <span style={{ color: "#9ca3af" }}>(optional)</span>
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
                        ...inputStyle, resize: "vertical", minHeight: "80px",
                        border: focusedField === "description" ? focusedBorder : inputStyle.border,
                        boxShadow: focusedField === "description" ? focusedShadow : "none",
                      }}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs" style={{ color: "#dc2626" }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
                    style={{
                      background: status === "loading" ? "#52525b" : "#09090b",
                      color: "#ffffff",
                      boxShadow: status === "loading" ? "none" : "0 4px 14px rgba(0,0,0,0.18)",
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
                          <path d="M12 7a5 5 0 0 0-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
