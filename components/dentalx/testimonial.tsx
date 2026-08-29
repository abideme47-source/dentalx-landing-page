import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"
import { SectionLabel } from "./section-label"

export function Testimonial() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/testimonial.png"
              alt="A patient smiling during a dental appointment"
              width={620}
              height={480}
              className="h-[360px] w-full object-cover sm:h-[440px]"
            />
          </div>

          <div>
            <SectionLabel>Testimonial</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
              What Our Patients Are Saying
            </h2>

            <div className="mt-6 flex gap-1 text-lime" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>

            <blockquote className="mt-6 text-lg leading-relaxed text-pretty text-foreground">
              &ldquo;We&apos;re proud of the positive impact we&apos;ve had — patients&apos; lives. But don&apos;t
              just take our word for it — hear from those who have experienced our care firsthand. Our
              patients consistently tell us how comfortable they feel with our team.&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/doctor-4.png"
                  alt="Tanzid Tamim"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display font-bold">Tanzid Tamim</p>
                  <p className="text-sm text-muted-foreground">Co. Founder</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-forest-foreground transition-transform hover:scale-105"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
