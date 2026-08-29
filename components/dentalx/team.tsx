"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionLabel } from "./section-label"
import { XIcon, LinkedinIcon, InstagramIcon } from "./brand-icons"

const TEAM = [
  { name: "Desiree Wolf", role: "Pediatrics", img: "/images/doctor-1.png" },
  { name: "Preston Padberg", role: "Cardiology", img: "/images/doctor-2.png" },
  { name: "Harry Hickle V", role: "Orthopedics", img: "/images/doctor-3.png" },
  { name: "Alicia Luettgen", role: "Dermatology", img: "/images/doctor-4.png" },
]

export function Team() {
  const [active, setActive] = useState(1)

  return (
    <section id="team" className="bg-forest py-16 text-forest-foreground sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel variant="dark">Our Team</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
              Meet the Professionals
              <br className="hidden sm:block" /> Who Make You Smile
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous team members"
              onClick={() => setActive((a) => (a === 0 ? TEAM.length - 1 : a - 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next team members"
              onClick={() => setActive((a) => (a === TEAM.length - 1 ? 0 : a + 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-lime-foreground transition-transform hover:scale-105"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => {
            const featured = active === i
            return (
              <button
                key={member.name}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "group overflow-hidden rounded-3xl border p-3 text-left transition-colors",
                  featured ? "border-transparent bg-card text-card-foreground" : "border-white/10 bg-white/5",
                )}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={member.img || "/placeholder.svg"}
                    alt={`Portrait of ${member.name}`}
                    width={320}
                    height={320}
                    className="aspect-square w-full object-cover"
                  />
                  {featured && (
                    <div className="absolute right-3 top-3 flex flex-col gap-2">
                      {[XIcon, LinkedinIcon, InstagramIcon].map((Icon, idx) => (
                        <span
                          key={idx}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-lime"
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="px-2 py-3">
                  <p className="font-display text-base font-bold">{member.name}</p>
                  <p className={cn("text-sm", featured ? "text-muted-foreground" : "text-forest-foreground/60")}>
                    {member.role}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
