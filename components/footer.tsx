export function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{
        borderTop: "1px solid oklch(0.16 0.015 260 / 0.5)",
        background: "oklch(0.075 0.012 260)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold" style={{ color: "oklch(0.78 0.16 195)" }}>
            ◈
          </span>
          <span className="text-sm font-semibold" style={{ color: "oklch(0.72 0.02 260)" }}>
            Ghostly
          </span>
          <span className="text-xs" style={{ color: "oklch(0.35 0.015 260)" }}>
            &copy; {new Date().getFullYear()}
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {[
            { label: "Contact", href: "mailto:hello@ghostly.dev" },
            { label: "Privacy Policy", href: "/privacy" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs transition-colors hover:text-text"
              style={{ color: "oklch(0.42 0.015 260)" }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
