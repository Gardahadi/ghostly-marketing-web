export function Footer() {
  return (
    <footer className="py-10 px-6" style={{ borderTop: "1px solid #e4e4e7", background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold" style={{ color: "#09090b" }}>◈</span>
          <span className="text-sm font-semibold" style={{ color: "#09090b" }}>Ghostly</span>
          <span className="text-xs" style={{ color: "#9ca3af" }}>&copy; {new Date().getFullYear()}</span>
        </div>
        <nav className="flex items-center gap-6">
          {[
            { label: "Contact",        href: "mailto:hello@ghostly.dev" },
            { label: "Privacy Policy", href: "/privacy"                 },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs transition-colors hover:text-zinc-900"
              style={{ color: "#9ca3af" }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
