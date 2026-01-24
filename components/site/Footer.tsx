import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/Button"
import { locations, navLinks, quickActions } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="relative h-12 w-12">
            <Image src="/logo_mark.png" alt="The District Tap logo mark" fill className="object-contain" />
          </div>
          <h2 className="text-xl font-semibold">The District Tap</h2>
          <p className="text-sm text-black/60">
            Craft beer, cocktails, and damn good food with two Indianapolis locations. Join us for live music, game day,
            private events, and catering.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button href="https://order.online/" variant="secondary" size="sm">
              Order Catering
            </Button>
            <Button href={quickActions[1].href} variant="outline" size="sm">
              Book an Event
            </Button>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-black/60">Locations</h3>
          {Object.values(locations).map((location) => (
            <div key={location.id} className="space-y-1 text-sm">
              <p className="font-semibold">{location.name}</p>
              {location.addressLines.map((line) => (
                <p key={line} className="text-black/60">
                  {line}
                </p>
              ))}
              <p className="text-black/60">{location.phone}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-black/60">Explore</h3>
          <div className="flex flex-col gap-2 text-sm text-black/60">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-black">
                {link.label}
              </Link>
            ))}
            <Link href="/legal" className="hover:text-black">
              Legal
            </Link>
            <Link href="/donations" className="hover:text-black">
              Donation Requests
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 text-xs text-black/60">
          <p>© 2025 The District Tap. All rights reserved.</p>
          <p>Built by LayerLane.</p>
        </div>
      </div>
    </footer>
  )
}
