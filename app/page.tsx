import { SiteHeader } from "@/components/dentalx/site-header"
import { Hero } from "@/components/dentalx/hero"
import { About } from "@/components/dentalx/about"
import { Services } from "@/components/dentalx/services"
import { HowItWorks } from "@/components/dentalx/how-it-works"
import { Faq } from "@/components/dentalx/faq"
import { Contact } from "@/components/dentalx/contact"
import { Cta } from "@/components/dentalx/cta"
import { SiteFooter } from "@/components/dentalx/site-footer"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Faq />
      <Contact />
      <Cta />
      <SiteFooter />
    </main>
  )
}
