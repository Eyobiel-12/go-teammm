"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function ContactSection() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="contact" className="bg-muted py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t(translations.contact.title, language)}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t(translations.contact.subtitle, language)}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="rounded-lg bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground">{t(translations.contact.phone, language)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">+31 (0)20 123 4567</p>
              <p className="text-sm text-muted-foreground">{t(translations.contact.hours, language)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="rounded-lg bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground">{t(translations.contact.email, language)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">info@goteam.nl</p>
              <p className="text-sm text-muted-foreground">{t(translations.contact.response, language)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="rounded-lg bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground">{t(translations.contact.location, language)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Amsterdam, Nederland</p>
              <p className="text-sm text-muted-foreground">{t(translations.contact.visit, language)}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mx-auto mt-12 max-w-2xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{t(translations.contact.form.name, language)} *</Label>
                  <Input
                    id="name"
                    placeholder={t(translations.contact.form.namePlaceholder, language)}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t(translations.contact.email, language)} *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t(translations.contact.form.emailPlaceholder, language)}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t(translations.contact.phone, language)}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t(translations.contact.form.phonePlaceholder, language)}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">{t(translations.contact.form.company, language)}</Label>
                  <Input
                    id="company"
                    placeholder={t(translations.contact.form.companyPlaceholder, language)}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t(translations.contact.form.message, language)} *</Label>
                <Textarea
                  id="message"
                  placeholder={t(translations.contact.form.messagePlaceholder, language)}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                {t(translations.contact.form.submit, language)}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
