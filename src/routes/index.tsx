import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Microscope, Sprout, ClipboardList, Leaf, FlaskConical, ArrowRight, ShieldCheck, BookOpen, Building2 } from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Greenplus Pvt Ltd — Minds Experimental Studies" },
      {
        name: "description",
        content:
          "Environmental testing and research laboratory providing water, soil, microplastic and microbiology analysis with scientific precision.",
      },
      { property: "og:title", content: "Greenplus Pvt Ltd — Environmental Laboratory" },
      {
        property: "og:description",
        content: "Reliable environmental testing and research support for industry and academia.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Droplets, title: "Water Quality Analysis", desc: "Comprehensive physical, chemical and biological water testing." },
  { icon: FlaskConical, title: "Microplastic Analysis", desc: "Detection and quantification of microplastic contamination." },
  { icon: Sprout, title: "Soil Sample Analysis", desc: "Soil composition, nutrient and contamination profiling." },
  { icon: Leaf, title: "Environmental Consultation", desc: "Expert guidance on environmental compliance and impact." },
  { icon: ClipboardList, title: "Plastic Surveys", desc: "Field-level plastic pollution and waste characterization." },
  { icon: Microscope, title: "Questionnaire Surveys", desc: "Designed and conducted research surveys with analysis." },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-hero)]" />
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Greenplus Pvt Ltd · Laboratories
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
              Minds Experimental <span className="italic text-accent">Studies</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              An environmental testing and research laboratory delivering precise, reliable
              analysis for industrial partners and academic researchers — grounded in scientific
              rigor and modern instrumentation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-soft)]"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-muted transition"
              >
                Request a Test
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "06", v: "Core Services" },
                { k: "03", v: "Laboratories" },
                { k: "100%", v: "Quality Focus" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-semibold text-foreground">{s.k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-[var(--gradient-brand)] opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="Environmental laboratory glassware with plant samples"
              width={1920}
              height={1280}
              className="relative rounded-2xl shadow-[var(--shadow-elevated)] object-cover aspect-[4/3] w-full"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">About the Lab</p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-foreground">
          Reliable environmental testing, backed by scientific standards.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
          Minds Experimental Studies operates under Greenplus Pvt Ltd as a dedicated environmental
          laboratory. We support industry, government and academic clients with accurate analytical
          services, research collaboration, and consultation across water, soil, and plastic studies.
        </p>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Services</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">What we offer</h2>
          </div>
          <Link to="/services" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-border bg-card p-6 hover:shadow-[var(--shadow-soft)] hover:border-primary/40 transition">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-accent">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-2xl bg-[var(--gradient-brand)] text-primary-foreground p-10 md:p-14 grid md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Accuracy First", desc: "Every result follows validated scientific protocols." },
            { icon: BookOpen, title: "Academic Support", desc: "Guidance for UG and PG students conducting research." },
            { icon: Building2, title: "Industry Ready", desc: "Practical reporting for compliance and decision making." },
          ].map((f) => (
            <div key={f.title}>
              <f.icon className="h-6 w-6 opacity-90" />
              <h3 className="mt-4 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm opacity-90 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
