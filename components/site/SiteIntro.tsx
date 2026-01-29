"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { Footer } from "@/components/site/Footer"
import { Header } from "@/components/site/Header"

type IntroStage = "black" | "logo" | "move" | "headline" | "ready"

const INTRO_TIMINGS = {
  logo: 220,
  move: 1200,
  headline: 2000,
  ready: 2700,
} as const

const CENTER_SIZE = 72
const FALLBACK_TARGET = { left: 24, top: 24, width: 36, height: 36 }

export function SiteIntro({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [introStage, setIntroStage] = useState<IntroStage>(isHome ? "black" : "ready")
  const [logoTarget, setLogoTarget] = useState(FALLBACK_TARGET)

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
    if (!isHome) return

    const updateTarget = () => {
      const target = document.querySelector<HTMLElement>("[data-site-intro-target='logo']")
      if (!target) return
      const rect = target.getBoundingClientRect()
      setLogoTarget({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      })
    }

    const raf = window.requestAnimationFrame(updateTarget)
    const timeout = window.setTimeout(updateTarget, 320)
    window.addEventListener("resize", updateTarget)

    return () => {
      window.cancelAnimationFrame(raf)
      window.clearTimeout(timeout)
      window.removeEventListener("resize", updateTarget)
    }
  }, [isHome])

  useEffect(() => {
    if (typeof document === "undefined") return
    document.body.dataset.siteIntro = isHome ? introStage : "ready"

    return () => {
      document.body.dataset.siteIntro = "ready"
    }
  }, [introStage, isHome])

  const targetSize = Math.min(logoTarget.width, logoTarget.height) || FALLBACK_TARGET.width
  const logoStyle =
    introStage === "move" || introStage === "headline" || introStage === "ready"
      ? {
          left: `${logoTarget.left}px`,
          top: `${logoTarget.top}px`,
          width: `${targetSize}px`,
          height: `${targetSize}px`,
          transform: "translate(0, 0)",
        }
      : {
          left: "50%",
          top: "50%",
          width: `${CENTER_SIZE}px`,
          height: `${CENTER_SIZE}px`,
          transform: "translate(-50%, -50%)",
        }

  return (
    <>
      {isHome ? (
        <div
          className={`fixed inset-0 z-50 bg-black transition-opacity duration-700 ${
            introStage === "ready" ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div
            className={`absolute transition-all duration-1000 ease-out ${
              introStage === "black" ? "opacity-0" : "opacity-100"
            }`}
            style={logoStyle}
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
