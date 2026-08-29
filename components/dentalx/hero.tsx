import Image from "next/image"
import { Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-forest text-forest-foreground">
      <div className="mx-auto max-w-7xl px-4 pb-0 sm:px-6 lg:px-8">
        <div className="relative pt-6 text-center">
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Your smile deserves the best.
          </h1>

          {/* decorative crosses */}
          <span className="pointer-events-none absolute left-0 top-8 hidden text-4xl text-lime/40 lg:block" aria-hidden="true">
            ✳
          </span>
          <span className="pointer-events-none absolute right-2 top-0 hidden text-3xl text-lime/40 lg:block" aria-hidden="true">
            ✳
          </span>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-t-[2rem]">
          <Image
            src="/images/hero-dental.png"
            alt="A patient receiving a gentle dental checkup at Dr Euel Lewi Speciality Dental Clinic"
            width={1280}
            height={620}
            priority
            className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[560px]"
          />
          <button
            type="button"
            aria-label="Play clinic intro video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lime text-lime-foreground shadow-lg transition-transform hover:scale-105 sm:h-20 sm:w-20"
          >
            <Play className="h-6 w-6 fill-current" />
          </button>
        </div>
      </div>
    </section>
  )
}
