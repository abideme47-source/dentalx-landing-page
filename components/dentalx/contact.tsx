"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, MapPin, Phone } from "lucide-react"
import { SectionLabel } from "./section-label"

const PHONE = "0910363238"
const WHATSAPP_NUMBER = "251910363238"
const LOCATION = "Bole, Getu Commercial Center 3rd Floor"
const MAP_LINK = "https://map.et/w51078505/getu-commercial-center#way51078505"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    message: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = `Hello, I would like to book an appointment.%0A%0AName: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0ADate: ${formData.date}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank")
  }

  return (
    <section id="contact" className="bg-background pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info side */}
          <div className="flex flex-col justify-center">
            <SectionLabel>Contact Us</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
              Reach Out for Your Smile
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Visit us at our clinic or book an appointment. We&apos;re here to help you achieve a healthier smile.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-forest/20"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime text-lime-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-semibold">Our Location</p>
                  <p className="mt-1 text-sm text-muted-foreground">{LOCATION}</p>
                  <p className="mt-2 text-sm font-medium text-forest">View on Map &rarr;</p>
                </div>
              </a>

              <a
                href={`tel:${PHONE}`}
                className="flex items-start gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-forest/20"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime text-lime-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-semibold">Call Us</p>
                  <p className="mt-1 text-sm text-muted-foreground">Tap to call</p>
                  <p className="mt-2 text-sm font-medium text-forest">Book Appointment</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-border p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime text-lime-foreground">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <div>
                  <p className="font-display font-semibold">Working Hours</p>
                  <p className="mt-1 text-sm text-muted-foreground">Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

          {/* Form side */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <h3 className="font-display text-xl font-bold">Book an Appointment</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details and we&apos;ll connect you via WhatsApp.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Field name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                <Field name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
              </div>
              <Field name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
              <Field name="date" type="date" placeholder="Preferred Date" value={formData.date} onChange={handleChange} />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-forest"
              />
              <button
                type="submit"
                className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-lime pl-5 pr-2 text-sm font-semibold text-lime-foreground transition-transform hover:scale-[1.02]"
              >
                Send via WhatsApp
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-lime">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  name: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      aria-label={placeholder}
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-forest"
    />
  )
}
