import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { SectionLabel } from "./section-label"

export function About() {
  return (
    <section id="about" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
              Building Relationships One Smile at a Time
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto]">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/about-exam.png"
                  alt="A smiling patient during a gentle dental examination"
                  width={520}
                  height={360}
                  className="h-64 w-full object-cover sm:h-72"
                />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-lime px-5 py-3 text-lime-foreground">
                  <p className="font-display text-2xl font-bold">10K+</p>
                  <p className="text-xs font-medium">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/about-dentist.png"
                alt="A confident dentist standing in a modern clinic"
                width={640}
                height={380}
                className="h-72 w-full object-cover sm:h-80"
              />
              <div className="absolute left-4 top-4 rounded-2xl bg-forest px-5 py-3 text-forest-foreground">
                <p className="font-display text-2xl font-bold">100+</p>
                <p className="text-xs font-medium text-forest-foreground/70">Destination Country</p>
              </div>
            </div>

            <p className="leading-relaxed text-muted-foreground">
              We&apos;re more than just a dental clinic — we&apos;re your partners in health, here to guide
              you on a journey toward a brighter, healthier smile. Our dedicated team combines years of
              experience with a genuine passion for patient care.
            </p>

            <button
              type="button"
              className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-forest pl-5 pr-2 text-sm font-semibold text-forest-foreground transition-transform hover:scale-[1.03]"
            >
              Learn More
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-lime-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
