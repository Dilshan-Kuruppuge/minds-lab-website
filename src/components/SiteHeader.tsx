import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/facilities", label: "Facilities" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--gradient-brand)] text-primary-foreground">
            <Leaf className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold text-foreground">Greenplus</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Pvt Ltd</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-muted transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-medium rounded-md text-foreground bg-muted" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Request Analysis
        </Link>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground border-b border-border/40 last:border-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
