"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
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
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-6 pb-16 pt-10 sm:pt-16">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="light">District Tap</Badge>
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white">
            Exit
          </Link>
        </div>

        {step === "welcome" ? (
          <section className="flex min-h-[70vh] flex-col justify-center gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold sm:text-5xl">Welcome!</h1>
              <p className="text-sm text-white/70">
                We made a mobile-first experience just for you. Ready to start your visit?
              </p>
            </div>
            <Button variant="secondary" size="lg" onClick={() => setStep("location")}>
              Start
            </Button>
          </section>
        ) : null}

        {step === "location" ? (
          <section className="flex min-h-[70vh] flex-col gap-6 pt-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Step 1</p>
              <h2 className="text-3xl font-semibold">Where will you be dining today?</h2>
              <p className="text-sm text-white/70">Choose a location to continue.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {locationOptions.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => {
                    setSelectedLocationId(location.id)
                    setStep("experience")
                  }}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-left transition hover:border-white/40"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{location.name}</p>
                    <p className="text-lg font-semibold">{location.addressLines[0]}</p>
                    <p className="text-sm text-white/60">{location.addressLines[1]}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/50">{location.phone}</span>
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="border-white/30 text-white" onClick={() => setStep("welcome")}>
              Back
            </Button>
          </section>
        ) : null}

        {step === "experience" && selectedLocation ? (
          <section className="flex min-h-[70vh] flex-col gap-6 pt-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Step 2</p>
              <h2 className="text-3xl font-semibold">How do you want to order?</h2>
              <p className="text-sm text-white/70">{selectedLocation.name} is selected.</p>
            </div>
            <div className="grid gap-4">
              <button
                type="button"
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-white/40"
              >
                <p className="text-sm font-semibold">Browse the menu</p>
                <p className="text-sm text-white/60">See lunch, dinner, and drinks.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button href={menuConfig?.href ?? "/menu"} variant="secondary" size="sm">
                    {menuConfig?.label ?? "View Menu"}
                  </Button>
                  <Button href={menuConfig?.drinksHref ?? "/menu/drinks"} variant="outline" size="sm" className="border-white/30 text-white">
                    Drinks Menu
                  </Button>
                </div>
              </button>
              <button
                type="button"
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-white/40"
              >
                <p className="text-sm font-semibold">Dine in</p>
                <p className="text-sm text-white/60">Call or get directions.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button asChild variant="outline" size="sm" className="border-white/30 text-white">
                    <a href={normalizePhone(selectedLocation.phone)}>Call {selectedLocation.phone}</a>
                  </Button>
                  <Button href={selectedLocation.mapUrl} variant="outline" size="sm" className="border-white/30 text-white">
                    Directions
                  </Button>
                </div>
              </button>
              <button
                type="button"
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-white/40"
              >
                <p className="text-sm font-semibold">Delivery + takeout</p>
                <p className="text-sm text-white/60">Head to delivery to complete your order.</p>
                <div className="mt-4">
                  <Button href={selectedLocation.orderUrl} variant="secondary" size="sm">
                    Go to delivery / takeout
                  </Button>
                </div>
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-white/30 text-white"
                onClick={() => setStep("location")}
              >
                Change location
              </Button>
              {mapEmbedUrl ? (
                <Button href={selectedLocation.mapUrl} variant="outline" size="sm" className="border-white/30 text-white">
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
