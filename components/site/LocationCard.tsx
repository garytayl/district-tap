import Link from "next/link"

import { Card } from "@/components/ui/Card"
import type { Location } from "@/lib/site-data"

export function LocationCard({ location }: { location: Location }) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">{location.name}</p>
        {location.addressLines.map((line) => (
          <p key={line} className="text-lg font-semibold">
            {line}
          </p>
        ))}
      </div>
      <div className="space-y-1 text-sm text-black/60">
        {location.hours.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p>{location.phone}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-2">
        <Link
          href="/contact"
          className="rounded-full border border-black/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black/70 hover:border-black hover:text-black"
        >
          Contact Us
        </Link>
        <Link
          href={location.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-black/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black/70 hover:border-black hover:text-black"
        >
          Directions
        </Link>
      </div>
    </Card>
  )
}
