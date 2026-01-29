"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { Footer } from "@/components/site/Footer"
import { Header } from "@/components/site/Header"

type IntroStage = "black" | "logo" | "logoOut" | "headline" | "rest" | "ready"

const INTRO_TIMINGS = {
  logo: 220,
  logoOut: 1400,
  headline: 1700,
  rest: 4200,
  ready: 4500,
} as const

const CENTER_SIZE = 72

export function SiteIntro({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [introStage, setIntroStage] = useState<IntroStage>(isHome ? "black" : "ready")
  useEffect(() => {
    if (!isHome) {
      setIntroStage("ready")
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIntroStage("ready")
      return
    }

    setIntroStage("black")
    const timers = [
      setTimeout(() => setIntroStage("logo"), INTRO_TIMINGS.logo),
      setTimeout(() => setIntroStage("logoOut"), INTRO_TIMINGS.logoOut),
      setTimeout(() => setIntroStage("headline"), INTRO_TIMINGS.headline),
      setTimeout(() => setIntroStage("rest"), INTRO_TIMINGS.rest),
      setTimeout(() => setIntroStage("ready"), INTRO_TIMINGS.ready),
    ]

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [isHome])

  useEffect(() => {
    if (typeof document === "undefined") return
    document.body.dataset.siteIntro = isHome ? introStage : "ready"

    return () => {
      document.body.dataset.siteIntro = "ready"
    }
  }, [introStage, isHome])

  return (
    <>
      {isHome ? (
        <div
          className={`fixed inset-0 z-50 bg-black transition-opacity duration-700 ${
            introStage === "headline" || introStage === "rest" || introStage === "ready"
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <div
            className={`absolute left-1/2 top-1/2 transition-all duration-1000 ease-out ${
              introStage === "black"
                ? "opacity-0 scale-75"
                : introStage === "logoOut"
                  ? "opacity-0 scale-110"
                  : "opacity-100 scale-100"
            }`}
            style={{
              width: `${CENTER_SIZE}px`,
              height: `${CENTER_SIZE}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src="/logo_mark.png"
              alt="The District Tap"
              fill
              className="object-contain brightness-0 invert"
              priority
            />
          </div>
        </div>
      ) : null}
      <Header />
      {children}
      <Footer />
    </>
  )
}
