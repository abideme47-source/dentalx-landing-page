import { ArrowUpRight } from "lucide-react"
import { FacebookIcon, InstagramIcon } from "./brand-icons"

const QUICK_LINKS = ["Home Page", "About Us", "Appointment", "Service"]
const SERVICES = ["General Dental", "Cosmetic Dental", "Whitening Care", "Dental Implants", "Dental Care"]

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/Lewidentalclinic/?_rdc=1&_rdr#",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dr.euellewispecialitydental",
    Icon: InstagramIcon,
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="font-display text-xl font-bold leading-tight">
              Dr Euel Lewi
              <span className="block text-xs font-medium text-forest-foreground/70">Speciality Dental Clinic</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-forest-foreground/70">
              We&apos;re dedicated to providing high-quality, compassionate dental care for patients of all
              ages from preventive care.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" items={QUICK_LINKS} />
          <FooterCol title="Our services" items={SERVICES} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-forest-foreground/60 sm:flex-row">
          <p>&copy; 2024 Dr Euel Lewi Speciality Dental Clinic. All Rights Reserved.</p>
          <a
            href="https://t.me/RAHWA_fd"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-lime"
          >
            Build by Rahwa Digitals
          </a>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-base font-semibold">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-sm text-forest-foreground/70 transition-colors hover:text-lime">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
