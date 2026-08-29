"use client"

import { useState } from "react"
import { Phone, Menu, X, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Contact", href: "#contact" },
]

function Logo({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn("font-display text-xl font-bold leading-tight", className)}>
      Dr Euel Lewi
      <span className="block text-xs font-medium text-forest-foreground/70">Speciality Dental Clinic</span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header id="home" className="relative z-40 bg-forest text-forest-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-forest-foreground/80 transition-colors hover:text-lime"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Phone className="h-4 w-4 text-lime" />
            </span>
            <div className="leading-tight">
              <p className="text-[11px] text-forest-foreground/60">Hotline 24/7</p>
              <p className="text-sm font-semibold">+251 910 363 238</p>
            </div>
          </div>

          <button
            className="hidden h-11 items-center gap-2 rounded-full bg-lime px-2 pl-4 text-sm font-semibold text-lime-foreground transition-transform hover:scale-[1.03] md:flex"
            type="button"
          >
            Let&apos;s Talk
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-lime">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            type="button"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-medium text-forest-foreground/80"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
