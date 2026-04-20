import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Minds Experimental Studies | Greenplus Pvt Ltd" },
      {
        name: "description",
        content:
          "Learn about Minds Experimental Studies, an environmental testing and research laboratory committed to accuracy and scientific quality.",
      },
      { property: "og:title", content: "About Minds Experimental Studies" },
      { property: "og:description", content: "Environmental testing & research lab supporting industry and academia." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">About Us</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight">
            A laboratory built on <span className="italic text-accent">scientific precision</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Minds Experimental Studies is the environmental laboratory division of Greenplus Pvt
            Ltd. We provide testing, analysis and applied research services to industries, regulatory
            bodies, and academic institutions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-3xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            To deliver accurate, defensible analytical data that empowers decision-makers to protect
            the environment and improve public health. We maintain a strong commitment to scientific
            standards, methodological consistency, and ethical research practice.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold">What We Stand For</h2>
          <ul className="mt-4 space-y-3">
            {[
              "Accuracy in every measurement and report",
              "Adherence to recognized scientific standards",
              "Transparent and reproducible methodology",
              "Support for both industry clients and academic research",
              "Continuous learning and instrumentation upgrades",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-2xl border border-border bg-card p-10">
          <h2 className="font-display text-2xl font-semibold">Serving Industry and Academia</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our laboratory bridges practical industrial testing requirements with academic research
            depth. Whether you need regulatory compliance reporting, environmental impact data, or
            facilities to conduct undergraduate and postgraduate research projects, Minds Experimental
            Studies provides a reliable scientific environment to support your work.
          </p>
        </div>
      </section>
    </div>
  );
}
