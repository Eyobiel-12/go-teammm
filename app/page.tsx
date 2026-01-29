"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DualAudienceSection } from "@/components/dual-audience-section"
import { ServicesSection } from "@/components/services-section"
import { SectorsSection } from "@/components/sectors-section"
import { CountriesSection } from "@/components/countries-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import type React from "react"
import { motion } from "framer-motion"
import { LanguageProvider } from "@/lib/language-context"

const SectionReveal = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.section>
)

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
        <Header />
        <main>
          <HeroSection />
          <SectionReveal>
            <DualAudienceSection />
          </SectionReveal>
          <SectionReveal>
            <ServicesSection />
          </SectionReveal>
          <SectionReveal>
            <SectorsSection />
          </SectionReveal>
          <SectionReveal>
            <CountriesSection />
          </SectionReveal>
          <SectionReveal>
            <CTASection />
          </SectionReveal>
          <SectionReveal>
            <ContactSection />
          </SectionReveal>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
