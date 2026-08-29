"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { SectionLabel } from "./section-label"

const STEPS = [
  {
    title: "Comfortable and Precise Treatment",
    body: "Includes follow-up care & guidance maintaining your results, with our team always available to answer questions & support.",
  },
  {
    title: "Post-Treatment Care and Follow-Up",
    body: "In your treatment phase, we use the latest technology and techniques to deliver precise, gentle care.",
  },
  {
    title: "Personalized Treatment Plan",
    body: "We develop a personalized treatment tailored to your specific requirements, ensuring you're informed about every option.",
  },
  {
    title: "Your First Consultation",
    body: "Begins with a warm welcome & thorough consultation, where we take the time to understand your needs, goals, concerns.",
  },
]

export function HowItWorks() {
  const [active, setActive] = useState(1)

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>How It Work</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
            How Our Dental Care Works
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            {STEPS.map((step, i) => {
              const open = active === i
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={open}
                  className={cn(
                    "rounded-2xl border p-5 text-left transition-colors",
                    open ? "border-transparent bg-lime text-lime-foreground" : "border-border bg-card",
                  )}
                >
                  <span className="font-display text-base font-bold">{step.title}</span>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      open ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-lime-foreground/80">
                      {step.body}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/how-it-works.png"
                alt="A dental hygienist consulting with a smiling patient"
                width={620}
                height={520}
                className="h-[420px] w-full object-cover grayscale"
              />
            </div>
            <span
              className="pointer-events-none absolute -bottom-4 -left-4 text-6xl text-lime"
              aria-hidden="true"
            >
              ✳
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
