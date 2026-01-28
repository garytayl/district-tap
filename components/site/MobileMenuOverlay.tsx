"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/Button"
import { locations, navLinks, quickActions } from "@/lib/site-data"

type MobileMenuOverlayProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenuOverlay({ open, onClose }: MobileMenuOverlayProps) {
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

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 h-[100svh]">
      <div
        role="presentation"
        onClick={onClose}
        className="absolute inset-0 h-[100svh] bg-neutral-950/90"
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
              <div className="grid gap-3">
                {navLinks.map((link) => (
                  <div key={link.label} className="glass-tile px-6 py-5">
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-lg font-semibold text-white hover:text-amber-200"
                    >
                      {link.label}
                    </Link>
                    {link.children ? (
                      <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/70">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="rounded-full border border-white/10 px-3 py-1 hover:border-white/40 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
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
