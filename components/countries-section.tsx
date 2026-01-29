"use client"

import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function CountriesSection() {
  const { language } = useLanguage()
  const countries = t(translations.countries.list, language)

  return (
    <section id="landen" className="bg-muted py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
            <MapPin className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">{t(translations.countries.badge, language)}</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t(translations.countries.title, language)}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t(translations.countries.subtitle, language)}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {countries.map((country) => (
            <Badge
              key={country}
              variant="secondary"
              className="px-4 py-2.5 text-base cursor-default transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-md"
            >
              {country}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
