"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionLabel } from "./section-label"

const FAQS = [
  {
    q: "What should I do in case of a dental emergency?",
    a: "If you have a dental emergency, such as a knocked-out tooth or severe pain, contact our clinic immediately. We'll guide you through the steps you need to take and schedule.",
  },
  {
    q: "What are the signs I need to see a dentist?",
    a: "Persistent tooth pain, bleeding gums, sensitivity to hot or cold, and visible discoloration are all signs you should book an appointment with us.",
  },
  {
    q: "Do you offer teeth whitening services?",
    a: "Yes, we offer professional in-office and take-home whitening treatments tailored to safely brighten your smile.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "We recommend a routine checkup and cleaning every six months, though your dentist may suggest a different schedule based on your needs.",
  },
  {
    q: "Are dental X-rays safe?",
    a: "Modern dental X-rays use very low levels of radiation and are considered safe. We take every precaution to protect our patients.",
  },
]

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
            Common Questions About Our Dental Services
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={cn(
                  "rounded-2xl border transition-colors",
                  isOpen ? "border-transparent bg-lime text-lime-foreground" : "border-border bg-card",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-base font-semibold">{item.q}</span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform",
                      isOpen ? "rotate-180 bg-forest text-lime" : "bg-secondary text-forest",
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <p className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-lime-foreground/80">
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
