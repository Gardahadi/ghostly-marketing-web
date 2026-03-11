"use client";

import { motion } from "motion/react";
import { TrafficGrowthMockup, PlatformMockup, CrawlerMockup } from "./mockups";

const features = [
  {
    number: "01",
    title: "Uncover Actual Growth",
    description:
      "Traditional analytics only shows part of the story. Ghost Monitor surfaces the real picture — AI agent visits, LLM crawls, and the humans they send your way. See exactly what's driving growth you didn't know you had.",
    mockup: <TrafficGrowthMockup />,
  },
  {
    number: "02",
    title: "Optimize for AI Search",
    description:
      "Understand which of your pages are being indexed and referenced by ChatGPT, Claude, Gemini, and Perplexity — so you can tailor your content strategy to win in AI-powered search before your competitors even know it's happening.",
    mockup: <PlatformMockup />,
  },
  {
    number: "03",
    title: "Protect Against Crawlers",
    description:
      "Detect and identify unwanted bots and scrapers draining your server resources and polluting your analytics. Ghost Monitor classifies every automated request so you know exactly what to block and what to welcome.",
    mockup: <CrawlerMockup />,
  },
];

export function Features() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Section background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.78 0.16 195 / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 text-xs font-medium"
            style={{
              background: "oklch(0.78 0.16 195 / 0.08)",
              border: "1px solid oklch(0.78 0.16 195 / 0.20)",
              color: "oklch(0.75 0.14 195)",
            }}
          >
            Why Ghost Monitor
          </div>
          <h2
            className="text-4xl font-bold tracking-tight"
            style={{ color: "oklch(0.97 0.005 260)" }}
          >
            The analytics layer your stack is missing
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.55 0.02 260)" }}>
            As AI reshapes how people discover content, a new category of traffic
            is invisible to Google Analytics, Plausible, and every other tool you
            use today.
          </p>
        </motion.div>

        {/* Feature rows */}
        <div className="space-y-24">
          {features.map((feature, i) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Copy */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div
                  className="text-xs font-bold font-mono mb-4 tracking-widest"
                  style={{ color: "oklch(0.78 0.16 195 / 0.60)" }}
                >
                  {feature.number}
                </div>
                <h3
                  className="text-3xl font-bold tracking-tight mb-4"
                  style={{ color: "oklch(0.97 0.005 260)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "oklch(0.57 0.02 260)" }}>
                  {feature.description}
                </p>
                <div
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: "oklch(0.78 0.16 195)" }}
                >
                  <span>Included in every plan</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Mockup */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div
                    className="absolute -inset-4 rounded-2xl pointer-events-none"
                    aria-hidden
                    style={{
                      background:
                        "radial-gradient(ellipse at center, oklch(0.78 0.16 195 / 0.06) 0%, transparent 70%)",
                    }}
                  />
                  {feature.mockup}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
