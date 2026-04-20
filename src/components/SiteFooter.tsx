import { Link } from "@tanstack/react-router";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--gradient-brand)] text-primary-foreground">
              <Leaf className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div className="leading-tight">
              <div className="font-display text-base font-semibold">Greenplus Pvt Ltd</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Laboratories
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Minds Experimental Studies — an environmental testing and research laboratory committed
            to scientific accuracy and reliable results for industry and academia.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/facilities" className="hover:text-foreground">Facilities</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +94 11 234 5678</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> info@greenplus.lk</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Greenplus Pvt Ltd. All rights reserved.</span>
          <span>Minds Experimental Studies — Environmental Laboratory</span>
        </div>
      </div>
    </footer>
  );
}
