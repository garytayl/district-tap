"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/Button"
import { locations, navLinks, quickActions } from "@/lib/site-data"

type MobileMenuOverlayProps = {
  open: boolean
  onClose: () => void
}

type SubmenuKey = "menu" | "private-events" | null

export function MobileMenuOverlay({ open, onClose }: MobileMenuOverlayProps) {
  const [submenu, setSubmenu] = useState<SubmenuKey>(null)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    setSubmenu(null)
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 h-[100svh]">
      <div
        role="presentation"
        onClick={onClose}
        className="absolute inset-0 h-[100svh] bg-black/95"
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="site-glow-layer" />
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute inset-0 site-noise" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col text-white">
        <div className="flex items-center justify-between px-6 pt-6">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9">
              <Image src="/logo_mark.png" alt="The District Tap" fill className="object-contain brightness-0 invert" />
            </div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Menu</span>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="border-white/30 text-white hover:border-white/80 hover:bg-white/10"
            onClick={onClose}
          >
            Close
          </Button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-12 pt-8 [scrollbar-gutter:stable]">
          <div className="space-y-6">
            <div className="glass-panel px-6 py-7">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Quick order</p>
              <p className="mt-3 text-2xl font-semibold">Start an order in seconds.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button href={quickActions[0].href} variant="secondary" size="lg">
                  Order Now
                </Button>
                <Button href="/experience" variant="outline" size="lg" className="border-white/30 text-white">
                  Mobile Experience
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Navigate</p>
              {submenu === "menu" ? (
                <div className="space-y-3">
                  <div className="glass-tile px-6 py-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">Menu</p>
                    <p className="mt-2 text-xl font-semibold">Pick a menu.</p>
                    <div className="mt-4 grid gap-2">
                      <Button href="/menu/lunch-and-dinner" variant="outline" size="sm" className="border-white/30 text-white">
                        Lunch + Dinner
                      </Button>
                      <Button href="/menu/drinks" variant="outline" size="sm" className="border-white/30 text-white">
                        Drinks
                      </Button>
                    </div>
                  </div>
                  <Button type="button" variant="outline" size="sm" className="border-white/20 text-white" onClick={() => setSubmenu(null)}>
                    Back
                  </Button>
                </div>
              ) : submenu === "private-events" ? (
                <div className="space-y-3">
                  <div className="glass-tile px-6 py-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">Private Events</p>
                    <p className="mt-2 text-xl font-semibold">Choose a location.</p>
                    <div className="mt-4 grid gap-2">
                      <Button href="/private-events/northside" variant="outline" size="sm" className="border-white/30 text-white">
                        Northside
                      </Button>
                      <Button href="/private-events/downtown" variant="outline" size="sm" className="border-white/30 text-white">
                        Downtown
                      </Button>
                    </div>
                  </div>
                  <Button type="button" variant="outline" size="sm" className="border-white/20 text-white" onClick={() => setSubmenu(null)}>
                    Back
                  </Button>
                </div>
              ) : (
                <div className="grid gap-3">
                  {navLinks.map((link) => {
                    const hasMenuSubmenu = link.label === "Menu"
                    const hasPrivateEventsSubmenu = link.label === "Private Events"

                    if (hasMenuSubmenu || hasPrivateEventsSubmenu) {
                      return (
                        <button
                          key={link.label}
                          type="button"
                          onClick={() => setSubmenu(hasMenuSubmenu ? "menu" : "private-events")}
                          className="glass-tile px-6 py-5 text-left transition hover:border-white/40"
                        >
                          <p className="text-lg font-semibold text-white">{link.label}</p>
                          <p className="mt-1 text-sm text-white/60">Tap to explore</p>
                        </button>
                      )
                    }

                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={onClose}
                        className="glass-tile px-6 py-5 text-lg font-semibold text-white transition hover:border-white/40 hover:text-amber-200"
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Locations</p>
              <div className="grid gap-3">
                {Object.values(locations).map((location) => (
                  <div key={location.id} className="glass-tile px-6 py-5">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/60">{location.name}</p>
                      <p className="text-lg font-semibold">{location.addressLines[0]}</p>
                      <p className="text-sm text-white/70">{location.addressLines[1]}</p>
                      <p className="text-sm text-white/70">{location.phone}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button href={location.mapUrl} variant="outline" size="sm" className="border-white/20 text-white">
                        Directions
                      </Button>
                      <Button href={location.orderUrl} variant="secondary" size="sm">
                        Order
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {quickActions.slice(1).map((action) => (
                <Button key={action.label} href={action.href} variant="outline" size="sm" className="border-white/20 text-white">
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
