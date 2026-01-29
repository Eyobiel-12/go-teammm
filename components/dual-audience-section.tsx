"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, UserCircle, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function DualAudienceSection() {
  const { language } = useLanguage()
  const employerBenefits = t(translations.dual.employersBenefits, language)
  const seekerBenefits = t(translations.dual.seekersBenefits, language)

  return (
    <section className="bg-muted py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t(translations.dual.title, language)}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t(translations.dual.subtitle, language)}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Employers Card */}
          <Card
            id="werkgevers"
            className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20"
          >
            <CardContent className="p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="rounded-xl bg-primary/10 p-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Building2 className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">{t(translations.dual.employers, language)}</h3>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {t(translations.dual.employersDesc, language)}
              </p>

              <ul className="space-y-4 mb-10">
                {employerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full group/btn text-base py-6" asChild>
                <Link href="#contact">
                  {t(translations.dual.contactBtn, language)}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Job Seekers Card */}
          <Card
            id="werknemers"
            className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-secondary/20"
          >
            <CardContent className="p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="rounded-xl bg-secondary/10 p-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <UserCircle className="h-8 w-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">{t(translations.dual.seekers, language)}</h3>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {t(translations.dual.seekersDesc, language)}
              </p>

              <ul className="space-y-4 mb-10">
                {seekerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full group/btn text-base py-6" variant="secondary" asChild>
                <Link href="#vacatures">
                  {t(translations.dual.vacanciesBtn, language)}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
