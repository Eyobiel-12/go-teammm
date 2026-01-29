"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, UserCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThreeDHeroBackground } from "./3d-hero-background"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function HeroSection() {
  const { language } = useLanguage()

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-b from-primary/10 via-background/80 to-background"
    >
      <ThreeDHeroBackground />

      <div className="pointer-events-none absolute inset-x-0 -top-40 z-0 flex justify-center opacity-70">
        <div className="h-[420px] w-[900px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_65%)] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-28 relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        >
          <motion.h1
            className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            {t(translations.hero.title, language)}{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {t(translations.hero.titleHighlight, language)}
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          >
            {t(translations.hero.description, language)}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-full sm:w-auto"
            >
              <Button size="lg" asChild className="w-full sm:w-auto group shadow-xl hover:shadow-2xl">
                <Link href="#werkgevers">
                  <Building2 className="mr-2 h-5 w-5" />
                  {t(translations.hero.employerBtn, language)}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.02 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto bg-background/80 backdrop-blur-md group shadow-xl hover:shadow-2xl border-border/60"
              >
                <Link href="#werknemers">
                  <UserCircle className="mr-2 h-5 w-5" />
                  {t(translations.hero.seekerBtn, language)}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
