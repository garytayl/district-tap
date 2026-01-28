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
  const [isMounted, setIsMounted] = useState(open)
  const [isVisible, setIsVisible] = useState(open)

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

  useEffect(() => {
    if (open) {
      setIsMounted(true)
      requestAnimationFrame(() => setIsVisible(true))
      return
    }

    if (!isMounted) return
    setIsVisible(false)
    const timeout = setTimeout(() => setIsMounted(false), 220)
    return () => clearTimeout(timeout)
  }, [open, isMounted])

  if (!isMounted) return null

  return (
    <div
      className={`fixed inset-0 z-50 h-[100svh] transition-opacity duration-200 ease-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div role="presentation" className="pointer-events-none absolute inset-0 h-[100svh] bg-black/98" />
      <div className="pointer-events-none absolute inset-0">
        <div className="site-glow-layer" />
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute inset-0 site-noise" />
      </div>

      <div className="relative z-10 flex h-[100svh] w-full flex-col overflow-y-auto overscroll-contain touch-pan-y bg-neutral-950/95 text-white pointer-events-auto">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-black/90 px-6 pt-6 pb-4 backdrop-blur">
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

        <div className="space-y-6 px-6 pb-12 pt-4 [scrollbar-gutter:stable]">
          <div className="glass-panel px-6 py-7">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-200">Quick Order</p>
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">Fast</span>
            </div>
            <p className="mt-3 text-lg font-semibold">Start an order in seconds.</p>
            <p className="mt-2 text-sm text-white/60">Delivery, carry-out, or the mobile flow.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button href={quickActions[0].href} variant="secondary" size="lg" onClick={onClose}>
                Order Now
              </Button>
              <Button href="/experience" variant="outline" size="lg" className="border-white/30 text-white" onClick={onClose}>
                Mobile Experience
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-200">Navigate</p>
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">Explore</span>
            </div>
            <p className="text-sm text-white/60">Jump into menus, events, and pages.</p>
            <div className="grid gap-3">
              {navLinks.map((link) => {
                const hasMenuSubmenu = link.label === "Menu"
                const hasPrivateEventsSubmenu = link.label === "Private Events"

                if (hasMenuSubmenu) {
                  return (
                    <div key={link.label} className="glass-tile px-6 py-5">
                      <button
                        type="button"
                        onClick={() => setSubmenu(submenu === "menu" ? null : "menu")}
                        className="flex w-full items-center justify-between text-left"
                      >
                        <span className="text-lg font-semibold text-white">{link.label}</span>
                        <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                          {submenu === "menu" ? "Hide" : "Open"}
                        </span>
                      </button>
                      {submenu === "menu" ? (
                        <div className="mt-4 grid gap-2">
                          <Button href="/menu/lunch-and-dinner" variant="outline" size="sm" className="border-white/30 text-white" onClick={onClose}>
                            Lunch + Dinner
                          </Button>
                          <Button href="/menu/drinks" variant="outline" size="sm" className="border-white/30 text-white" onClick={onClose}>
                            Drinks
                          </Button>
                        </div>
                      ) : null}
                    </div>
                  )
                }

                if (hasPrivateEventsSubmenu) {
                  return (
                    <div key={link.label} className="glass-tile px-6 py-5">
                      <button
                        type="button"
                        onClick={() => setSubmenu(submenu === "private-events" ? null : "private-events")}
                        className="flex w-full items-center justify-between text-left"
                      >
                        <span className="text-lg font-semibold text-white">{link.label}</span>
                        <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                          {submenu === "private-events" ? "Hide" : "Open"}
                        </span>
                      </button>
                      {submenu === "private-events" ? (
                        <div className="mt-4 grid gap-2">
                          <Button href="/private-events/northside" variant="outline" size="sm" className="border-white/30 text-white" onClick={onClose}>
                            Northside
                          </Button>
                          <Button href="/private-events/downtown" variant="outline" size="sm" className="border-white/30 text-white" onClick={onClose}>
                            Downtown
                          </Button>
                        </div>
                      ) : null}
                    </div>
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
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-200">Locations</p>
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">Visit</span>
            </div>
            <p className="text-sm text-white/60">Find hours, directions, and order links.</p>
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
                    <Button href={location.mapUrl} variant="outline" size="sm" className="border-white/20 text-white" onClick={onClose}>
                      Directions
                    </Button>
                    <Button href={location.orderUrl} variant="secondary" size="sm" onClick={onClose}>
                      Order
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {quickActions.slice(1).map((action) => (
              <Button key={action.label} href={action.href} variant="outline" size="sm" className="border-white/20 text-white" onClick={onClose}>
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
