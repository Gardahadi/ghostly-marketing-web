"use client";

// ────────────────────────────────────────────────────────────────────────────
// Dashboard UI mockup components – light theme, black accents, box-shadow pop
// ────────────────────────────────────────────────────────────────────────────

const CARD_SHADOW = "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.06)";
const FLOAT_SHADOW = "0 24px 64px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.07)";

function Dot({ color }: { color: string }) {
  return <span className="inline-block w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />;
}

// ── Overview / Hero Mockup ──────────────────────────────────────────────────
export function OverviewMockup() {
  const bars = [
    { openai: 68, anthropic: 22, google: 14, perplexity: 8, meta: 5 },
    { openai: 74, anthropic: 18, google: 16, perplexity: 10, meta: 4 },
    { openai: 55, anthropic: 30, google: 20, perplexity: 12, meta: 6 },
    { openai: 90, anthropic: 25, google: 18, perplexity: 14, meta: 7 },
    { openai: 78, anthropic: 28, google: 22, perplexity: 9, meta: 5 },
    { openai: 65, anthropic: 35, google: 24, perplexity: 16, meta: 8 },
    { openai: 68, anthropic: 32, google: 21, perplexity: 13, meta: 6 },
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const maxH = 120;
  const scale = maxH / 150;

  const platforms = [
    { name: "OpenAI",      color: "#78827a", key: "openai"     },
    { name: "Anthropic",   color: "#d3860b", key: "anthropic"  },
    { name: "Google",      color: "#1f72e6", key: "google"     },
    { name: "Perplexity",  color: "#092f22", key: "perplexity" },
    { name: "Meta",        color: "#11b4ff", key: "meta"       },
  ] as const;

  return (
    <div
      className="rounded-xl overflow-hidden text-xs select-none"
      style={{ background: "#ffffff", border: "1px solid #e4e4e7", fontFamily: "var(--font-inter), sans-serif", boxShadow: FLOAT_SHADOW }}
    >
      <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: "1px solid #f0f0f1", background: "#fafafa" }}>
        <span className="font-bold tracking-tight" style={{ color: "#09090b", fontSize: "11px" }}>◈ GHOST MONITOR</span>
        <div className="flex items-center gap-3">
          {["Overview", "Agents", "Humans", "Logs"].map((t, i) => (
            <span
              key={t}
              style={{
                color: i === 0 ? "#09090b" : "#9ca3af",
                fontSize: "10px",
                fontWeight: i === 0 ? 600 : 400,
                borderBottom: i === 0 ? "1px solid #09090b" : "none",
                paddingBottom: "1px",
              }}
            >{t}</span>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: "AI Agent Visits",     value: "47,231", delta: "+18.4%" },
            { label: "AI-Referred Humans",  value: "12,847", delta: "+24.1%" },
            { label: "Pages Crawled",       value: "3,291",  delta: "+9.7%"  },
            { label: "Agent Types",         value: "14",     delta: ""       },
          ].map(({ label, value, delta }) => (
            <div key={label} className="rounded-lg p-2.5" style={{ background: "#f8f8f9", border: "1px solid #e4e4e7" }}>
              <div style={{ color: "#9ca3af", fontSize: "9px", marginBottom: "4px" }}>{label}</div>
              <div className="font-mono font-bold" style={{ color: "#09090b", fontSize: "13px", letterSpacing: "-0.02em" }}>{value}</div>
              {delta && <div style={{ color: "#16a34a", fontSize: "9px", marginTop: "2px" }}>{delta}</div>}
            </div>
          ))}
        </div>

        <div className="rounded-lg p-3" style={{ background: "#f8f8f9", border: "1px solid #e4e4e7" }}>
          <div className="flex items-center justify-between mb-3">
            <span style={{ color: "#6b7280", fontSize: "9px", fontWeight: 500 }}>AI AGENT VISIT TREND</span>
            <div className="flex items-center gap-2">
              {platforms.map((p) => (
                <div key={p.key} className="flex items-center gap-1">
                  <Dot color={p.color} />
                  <span style={{ color: "#9ca3af", fontSize: "8px" }}>{p.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-1" style={{ height: `${maxH}px` }}>
            {bars.map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-[1px]">
                {(["meta", "perplexity", "google", "anthropic", "openai"] as const).map((key) => {
                  const p = platforms.find((p) => p.key === key)!;
                  return (
                    <div
                      key={key}
                      style={{
                        height: `${bar[key] * scale}px`,
                        background: p.color,
                        borderRadius: key === "openai" ? "2px 2px 0 0" : "0",
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex gap-1 mt-1">
            {days.map((d) => (
              <div key={d} className="flex-1 text-center" style={{ color: "#d1d5db", fontSize: "8px" }}>{d}</div>
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
      style={{ background: "#ffffff", border: "1px solid #e4e4e7", fontFamily: "var(--font-inter), sans-serif", boxShadow: CARD_SHADOW }}
    >
      <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid #f0f0f1" }}>
        <span style={{ color: "#6b7280", fontSize: "10px", fontWeight: 500 }}>TOTAL VISITS OVER TIME</span>
        <div className="flex items-center gap-1.5">
          <span style={{ background: "#f0fdf4", color: "#16a34a", fontSize: "9px", padding: "1px 6px", borderRadius: "4px", fontWeight: 600, border: "1px solid #bbf7d0" }}>↑ 54.2%</span>
          <span style={{ color: "#9ca3af", fontSize: "9px" }}>last 12 wks</span>
        </div>
      </div>
      <div className="p-4">
        <svg viewBox="0 0 300 80" className="w-full" style={{ height: "80px" }}>
          <defs>
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#09090b" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`M 0 ${80 - (weeks[0] / max) * 70} ` + weeks.map((v, i) => `L ${(i / (weeks.length - 1)) * 300} ${80 - (v / max) * 70}`).join(" ") + ` L 300 80 L 0 80 Z`}
            fill="url(#sparkGrad)"
          />
          <polyline
            points={weeks.map((v, i) => `${(i / (weeks.length - 1)) * 300},${80 - (v / max) * 70}`).join(" ")}
            fill="none" stroke="#09090b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          />
          <circle cx="300" cy={80 - (weeks[weeks.length - 1] / max) * 70} r="3" fill="#09090b" />
        </svg>
        <div className="flex justify-between mt-2">
          <span style={{ color: "#d1d5db", fontSize: "9px" }}>12 weeks ago</span>
          <span style={{ color: "#d1d5db", fontSize: "9px" }}>Today</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3 pt-3" style={{ borderTop: "1px solid #f0f0f1" }}>
          {[
            { label: "AI Visits",       value: "47,231" },
            { label: "Human Referrals", value: "12,847" },
            { label: "Growth Rate",     value: "+54.2%" },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ color: "#9ca3af", fontSize: "9px" }}>{label}</div>
              <div className="font-mono font-semibold" style={{ color: "#09090b", fontSize: "11px", marginTop: "2px", letterSpacing: "-0.02em" }}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Platform Breakdown Mockup ───────────────────────────────────────────────
export function PlatformMockup() {
  const platforms = [
    { name: "OpenAI / ChatGPT",  pct: 42, visits: "19,837", color: "#09090b" },
    { name: "Anthropic / Claude", pct: 24, visits: "11,335", color: "#3f3f46" },
    { name: "Google / Gemini",   pct: 18, visits: "8,502",  color: "#71717a" },
    { name: "Perplexity",        pct: 11, visits: "5,195",  color: "#a1a1aa" },
    { name: "Meta / Llama",      pct: 5,  visits: "2,362",  color: "#d4d4d8" },
  ];

  return (
    <div
      className="rounded-xl overflow-hidden text-xs select-none w-full"
      style={{ background: "#ffffff", border: "1px solid #e4e4e7", fontFamily: "var(--font-inter), sans-serif", boxShadow: CARD_SHADOW }}
    >
      <div className="px-4 py-3" style={{ borderBottom: "1px solid #f0f0f1" }}>
        <span style={{ color: "#6b7280", fontSize: "10px", fontWeight: 500 }}>AI PLATFORM BREAKDOWN</span>
      </div>
      <div className="p-4 space-y-3">
        {platforms.map(({ name, pct, visits, color }) => (
          <div key={name}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Dot color={color} />
                <span style={{ color: "#3f3f46", fontSize: "10px" }}>{name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono" style={{ color: "#09090b", fontSize: "10px", letterSpacing: "-0.02em" }}>{visits}</span>
                <span style={{ color: "#9ca3af", fontSize: "9px", minWidth: "28px", textAlign: "right" }}>{pct}%</span>
              </div>
            </div>
            <div className="rounded-full overflow-hidden" style={{ height: "4px", background: "#f4f4f5" }}>
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
            </div>
          </div>
        ))}
        <div className="rounded-lg p-2.5 mt-2" style={{ background: "#f8f8f9", border: "1px solid #e4e4e7" }}>
          <div style={{ color: "#9ca3af", fontSize: "9px", marginBottom: "4px" }}>TOP INDEXED PAGES</div>
          {[["/blog/ai-seo-guide", "1,204"], ["/docs/api-reference", "987"], ["/pricing", "643"]].map(([path, count]) => (
            <div key={path} className="flex items-center justify-between py-0.5">
              <span style={{ color: "#6b7280", fontSize: "9px" }}>{path}</span>
              <span className="font-mono font-medium" style={{ color: "#09090b", fontSize: "9px" }}>{count}</span>
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
    { time: "14:23:01", method: "GET", path: "/sitemap.xml",          status: 200, kind: "AI Agent", platform: "OpenAI"     },
    { time: "14:22:48", method: "GET", path: "/robots.txt",           status: 200, kind: "AI Agent", platform: "Anthropic"  },
    { time: "14:21:33", method: "GET", path: "/blog/ai-seo",          status: 200, kind: "Crawler",  platform: "Unknown"    },
    { time: "14:20:17", method: "GET", path: "/api/v1/data",          status: 403, kind: "Scraper",  platform: "Unknown"    },
    { time: "14:19:55", method: "GET", path: "/docs/getting-started", status: 200, kind: "AI Agent", platform: "Perplexity" },
  ];

  const kindColors: Record<string, string> = {
    "AI Agent": "#09090b",
    "Crawler":  "#6b7280",
    "Scraper":  "#dc2626",
  };

  const statusColor = (s: number) => s === 200 ? "#16a34a" : s === 403 ? "#dc2626" : "#d97706";

  return (
    <div
      className="rounded-xl overflow-hidden text-xs select-none w-full"
      style={{ background: "#ffffff", border: "1px solid #e4e4e7", fontFamily: "var(--font-inter), sans-serif", boxShadow: CARD_SHADOW }}
    >
      <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid #f0f0f1" }}>
        <span style={{ color: "#6b7280", fontSize: "10px", fontWeight: 500 }}>LIVE LOG EXPLORER</span>
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "#16a34a", boxShadow: "0 0 4px #16a34a" }} />
          <span style={{ color: "#9ca3af", fontSize: "9px" }}>Live</span>
        </div>
      </div>
      <div
        className="grid px-3 py-1.5"
        style={{ gridTemplateColumns: "60px 36px 1fr 36px 58px 72px", borderBottom: "1px solid #f4f4f5", background: "#fafafa" }}
      >
        {["TIME", "METHOD", "PATH", "STATUS", "KIND", "PLATFORM"].map((h) => (
          <span key={h} style={{ color: "#9ca3af", fontSize: "8px", fontWeight: 600 }}>{h}</span>
        ))}
      </div>
      {logs.map((log, i) => (
        <div
          key={i}
          className="grid px-3 py-2"
          style={{
            gridTemplateColumns: "60px 36px 1fr 36px 58px 72px",
            borderBottom: "1px solid #f4f4f5",
            background: i % 2 === 0 ? "#ffffff" : "#fafafa",
          }}
        >
          <span className="font-mono" style={{ color: "#9ca3af", fontSize: "9px" }}>{log.time}</span>
          <span style={{ color: "#3b82f6", fontSize: "9px", fontWeight: 600 }}>{log.method}</span>
          <span style={{ color: "#3f3f46", fontSize: "9px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{log.path}</span>
          <span className="font-mono" style={{ color: statusColor(log.status), fontSize: "9px" }}>{log.status}</span>
          <span style={{ color: kindColors[log.kind] ?? "#6b7280", fontSize: "9px", fontWeight: 500 }}>{log.kind}</span>
          <span style={{ color: "#9ca3af", fontSize: "9px" }}>{log.platform}</span>
        </div>
      ))}
    </div>
  );
}
