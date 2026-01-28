"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { MenuSections } from "@/components/site/MenuSections"
import { locations, untappdUrl } from "@/lib/site-data"
import type { SanityMenu } from "@/lib/sanity"

const locationOptions = Object.values(locations)

const menuByLocation = {
  northside: {
    label: "Northside Menu",
    drinksHref: untappdUrl,
  },
  downtown: {
    label: "Downtown Menu",
    drinksHref: untappdUrl,
  },
}

function getMapEmbedUrl(mapUrl: string, fallbackAddress: string) {
  try {
    const url = new URL(mapUrl)
    const query = url.searchParams.get("q") ?? fallbackAddress
    return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
  } catch {
    return `https://maps.google.com/maps?q=${encodeURIComponent(fallbackAddress)}&output=embed`
  }
}

function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, "")
  return digits.length ? `tel:${digits}` : "#"
}

export default function MobileExperience() {
  const [step, setStep] = useState<"welcome" | "location" | "experience">("welcome")
  const [subStep, setSubStep] = useState<"options" | "menu" | "dine" | "delivery">("options")
  const [selectedLocationId, setSelectedLocationId] = useState<keyof typeof locations | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [menuData, setMenuData] = useState<SanityMenu | null>(null)
  const [menuLoading, setMenuLoading] = useState(false)
  const [menuError, setMenuError] = useState<string | null>(null)
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const selectedLocation = useMemo(
    () => (selectedLocationId ? locations[selectedLocationId] : null),
    [selectedLocationId],
  )

  useEffect(() => {
    document.body.classList.add("experience-mode")
    return () => {
      document.body.classList.remove("experience-mode")
    }
  }, [])

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (subStep !== "menu" || !selectedLocation) {
      setMenuData(null)
      setMenuError(null)
      setMenuLoading(false)
      return
    }

    let isActive = true
    setMenuLoading(true)
    setMenuError(null)

    fetch(`/api/menus/${selectedLocation.id}`)
      .then((response) => response.json())
      .then((payload) => {
        if (!isActive) return
        setMenuData(payload.menu ?? null)
        setMenuError(payload.error ?? null)
      })
      .catch((error: Error) => {
        if (!isActive) return
        setMenuError(error.message)
      })
      .finally(() => {
        if (!isActive) return
        setMenuLoading(false)
      })

    return () => {
      isActive = false
    }
  }, [selectedLocation, subStep])

  const menuConfig = selectedLocation ? menuByLocation[selectedLocation.id] : null
  const mapEmbedUrl = selectedLocation
    ? getMapEmbedUrl(selectedLocation.mapUrl, selectedLocation.addressLines.join(", "))
    : null

  const advanceStep = (nextStep: "welcome" | "location" | "experience", beforeStep?: () => void) => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current)
    }
    setIsTransitioning(true)
    transitionTimeoutRef.current = setTimeout(() => {
      beforeStep?.()
      setStep(nextStep)
      setIsTransitioning(false)
    }, 220)
  }

  const advanceSubStep = (
    nextSubStep: "options" | "menu" | "dine" | "delivery",
    beforeStep?: () => void,
  ) => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current)
    }
    setIsTransitioning(true)
    transitionTimeoutRef.current = setTimeout(() => {
      beforeStep?.()
      setSubStep(nextSubStep)
      setIsTransitioning(false)
    }, 220)
  }

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="relative mx-auto flex w-full flex-col px-6 pb-24 pt-6 sm:px-10 sm:pt-10">
        <div className="flex items-center justify-between gap-3">
          <div className="relative h-9 w-9">
            <Image
              src="/logo_mark.png"
              alt="The District Tap"
              fill
              className="object-contain brightness-0 invert"
              priority
            />
          </div>
          <Link
            href="/?skipExperience=1"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white"
          >
            Back to main site
          </Link>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              step === "welcome" ? "bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.7)]" : "bg-white/20"
            }`}
            aria-label="Welcome"
          />
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              step === "location" ? "bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.7)]" : "bg-white/20"
            }`}
            aria-label="Location"
          />
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              step === "experience" ? "bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.7)]" : "bg-white/20"
            }`}
            aria-label="Options"
          />
        </div>

        {step === "welcome" ? (
          <section
            key="welcome"
            className={`flex min-h-[82svh] flex-col justify-center gap-10 transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            } animate-in fade-in-0 slide-in-from-bottom-8`}
          >
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Welcome</p>
              <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">Hungry? You are in the right place.</h1>
              <p className="text-lg text-white/70 sm:text-xl">
                Meet The District Tap. Two Indianapolis locations, one massive menu, and fast ways to order.
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="text-base sm:text-lg active:scale-[0.98] transition"
              onClick={() => advanceStep("location")}
            >
              Find your location
            </Button>
          </section>
        ) : null}

        {step === "location" ? (
          <section
            key="location"
            className={`flex min-h-[82svh] flex-col gap-8 pt-6 transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            } animate-in fade-in-0 slide-in-from-bottom-8`}
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Location</p>
              <h2 className="text-4xl font-semibold sm:text-5xl">Pick your District Tap.</h2>
              <p className="text-base text-white/70 sm:text-lg">Choose a location to see menus, dine in, or order online.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {locationOptions.map((location, index) => (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => {
                    advanceStep("experience", () => {
                      setSelectedLocationId(location.id)
                      setSubStep("options")
                    })
                  }}
                  className={`glass-tile flex h-full flex-col gap-5 px-7 py-8 text-left active:scale-[0.98] ${
                    index === 0 ? "border-amber-400/40 bg-amber-400/10 glass-glow" : ""
                  }`}
                >
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">{location.name}</p>
                    <p className="text-2xl font-semibold sm:text-3xl">{location.addressLines[0]}</p>
                    <p className="text-base text-white/60 sm:text-lg">{location.addressLines[1]}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/50">{location.phone}</span>
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 text-white active:scale-[0.98] transition"
              onClick={() => advanceStep("welcome")}
            >
              Back
            </Button>
          </section>
        ) : null}

        {step === "experience" && selectedLocation ? (
          <section
            key="experience"
            className={`flex min-h-[82svh] flex-col gap-8 pt-6 transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            } animate-in fade-in-0 slide-in-from-bottom-8`}
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Options</p>
              <h2 className="text-4xl font-semibold sm:text-5xl">What are you craving?</h2>
              <p className="text-base text-white/70 sm:text-lg">{selectedLocation.name} is selected.</p>
            </div>

            {subStep === "options" ? (
              <div className="grid gap-5">
                <button
                  type="button"
                  onClick={() => advanceSubStep("menu")}
                  className="glass-tile p-7 text-left active:scale-[0.98]"
                >
                  <p className="text-2xl font-semibold sm:text-3xl">Menus</p>
                  <p className="text-base text-white/60 sm:text-lg">Lunch, dinner, and drinks.</p>
                </button>
                <button
                  type="button"
                  onClick={() => advanceSubStep("dine")}
                  className="glass-tile p-7 text-left active:scale-[0.98]"
                >
                  <p className="text-2xl font-semibold sm:text-3xl">Dine in</p>
                  <p className="text-base text-white/60 sm:text-lg">Call ahead or get directions.</p>
                </button>
                <button
                  type="button"
                  onClick={() => advanceSubStep("delivery")}
                  className="glass-tile p-7 text-left active:scale-[0.98]"
                >
                  <p className="text-2xl font-semibold sm:text-3xl">Delivery + takeout</p>
                  <p className="text-base text-white/60 sm:text-lg">Order online now.</p>
                </button>
              </div>
            ) : null}

            {subStep === "menu" ? (
              <div className="grid gap-5">
                <div className="glass-tile p-7 text-left">
                  <p className="text-2xl font-semibold sm:text-3xl">Food menu</p>
                  <p className="text-base text-white/60 sm:text-lg">Lunch + dinner favorites.</p>
                </div>
                {menuLoading ? (
                  <div className="glass-tile p-7 text-sm text-white/60">Loading menu...</div>
                ) : null}
                {!menuLoading && menuError ? (
                  <div className="glass-tile p-7 text-sm text-white/60">Unable to load menu right now.</div>
                ) : null}
                {!menuLoading && !menuError && menuData ? <MenuSections menu={menuData} /> : null}
                {!menuLoading && !menuError && !menuData ? (
                  <div className="glass-tile p-7 text-sm text-white/60">Menu not available yet.</div>
                ) : null}
                <div className="glass-tile p-7 text-left">
                  <p className="text-2xl font-semibold sm:text-3xl">Drinks</p>
                  <p className="text-base text-white/60 sm:text-lg">Cocktails, beer, and wine.</p>
                  <div className="mt-6">
                    <Button
                      href={menuConfig?.drinksHref ?? "/menu/drinks"}
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white text-base sm:text-lg active:scale-[0.98] transition"
                    >
                      Drinks Menu
                    </Button>
                  </div>
                </button>
              </div>
            ) : null}

            {subStep === "dine" ? (
              <div className="grid gap-5">
                <button type="button" className="glass-tile p-7 text-left active:scale-[0.98]">
                  <p className="text-2xl font-semibold sm:text-3xl">Call ahead</p>
                  <p className="text-base text-white/60 sm:text-lg">Save your spot or ask a question.</p>
                  <div className="mt-6">
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white text-base sm:text-lg active:scale-[0.98] transition"
                    >
                      <a href={normalizePhone(selectedLocation.phone)}>Call {selectedLocation.phone}</a>
                    </Button>
                  </div>
                </button>
                <button type="button" className="glass-tile p-7 text-left active:scale-[0.98]">
                  <p className="text-2xl font-semibold sm:text-3xl">Directions</p>
                  <p className="text-base text-white/60 sm:text-lg">Navigate to the restaurant.</p>
                  <div className="mt-6">
                    <Button
                      href={selectedLocation.mapUrl}
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white text-base sm:text-lg active:scale-[0.98] transition"
                    >
                      Open map
                    </Button>
                  </div>
                </button>
              </div>
            ) : null}

            {subStep === "delivery" ? (
              <div className="grid gap-5">
                <button type="button" className="glass-tile p-7 text-left active:scale-[0.98]">
                  <p className="text-2xl font-semibold sm:text-3xl">Order delivery</p>
                  <p className="text-base text-white/60 sm:text-lg">Complete your order online.</p>
                  <div className="mt-6">
                    <Button
                      href={selectedLocation.orderUrl}
                      variant="secondary"
                      size="lg"
                      className="text-base sm:text-lg active:scale-[0.98] transition"
                    >
                      Go to delivery / takeout
                    </Button>
                  </div>
                </button>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3">
              {subStep === "options" ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white active:scale-[0.98] transition"
                  onClick={() => advanceStep("location")}
                >
                  Change location
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white active:scale-[0.98] transition"
                  onClick={() => advanceSubStep("options")}
                >
                  Back to options
                </Button>
              )}
              {mapEmbedUrl ? (
                <Button
                  href={selectedLocation.mapUrl}
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white active:scale-[0.98] transition"
                >
                  Open map
                </Button>
              ) : null}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  )
}
