import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import waterImg from "@/assets/water-lab.jpg";
import soilImg from "@/assets/soil-lab.jpg";
import microImg from "@/assets/micro-lab.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Water, Soil & Microbiology Labs | Greenplus" },
      {
        name: "description",
        content:
          "Explore our Water Quality, Soil Analysis and Microbiology laboratories. Facilities also support undergraduate and postgraduate student research.",
      },
      { property: "og:title", content: "Laboratory Facilities — Minds Experimental Studies" },
      { property: "og:description", content: "Modern environmental laboratories supporting industry and academic research." },
      { property: "og:image", content: waterImg },
      { name: "twitter:image", content: waterImg },
    ],
  }),
  component: FacilitiesPage,
});

const labs = [
  {
    img: waterImg,
    title: "Water Quality Laboratory",
    desc: "Equipped for physical, chemical and biological water testing including spectrophotometry, titrimetry and standard reference protocols.",
  },
  {
    img: soilImg,
    title: "Soil Analysis Laboratory",
    desc: "Dedicated facility for soil characterization, nutrient profiling and contamination screening with controlled sample preparation.",
  },
  {
    img: microImg,
    title: "Microbiology Laboratory",
    desc: "Sterile workspace for microbial culturing, enumeration and identification — supporting environmental and water microbiology studies.",
  },
];

function FacilitiesPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Facilities</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight">
            Three laboratories. <span className="italic text-accent">One standard.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Purpose-built laboratory environments for environmental testing, microbiological work
            and applied research.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 space-y-16">
        {labs.map((lab, i) => (
          <div
            key={lab.title}
            className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-[var(--gradient-brand)] opacity-15 blur-xl" />
              <img
                src={lab.img}
                alt={lab.title}
                width={1280}
                height={896}
                loading="lazy"
                className="relative rounded-2xl object-cover aspect-[4/3] w-full shadow-[var(--shadow-soft)]"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Facility · {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">{lab.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{lab.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-2xl bg-[var(--gradient-brand)] text-primary-foreground p-10 md:p-14">
          <GraduationCap className="h-8 w-8" />
          <h2 className="mt-4 font-display text-3xl font-semibold">For students and researchers</h2>
          <p className="mt-4 leading-relaxed opacity-95 max-w-2xl">
            Our laboratory provides facilities and guidance for undergraduate and postgraduate
            students conducting research and academic projects. Students benefit from supervised
            access to instrumentation, methodological support and a collaborative scientific
            environment.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center rounded-md bg-background text-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Inquire about academic access
          </Link>
        </div>
      </section>
    </div>
  );
}
