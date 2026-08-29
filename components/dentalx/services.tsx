import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionLabel } from "./section-label"

type Service = {
  title: string
  description: string
  featured?: boolean
}

const SERVICES: Service[] = [
  {
    title: "የተወለጋገዱ፤ ክፍት/ፍንጭት፤ዘርዛራ እና የገጠጡ ጥርሶችን በብሬስ ማስተካከል (Brace)",
    description:
      "We correct crooked, misaligned, and spaced teeth using modern braces for a perfectly aligned smile.",
    featured: true,
  },
  {
    title: "የጥርስ ሥር ሕክምና (Root Canal Treatment - RCT)",
    description:
      "Save damaged or infected teeth with precise root canal therapy, relieving pain and preserving your natural tooth.",
  },
  {
    title: "ሰው ሰራሽ ጥርስ መትከል/Artificial በተለያየ አማራጭ (Tooth Replacement)",
    description:
      "Replace missing teeth with implants, bridges, or other artificial options tailored to your needs.",
  },
  {
    title: "ገቢ ወጪ ጥርሶችን መስራት (Denture)",
    description:
      "Custom full and partial dentures to restore your smile and improve chewing function.",
  },
  {
    title: "የቆሸሸ ጥርስ ማጠብ (Whitening)",
    description:
      "Professional whitening treatments to brighten stained teeth and give you a confident, radiant smile.",
  },
  {
    title: "ማይታከም ጥርስ መንቀል (Tooth Extraction)",
    description:
      "Safe and painless extraction of severely damaged or impacted teeth with expert care.",
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-3xl border p-7 transition-colors",
        service.featured
          ? "border-transparent bg-lime text-lime-foreground"
          : "border-border bg-card hover:border-forest/20",
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold",
          service.featured ? "bg-forest text-lime" : "bg-secondary text-forest",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-5 font-display text-lg font-bold leading-snug">{service.title}</h3>
      <p
        className={cn(
          "mt-3 flex-1 text-sm leading-relaxed",
          service.featured ? "text-lime-foreground/80" : "text-muted-foreground",
        )}
      >
        {service.description}
      </p>
      <button
        type="button"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
      >
        Learn More
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Our Service</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
            Explore Our Services Quality Care for All Ages
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
