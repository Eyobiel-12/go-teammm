"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, Briefcase, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function ServicesSection() {
  const { language } = useLanguage()

  const services = [
    {
      icon: Users,
      title: t(translations.services.items.recruitment.title, language),
      description: t(translations.services.items.recruitment.desc, language),
    },
    {
      icon: Globe,
      title: t(translations.services.items.international.title, language),
      description: t(translations.services.items.international.desc, language),
    },
    {
      icon: Briefcase,
      title: t(translations.services.items.temp.title, language),
      description: t(translations.services.items.temp.desc, language),
    },
    {
      icon: TrendingUp,
      title: t(translations.services.items.secondment.title, language),
      description: t(translations.services.items.secondment.desc, language),
    },
  ]

  return (
    <section id="diensten" className="bg-muted py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t(translations.services.title, language)}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t(translations.services.subtitle, language)}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="flex flex-col items-start p-6">
                  <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
