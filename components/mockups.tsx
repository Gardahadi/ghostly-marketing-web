"use client";

// ────────────────────────────────────────────────────────────────────────────
// Dashboard UI mockup components – styled to match the real Ghost Monitor
// dashboard. Used as "product screenshots" in the marketing page.
// ────────────────────────────────────────────────────────────────────────────

// Shared mini badge
function Dot({ color }: { color: string }) {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full flex-shrink-0"
      style={{ background: color }}
    />
  );
}

// ── Overview / Hero Mockup ──────────────────────────────────────────────────
export function OverviewMockup() {
  const bars = [
    { openai: 68, anthropic: 22, google: 14, perplexity: 8, meta: 5 },
    { openai: 74, anthropic: 18, google: 16, perplexity: 10, meta: 4 },
    { openai: 55, anthropic: 30, google: 20, perplexity: 12, meta: 6 },
    { openai: 90, anthropic: 25, google: 18, perplexity: 14, meta: 7 },
    { openai: 78, anthropic: 28, google: 22, perplexity: 9, meta: 5 },
    { openai: 95, anthropic: 35, google: 24, perplexity: 16, meta: 8 },
    { openai: 88, anthropic: 32, google: 21, perplexity: 13, meta: 6 },
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const maxH = 120;
  const scale = maxH / 150;

  const platforms = [
    { name: "OpenAI", color: "#d4a84b", key: "openai" },
    { name: "Anthropic", color: "#4fcfbe", key: "anthropic" },
    { name: "Google", color: "#6b8ccc", key: "google" },
    { name: "Perplexity", color: "#a8d44f", key: "perplexity" },
    { name: "Meta", color: "#7a8ccc", key: "meta" },
  ] as const;

  return (
    <div
      className="rounded-xl overflow-hidden text-xs select-none"
      style={{
        background: "oklch(0.11 0.015 260)",
        border: "1px solid oklch(0.22 0.02 260 / 0.6)",
        fontFamily: "var(--font-inter), sans-serif",
        boxShadow:
          "0 24px 80px oklch(0.05 0.01 260 / 0.8), 0 0 0 1px oklch(0.30 0.04 195 / 0.15)",
      }}
    >
      {/* Nav bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          borderBottom: "1px solid oklch(0.20 0.015 260 / 0.5)",
          background: "oklch(0.10 0.015 260)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="font-bold tracking-tight"
            style={{ color: "oklch(0.78 0.16 195)", fontSize: "11px" }}
          >
            ◈ GHOST MONITOR
          </span>
        </div>
        <div className="flex items-center gap-3">
          {["Overview", "Agents", "Humans", "Logs"].map((t, i) => (
            <span
              key={t}
              style={{
                color:
                  i === 0 ? "oklch(0.85 0.16 195)" : "oklch(0.50 0.02 260)",
                fontSize: "10px",
                fontWeight: i === 0 ? 600 : 400,
                borderBottom: i === 0 ? "1px solid oklch(0.78 0.16 195)" : "none",
                paddingBottom: "1px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* KPI row */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: "AI Agent Visits", value: "47,231", delta: "+18.4%" },
            { label: "AI-Referred Humans", value: "12,847", delta: "+24.1%" },
            { label: "Pages Crawled", value: "3,291", delta: "+9.7%" },
            { label: "Agent Types", value: "14", delta: "" },
          ].map(({ label, value, delta }) => (
            <div
              key={label}
              className="rounded-lg p-2.5"
              style={{
                background: "oklch(0.14 0.015 260)",
                border: "1px solid oklch(0.20 0.015 260 / 0.5)",
              }}
            >
              <div
                style={{ color: "oklch(0.48 0.02 260)", fontSize: "9px", marginBottom: "4px" }}
              >
                {label}
              </div>
              <div
                className="font-mono font-bold"
                style={{ color: "oklch(0.95 0.01 260)", fontSize: "13px", letterSpacing: "-0.02em" }}
              >
                {value}
              </div>
              {delta && (
                <div style={{ color: "oklch(0.72 0.16 145)", fontSize: "9px", marginTop: "2px" }}>
                  {delta}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chart */}
        <div
          className="rounded-lg p-3"
          style={{
            background: "oklch(0.14 0.015 260)",
            border: "1px solid oklch(0.20 0.015 260 / 0.5)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span style={{ color: "oklch(0.70 0.02 260)", fontSize: "9px", fontWeight: 500 }}>
              AI AGENT VISIT TREND
            </span>
            <div className="flex items-center gap-2">
              {platforms.map((p) => (
                <div key={p.key} className="flex items-center gap-1">
                  <Dot color={p.color} />
                  <span style={{ color: "oklch(0.45 0.02 260)", fontSize: "8px" }}>{p.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Stacked bar chart */}
          <div className="flex items-end gap-1" style={{ height: `${maxH}px` }}>
            {bars.map((bar, i) => {
              const total =
                bar.openai + bar.anthropic + bar.google + bar.perplexity + bar.meta;
              return (
                <div key={i} className="flex-1 flex flex-col justify-end gap-[1px]">
                  {(["meta", "perplexity", "google", "anthropic", "openai"] as const).map(
                    (key) => {
                      const p = platforms.find((p) => p.key === key)!;
                      const h = bar[key] * scale;
                      return (
                        <div
                          key={key}
                          style={{
                            height: `${h}px`,
                            background: p.color,
                            borderRadius: key === "openai" ? "2px 2px 0 0" : "0",
                            opacity: 0.85,
                          }}
                        />
                      );
                    }
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex gap-1 mt-1">
            {days.map((d) => (
              <div
                key={d}
                className="flex-1 text-center"
                style={{ color: "oklch(0.38 0.015 260)", fontSize: "8px" }}
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Traffic Growth Mockup ───────────────────────────────────────────────────
export function TrafficGrowthMockup() {
  const weeks = [12, 18, 15, 24, 22, 31, 28, 36, 34, 42, 48, 55];
  const max = Math.max(...weeks);

  return (
    <div
      className="rounded-xl overflow-hidden text-xs select-none w-full"
      style={{
        background: "oklch(0.11 0.015 260)",
        border: "1px solid oklch(0.22 0.02 260 / 0.6)",
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ borderBottom: "1px solid oklch(0.18 0.015 260 / 0.5)" }}
      >
        <span style={{ color: "oklch(0.65 0.02 260)", fontSize: "10px", fontWeight: 500 }}>
          TOTAL VISITS OVER TIME
        </span>
        <div className="flex items-center gap-1.5">
          <span
            style={{
              background: "oklch(0.72 0.16 145 / 0.15)",
              color: "oklch(0.72 0.16 145)",
              fontSize: "9px",
              padding: "1px 6px",
              borderRadius: "4px",
              fontWeight: 600,
            }}
          >
            ↑ 54.2%
          </span>
          <span style={{ color: "oklch(0.40 0.015 260)", fontSize: "9px" }}>last 12 wks</span>
        </div>
      </div>
      <div className="p-4">
        {/* Sparkline area chart */}
        <svg viewBox="0 0 300 80" className="w-full" style={{ height: "80px" }}>
          <defs>
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.78 0.16 195)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="oklch(0.78 0.16 195)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Area fill */}
          <path
            d={
              `M 0 ${80 - (weeks[0] / max) * 70} ` +
              weeks
                .map(
                  (v, i) =>
                    `L ${(i / (weeks.length - 1)) * 300} ${80 - (v / max) * 70}`
                )
                .join(" ") +
              ` L 300 80 L 0 80 Z`
            }
            fill="url(#sparkGrad)"
          />
          {/* Line */}
          <polyline
            points={weeks
              .map(
                (v, i) =>
                  `${(i / (weeks.length - 1)) * 300},${80 - (v / max) * 70}`
              )
              .join(" ")}
            fill="none"
            stroke="oklch(0.78 0.16 195)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Dot on last point */}
          <circle
            cx="300"
            cy={80 - (weeks[weeks.length - 1] / max) * 70}
            r="3"
            fill="oklch(0.78 0.16 195)"
          />
        </svg>
        <div className="flex justify-between mt-2">
          <span style={{ color: "oklch(0.38 0.015 260)", fontSize: "9px" }}>12 weeks ago</span>
          <span style={{ color: "oklch(0.38 0.015 260)", fontSize: "9px" }}>Today</span>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mt-3 pt-3" style={{ borderTop: "1px solid oklch(0.18 0.015 260 / 0.5)" }}>
          {[
            { label: "AI Visits", value: "47,231" },
            { label: "Human Referrals", value: "12,847" },
            { label: "Growth Rate", value: "+54.2%" },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ color: "oklch(0.42 0.015 260)", fontSize: "9px" }}>{label}</div>
              <div
                className="font-mono font-semibold"
                style={{ color: "oklch(0.95 0.01 260)", fontSize: "11px", marginTop: "2px", letterSpacing: "-0.02em" }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Platform Breakdown Mockup (AI Search) ───────────────────────────────────
export function PlatformMockup() {
  const platforms = [
    { name: "OpenAI / ChatGPT", pct: 42, visits: "19,837", color: "#d4a84b" },
    { name: "Anthropic / Claude", pct: 24, visits: "11,335", color: "#4fcfbe" },
    { name: "Google / Gemini", pct: 18, visits: "8,502", color: "#6b8ccc" },
    { name: "Perplexity", pct: 11, visits: "5,195", color: "#a8d44f" },
    { name: "Meta / Llama", pct: 5, visits: "2,362", color: "#7a8ccc" },
  ];

  return (
    <div
      className="rounded-xl overflow-hidden text-xs select-none w-full"
      style={{
        background: "oklch(0.11 0.015 260)",
        border: "1px solid oklch(0.22 0.02 260 / 0.6)",
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      <div
        className="px-4 py-3"
        style={{ borderBottom: "1px solid oklch(0.18 0.015 260 / 0.5)" }}
      >
        <span style={{ color: "oklch(0.65 0.02 260)", fontSize: "10px", fontWeight: 500 }}>
          AI PLATFORM BREAKDOWN
        </span>
      </div>
      <div className="p-4 space-y-3">
        {platforms.map(({ name, pct, visits, color }) => (
          <div key={name}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Dot color={color} />
                <span style={{ color: "oklch(0.75 0.02 260)", fontSize: "10px" }}>{name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="font-mono"
                  style={{ color: "oklch(0.88 0.01 260)", fontSize: "10px", letterSpacing: "-0.02em" }}
                >
                  {visits}
                </span>
                <span
                  style={{
                    color: "oklch(0.55 0.015 260)",
                    fontSize: "9px",
                    minWidth: "28px",
                    textAlign: "right",
                  }}
                >
                  {pct}%
                </span>
              </div>
            </div>
            <div
              className="rounded-full overflow-hidden"
              style={{ height: "4px", background: "oklch(0.18 0.015 260)" }}
            >
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${pct}%`, background: color, opacity: 0.8 }}
              />
            </div>
          </div>
        ))}
        {/* Pages being indexed */}
        <div
          className="rounded-lg p-2.5 mt-2"
          style={{ background: "oklch(0.14 0.015 260)", border: "1px solid oklch(0.20 0.015 260 / 0.4)" }}
        >
          <div style={{ color: "oklch(0.45 0.015 260)", fontSize: "9px", marginBottom: "4px" }}>
            TOP INDEXED PAGES
          </div>
          {[
            ["/blog/ai-seo-guide", "1,204"],
            ["/docs/api-reference", "987"],
            ["/pricing", "643"],
          ].map(([path, count]) => (
            <div key={path} className="flex items-center justify-between py-0.5">
              <span style={{ color: "oklch(0.65 0.02 260)", fontSize: "9px" }}>{path}</span>
              <span
                className="font-mono"
                style={{ color: "oklch(0.78 0.16 195)", fontSize: "9px" }}
              >
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Bot / Crawler Detection Mockup ──────────────────────────────────────────
export function CrawlerMockup() {
  const logs = [
    {
      time: "14:23:01",
      method: "GET",
      path: "/sitemap.xml",
      status: 200,
      kind: "AI Agent",
      platform: "OpenAI",
      agent: "GPTBot/1.0",
    },
    {
      time: "14:22:48",
      method: "GET",
      path: "/robots.txt",
      status: 200,
      kind: "AI Agent",
      platform: "Anthropic",
      agent: "ClaudeBot/1.0",
    },
    {
      time: "14:21:33",
      method: "GET",
      path: "/blog/ai-seo",
      status: 200,
      kind: "Crawler",
      platform: "Unknown",
      agent: "python-requests/2.31",
    },
    {
      time: "14:20:17",
      method: "GET",
      path: "/api/v1/data",
      status: 403,
      kind: "Scraper",
      platform: "Unknown",
      agent: "curl/7.88.1",
    },
    {
      time: "14:19:55",
      method: "GET",
      path: "/docs/getting-started",
      status: 200,
      kind: "AI Agent",
      platform: "Perplexity",
      agent: "PerplexityBot",
    },
  ];

  const kindColors: Record<string, string> = {
    "AI Agent": "#4fcfbe",
    "Crawler": "#d4a84b",
    "Scraper": "#e05c5c",
  };

  const statusColor = (s: number) =>
    s === 200 ? "#a8d44f" : s === 403 ? "#e05c5c" : "#d4a84b";

  return (
    <div
      className="rounded-xl overflow-hidden text-xs select-none w-full"
      style={{
        background: "oklch(0.11 0.015 260)",
        border: "1px solid oklch(0.22 0.02 260 / 0.6)",
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ borderBottom: "1px solid oklch(0.18 0.015 260 / 0.5)" }}
      >
        <span style={{ color: "oklch(0.65 0.02 260)", fontSize: "10px", fontWeight: 500 }}>
          LIVE LOG EXPLORER
        </span>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "#a8d44f", boxShadow: "0 0 4px #a8d44f" }}
          />
          <span style={{ color: "oklch(0.45 0.015 260)", fontSize: "9px" }}>Live</span>
        </div>
      </div>
      {/* Header row */}
      <div
        className="grid px-3 py-1.5"
        style={{
          gridTemplateColumns: "60px 36px 1fr 36px 58px 72px",
          borderBottom: "1px solid oklch(0.16 0.015 260)",
          background: "oklch(0.09 0.012 260)",
        }}
      >
        {["TIME", "METHOD", "PATH", "STATUS", "KIND", "PLATFORM"].map((h) => (
          <span key={h} style={{ color: "oklch(0.38 0.015 260)", fontSize: "8px", fontWeight: 600 }}>
            {h}
          </span>
        ))}
      </div>
      {logs.map((log, i) => (
        <div
          key={i}
          className="grid px-3 py-2"
          style={{
            gridTemplateColumns: "60px 36px 1fr 36px 58px 72px",
            borderBottom: "1px solid oklch(0.14 0.012 260 / 0.5)",
            background: i % 2 === 0 ? "transparent" : "oklch(0.10 0.012 260 / 0.3)",
          }}
        >
          <span className="font-mono" style={{ color: "oklch(0.40 0.015 260)", fontSize: "9px" }}>
            {log.time}
          </span>
          <span
            style={{
              color: log.method === "GET" ? "#6b8ccc" : "#d4a84b",
              fontSize: "9px",
              fontWeight: 600,
            }}
          >
            {log.method}
          </span>
          <span
            style={{
              color: "oklch(0.72 0.02 260)",
              fontSize: "9px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {log.path}
          </span>
          <span className="font-mono" style={{ color: statusColor(log.status), fontSize: "9px" }}>
            {log.status}
          </span>
          <span
            style={{
              color: kindColors[log.kind] ?? "oklch(0.60 0.02 260)",
              fontSize: "9px",
              fontWeight: 500,
            }}
          >
            {log.kind}
          </span>
          <span style={{ color: "oklch(0.52 0.02 260)", fontSize: "9px" }}>{log.platform}</span>
        </div>
      ))}
    </div>
  );
}
