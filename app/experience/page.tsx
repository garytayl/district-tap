"use client"

import { useMemo, useState } from "react"
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
  const [selectedLocationId, setSelectedLocationId] = useState<keyof typeof locations | null>(null)
  const selectedLocation = useMemo(
    () => (selectedLocationId ? locations[selectedLocationId] : null),
    [selectedLocationId],
  )

  const menuConfig = selectedLocation ? menuByLocation[selectedLocation.id] : null
  const mapEmbedUrl = selectedLocation
    ? getMapEmbedUrl(selectedLocation.mapUrl, selectedLocation.addressLines.join(", "))
    : null

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-6 pb-20 pt-10 sm:pt-16">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="light">Mobile First</Badge>
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white">
            Back to site
          </Link>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold sm:text-4xl">Start your District Tap visit.</h1>
          <p className="text-sm text-white/70">
            Pick a location, then choose how you want to enjoy the menu: dine in, browse menus, or head to delivery.
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Step 1</span>
            <span>Choose a location</span>
          </div>
          <Card className="border-white/10 bg-white/5 text-white">
            <div className="space-y-3">
              <p className="text-sm font-semibold">Map Preview</p>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <div className="aspect-[4/3] w-full">
                  {mapEmbedUrl ? (
                    <iframe
                      title={`${selectedLocation?.name ?? "District Tap"} map`}
                      src={mapEmbedUrl}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center text-sm text-white/70">
                      <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em]">
                        Map
                      </span>
                      <p>Select a location to view directions.</p>
                    </div>
                  )}
                </div>
              </div>
              {selectedLocation ? (
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                  <span>{selectedLocation.addressLines.join(", ")}</span>
                  <Button href={selectedLocation.mapUrl} variant="outline" size="sm" className="border-white/30 text-white">
                    Open in Maps
                  </Button>
                </div>
              ) : null}
            </div>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2">
            {locationOptions.map((location) => {
              const isActive = selectedLocationId === location.id
              return (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => setSelectedLocationId(location.id)}
                  aria-pressed={isActive}
                  className={`flex h-full flex-col gap-3 rounded-3xl border px-6 py-5 text-left transition ${
                    isActive ? "border-amber-400 bg-amber-400/10" : "border-white/10 bg-white/5 hover:border-white/40"
                  }`}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{location.name}</p>
                    <p className="text-lg font-semibold">{location.addressLines[0]}</p>
                    <p className="text-sm text-white/60">{location.addressLines[1]}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/50">{location.phone}</span>
                </button>
              )
            })}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Step 2</span>
            <span>Pick the experience</span>
          </div>
          <Card className="border-white/10 bg-white/5 text-white">
            {selectedLocation ? (
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Selected</p>
                  <p className="text-xl font-semibold">{selectedLocation.name}</p>
                  <p className="text-sm text-white/60">{selectedLocation.addressLines.join(", ")}</p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-sm font-semibold">Browse the menu</p>
                    <p className="text-sm text-white/60">See lunch, dinner, and drinks for this location.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button href={menuConfig?.href ?? "/menu"} variant="secondary" size="sm">
                        {menuConfig?.label ?? "View Menu"}
                      </Button>
                      <Button href={menuConfig?.drinksHref ?? "/menu/drinks"} variant="outline" size="sm" className="border-white/30 text-white">
                        Drinks Menu
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-sm font-semibold">Dine in</p>
                    <p className="text-sm text-white/60">Plan your visit, call ahead, or get directions.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button asChild variant="outline" size="sm" className="border-white/30 text-white">
                        <a href={normalizePhone(selectedLocation.phone)}>Call {selectedLocation.phone}</a>
                      </Button>
                      <Button href={selectedLocation.mapUrl} variant="outline" size="sm" className="border-white/30 text-white">
                        Directions
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-sm font-semibold">Delivery + takeout</p>
                    <p className="text-sm text-white/60">
                      We will send you to DoorDash (or our delivery partner) to complete the order.
                    </p>
                    <div className="mt-4">
                      <Button href={selectedLocation.orderUrl} variant="secondary" size="sm">
                        Go to delivery / takeout
                      </Button>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-xs uppercase tracking-[0.3em] text-white/40 hover:text-white"
                  onClick={() => setSelectedLocationId(null)}
                >
                  Start over
                </button>
              </div>
            ) : (
              <div className="text-sm text-white/60">
                Choose a location above to unlock menu, dine-in, and delivery options.
              </div>
            )}
          </Card>
        </section>
      </div>
    </main>
  )
}
