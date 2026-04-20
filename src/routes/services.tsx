import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Microscope, Sprout, ClipboardList, Leaf, FlaskConical, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Environmental Testing & Research | Greenplus" },
      {
        name: "description",
        content:
          "Water quality, microplastic, soil, plastic surveys, environmental consultation and questionnaire surveys conducted by Minds Experimental Studies.",
      },
      { property: "og:title", content: "Laboratory Services — Minds Experimental Studies" },
      { property: "og:description", content: "Comprehensive environmental testing and research services." },
    ],
  }),
  component: ServicesPage,
});

type Service = { icon: LucideIcon; title: string; desc: string };

const services: Service[] = [
  {
    icon: Droplets,
    title: "Water Quality Analysis",
    desc: "Physical, chemical and biological characterization of drinking, surface, ground and waste waters. We test for parameters such as pH, turbidity, dissolved oxygen, BOD, COD, nutrients, heavy metals and microbial indicators to support compliance and safety.",
  },
  {
    icon: FlaskConical,
    title: "Microplastic Analysis",
    desc: "Detection, isolation and quantification of microplastic particles in water, sediment and biological samples. Results help quantify pollution levels and support environmental monitoring research.",
  },
  {
    icon: Sprout,
    title: "Soil Sample Analysis",
    desc: "Comprehensive soil testing including texture, pH, organic matter, macro and micronutrients, and contaminant screening. Useful for agriculture, land assessment, remediation and academic research.",
  },
  {
    icon: Leaf,
    title: "Environmental Consultation",
    desc: "Advisory services for environmental compliance, monitoring plan design, sampling strategy, and interpretation of analytical data for projects, EIAs and sustainability initiatives.",
  },
  {
    icon: ClipboardList,
    title: "Plastic Surveys",
    desc: "Field-based surveys to characterize plastic pollution in coastal, freshwater and terrestrial environments — including waste typology, density mapping and source identification.",
  },
  {
    icon: Microscope,
    title: "Questionnaire Surveys",
    desc: "Design, deployment and analysis of structured questionnaire surveys for environmental, social and behavioral research with quantitative reporting support.",
  },
];

function ServicesPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Services</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight">
            Analytical services with <span className="italic text-accent">scientific rigor</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            A complete range of environmental testing, field survey and consultation services for
            industrial partners, regulators and researchers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="rounded-xl border border-border bg-card p-8 hover:shadow-[var(--shadow-soft)] hover:border-primary/40 transition"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-accent">
                <s.icon className="h-6 w-6" />
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Service · {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h2 className="mt-6 font-display text-2xl font-semibold">{s.title}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
