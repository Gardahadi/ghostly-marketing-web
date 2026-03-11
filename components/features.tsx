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
    <section className="relative py-32 overflow-hidden" style={{ background: "#f8f8f9" }}>
      {/* Top/bottom edge fade to white */}
      <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, #ffffff, transparent)" }} aria-hidden />
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, #ffffff, transparent)" }} aria-hidden />

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
            style={{ background: "#f4f4f5", border: "1px solid #e4e4e7", color: "#52525b" }}
          >
            Why Ghost Monitor
          </div>
          <h2 className="text-4xl font-bold tracking-tight" style={{ color: "#09090b" }}>
            The analytics layer your stack is missing
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
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
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Copy */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="text-xs font-bold font-mono mb-4 tracking-widest" style={{ color: "#d4d4d8" }}>
                  {feature.number}
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-4" style={{ color: "#09090b" }}>
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#6b7280" }}>
                  {feature.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium" style={{ color: "#09090b" }}>
                  <span>Included in every plan</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Mockup */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ duration: 0.3 }}>
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
