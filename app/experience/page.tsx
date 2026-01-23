"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { locations } from "@/lib/site-data"

const locationOptions = Object.values(locations)

const menuByLocation = {
  northside: {
    label: "Northside Menu",
    href: "/menu/lunch-and-dinner/northside",
    drinksHref: "/menu/drinks/northside",
  },
  downtown: {
    label: "Downtown Menu",
    href: "/menu/lunch-and-dinner/downtown",
    drinksHref: "/menu/drinks/downtown",
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
  const [selectedLocationId, setSelectedLocationId] = useState<keyof typeof locations | null>(null)
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

  const menuConfig = selectedLocation ? menuByLocation[selectedLocation.id] : null
  const mapEmbedUrl = selectedLocation
    ? getMapEmbedUrl(selectedLocation.mapUrl, selectedLocation.addressLines.join(", "))
    : null

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
          <Badge variant="light">District Tap</Badge>
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white">
            Exit
          </Link>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              step === "welcome" ? "bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.7)]" : "bg-white/20"
            }`}
          />
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              step === "location" ? "bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.7)]" : "bg-white/20"
            }`}
          />
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              step === "experience" ? "bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.7)]" : "bg-white/20"
            }`}
          />
        </div>

        {step === "welcome" ? (
          <section key="welcome" className="flex min-h-[82svh] flex-col justify-center gap-10 animate-in fade-in-0 slide-in-from-bottom-8">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Mobile experience</p>
              <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">Welcome to your District Tap visit.</h1>
              <p className="text-lg text-white/70 sm:text-xl">
                Tap through a fast, fun flow built for mobile. Big buttons. Quick choices. Zero clutter.
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="text-base sm:text-lg active:scale-[0.98] transition"
              onClick={() => setStep("location")}
            >
              Start the experience
            </Button>
          </section>
        ) : null}

        {step === "location" ? (
          <section key="location" className="flex min-h-[82svh] flex-col gap-8 pt-6 animate-in fade-in-0 slide-in-from-bottom-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Step 1</p>
              <h2 className="text-4xl font-semibold sm:text-5xl">Where will you be dining today?</h2>
              <p className="text-base text-white/70 sm:text-lg">Choose a location to continue.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {locationOptions.map((location, index) => (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => {
                    setSelectedLocationId(location.id)
                    setStep("experience")
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
              onClick={() => setStep("welcome")}
            >
              Back
            </Button>
          </section>
        ) : null}

        {step === "experience" && selectedLocation ? (
          <section key="experience" className="flex min-h-[82svh] flex-col gap-8 pt-6 animate-in fade-in-0 slide-in-from-bottom-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Step 2</p>
              <h2 className="text-4xl font-semibold sm:text-5xl">Choose your vibe.</h2>
              <p className="text-base text-white/70 sm:text-lg">{selectedLocation.name} is selected.</p>
            </div>
            <div className="grid gap-5">
              <button
                type="button"
                className="glass-tile p-7 text-left active:scale-[0.98]"
              >
                <p className="text-xl font-semibold sm:text-2xl">Browse the menu</p>
                <p className="text-base text-white/60 sm:text-lg">See lunch, dinner, and drinks.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href={menuConfig?.href ?? "/menu"}
                    variant="secondary"
                    size="lg"
                    className="text-base sm:text-lg active:scale-[0.98] transition"
                  >
                    {menuConfig?.label ?? "View Menu"}
                  </Button>
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
              <button
                type="button"
                className="glass-tile p-7 text-left active:scale-[0.98]"
              >
                <p className="text-xl font-semibold sm:text-2xl">Dine in</p>
                <p className="text-base text-white/60 sm:text-lg">Call or get directions.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white text-base sm:text-lg active:scale-[0.98] transition"
                  >
                    <a href={normalizePhone(selectedLocation.phone)}>Call {selectedLocation.phone}</a>
                  </Button>
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
              <button
                type="button"
                className="glass-tile p-7 text-left active:scale-[0.98]"
              >
                <p className="text-xl font-semibold sm:text-2xl">Delivery + takeout</p>
                <p className="text-base text-white/60 sm:text-lg">Head to delivery to complete your order.</p>
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
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-white/30 text-white active:scale-[0.98] transition"
                onClick={() => setStep("location")}
              >
                Change location
              </Button>
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
