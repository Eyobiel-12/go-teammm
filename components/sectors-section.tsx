"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, Utensils, Truck, Wrench, Heart, ShoppingBag } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function SectorsSection() {
  const { language } = useLanguage()

  const sectors = [
    {
      icon: Building2,
      titleKey: "construction" as const,
      count: "150+",
    },
    {
      icon: Utensils,
      titleKey: "hospitality" as const,
      count: "200+",
    },
    {
      icon: Truck,
      titleKey: "logistics" as const,
      count: "300+",
    },
    {
      icon: Wrench,
      titleKey: "industry" as const,
      count: "180+",
    },
    {
      icon: Heart,
      titleKey: "healthcare" as const,
      count: "120+",
    },
    {
      icon: ShoppingBag,
      titleKey: "retail" as const,
      count: "100+",
    },
  ]

  return (
    <section id="sectoren" className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t(translations.sectors.title, language)}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t(translations.sectors.subtitle, language)}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon
            return (
              <Card
                key={sector.titleKey}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-lg bg-secondary/10 p-3 transition-all duration-300 group-hover:bg-secondary group-hover:scale-110">
                    <Icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground group-hover:text-secondary transition-colors">
                      {t(translations.sectors.items[sector.titleKey], language)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {sector.count} {t(translations.sectors.placements, language)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
