import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function Cta() {
  return (
    <section className="bg-background pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-lime text-lime-foreground md:grid-cols-[1.4fr_1fr]">
          <div className="p-8 sm:p-12">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-balance sm:text-4xl lg:text-5xl">
              Don&apos;t Wait Your Smile Deserves the Best
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-lime-foreground/80">
              Your journey to a healthier, more confident smile starts here at Dr Euel Lewi Speciality Dental Clinic. Whether you&apos;re
              due for a routine check-up, need restorative care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-forest pl-5 pr-2 text-sm font-semibold text-forest-foreground transition-transform hover:scale-[1.03]"
              >
                Schedule Appointment
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-lime-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
              <button
                type="button"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-forest/30 px-5 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/10"
              >
                Call Today
              </button>
            </div>
          </div>
          <div className="relative min-h-56">
            <Image
              src="/images/cta-dental.png"
              alt="A dentist treating a smiling patient"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
