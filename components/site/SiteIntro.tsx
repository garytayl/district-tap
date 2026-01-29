"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { Footer } from "@/components/site/Footer"
import { Header } from "@/components/site/Header"

type IntroStage = "black" | "logo" | "move" | "headline" | "ready"

const INTRO_TIMINGS = {
  logo: 140,
  move: 620,
  headline: 1050,
  ready: 1400,
} as const

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
      setTimeout(() => setIntroStage("move"), INTRO_TIMINGS.move),
      setTimeout(() => setIntroStage("headline"), INTRO_TIMINGS.headline),
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
          className={`fixed inset-0 z-50 bg-black transition-opacity duration-500 ${
            introStage === "ready" ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div
            className={`absolute transition-all duration-700 ease-out ${
              introStage === "move" || introStage === "headline" || introStage === "ready"
                ? "left-6 top-6 translate-x-0 translate-y-0 scale-75 opacity-100"
                : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100"
            } ${introStage === "black" ? "opacity-0" : "opacity-100"}`}
          >
            <div className="relative h-14 w-14">
              <Image
                src="/logo_mark.png"
                alt="The District Tap"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
      <Header />
      {children}
      <Footer />
    </>
  )
}
