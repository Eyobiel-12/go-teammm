"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Briefcase } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function CTASection() {
  const { language } = useLanguage()
  const employerBenefits = t(translations.cta.employersBenefits, language)
  const seekerBenefits = t(translations.cta.seekersBenefits, language)

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="overflow-hidden border-primary/20 bg-primary/5">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">
                  {t(translations.cta.employersTitle, language)}
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t(translations.cta.employersDesc, language)}
              </p>
              <ul className="mt-6 space-y-3">
                {employerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full sm:w-auto" asChild>
                <Link href="#contact">
                  {t(translations.dual.contactBtn, language)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-secondary/20 bg-secondary/5">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-secondary/10 p-3">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">
                  {t(translations.cta.seekersTitle, language)}
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{t(translations.cta.seekersDesc, language)}</p>
              <ul className="mt-6 space-y-3">
                {seekerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full sm:w-auto" variant="secondary" asChild>
                <Link href="#vacatures">
                  {t(translations.dual.vacanciesBtn, language)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
