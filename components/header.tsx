"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { LanguageSwitcher } from "./language-switcher"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language } = useLanguage()

  const navItems = [
    { label: t(translations.nav.services, language), href: "#diensten" },
    { label: t(translations.nav.sectors, language), href: "#sectoren" },
    { label: t(translations.nav.countries, language), href: "#landen" },
    { label: t(translations.nav.about, language), href: "#over-ons" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/goteamlogo.jpeg"
            alt="Go-team logo"
            width={140}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-primary hover:bg-primary/5"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <div className="w-px h-6 bg-border mx-2" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                {t(translations.nav.register, language)}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="#werkgevers" className="cursor-pointer">
                  {t(translations.nav.asEmployer, language)}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#werknemers" className="cursor-pointer">
                  {t(translations.nav.asEmployee, language)}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild size="sm" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="#contact">{t(translations.nav.contact, language)}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-lg md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-border my-3" />
            <div className="flex flex-col gap-2">
              <Button variant="outline" asChild className="justify-start bg-transparent">
                <Link href="#werkgevers" onClick={() => setMobileMenuOpen(false)}>
                  {t(translations.nav.asEmployer, language)}
                </Link>
              </Button>
              <Button variant="outline" asChild className="justify-start bg-transparent">
                <Link href="#werknemers" onClick={() => setMobileMenuOpen(false)}>
                  {t(translations.nav.asEmployee, language)}
                </Link>
              </Button>
              <Button asChild>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  {t(translations.nav.contact, language)}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
