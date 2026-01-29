"use client"

import Link from "next/link"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold">Go-team</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-80">{t(translations.footer.description, language)}</p>
            <div className="mt-6 flex items-center gap-4">
              <Link href="#" className="opacity-70 transition-opacity hover:opacity-100" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:info@go-team.nl"
                className="opacity-70 transition-opacity hover:opacity-100"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="tel:+31123456789"
                className="opacity-70 transition-opacity hover:opacity-100"
                aria-label={t(translations.contact.phone, language)}
              >
                <Phone className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg">{t(translations.footer.forEmployers, language)}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  {t(translations.footer.recruitment, language)}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  {t(translations.footer.tempWork, language)}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  {t(translations.footer.secondment, language)}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  {t(translations.footer.payroll, language)}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">{t(translations.footer.forSeekers, language)}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  {t(translations.footer.vacancies, language)}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  {t(translations.footer.uploadCV, language)}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  {t(translations.footer.workAreas, language)}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  {t(translations.footer.faq, language)}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">{t(translations.nav.contact, language)}</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-70" />
                <span className="text-sm opacity-70">
                  Bedrijfsweg 123
                  <br />
                  1234 AB Amsterdam
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 opacity-70" />
                <Link href="tel:+31123456789" className="text-sm opacity-70 hover:opacity-100">
                  +31 (0)12 345 6789
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 opacity-70" />
                <Link href="mailto:info@go-team.nl" className="text-sm opacity-70 hover:opacity-100">
                  info@go-team.nl
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">
            {new Date().getFullYear()} Go-team. {t(translations.footer.rights, language)}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm opacity-70 hover:opacity-100">
              {t(translations.footer.privacy, language)}
            </Link>
            <Link href="#" className="text-sm opacity-70 hover:opacity-100">
              {t(translations.footer.terms, language)}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
