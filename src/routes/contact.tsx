import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Greenplus Pvt Ltd | Minds Experimental Studies" },
      {
        name: "description",
        content:
          "Contact Minds Experimental Studies for environmental testing, research collaboration and consultation enquiries.",
      },
      { property: "og:title", content: "Contact Minds Experimental Studies" },
      { property: "og:description", content: "Get in touch for testing, research support and consultation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Contact</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight">
            Let's start a <span className="italic text-accent">conversation</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Reach out for testing requests, academic collaborations or consultation enquiries.
            Our team will respond within two working days.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold">Get in touch</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Use the form or reach us through the channels below.
            </p>
          </div>
          {[
            { icon: Phone, label: "Phone", value: "+94 11 234 5678" },
            { icon: Mail, label: "Email", value: "info@greenplus.lk" },
            { icon: MapPin, label: "Address", value: "Greenplus Pvt Ltd, Colombo, Sri Lanka" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="mt-1 text-sm text-foreground font-medium">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-border bg-card p-8 space-y-5 shadow-[var(--shadow-soft)]"
          >
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
                <h3 className="mt-4 font-display text-2xl font-semibold">Message sent</h3>
                <p className="mt-2 text-muted-foreground text-sm">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 resize-none"
                    placeholder="Tell us about your testing requirement or research project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
