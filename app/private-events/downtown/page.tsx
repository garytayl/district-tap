import Link from "next/link"

import { PageHeader } from "@/components/site/PageHeader"
import { Card } from "@/components/ui/Card"
import { downtownSpaces } from "@/lib/site-data"

export default function DowntownEventsPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Downtown Private Events"
        title="Downtown spaces with skyline energy."
        description="Private lounges, A/V-ready rooms, and flexible menus for your next downtown event."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {downtownSpaces.map((space) => (
          <Card key={space.slug} className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">{space.size ?? "Private room"}</p>
              <h2 className="text-2xl font-semibold">{space.name}</h2>
              <p className="text-sm text-black/60">{space.description}</p>
            </div>
            <div className="text-sm text-black/60">
              <p>{space.capacitySeated} seated · {space.capacityCocktail} cocktail</p>
              <p>{space.rentalFee}</p>
            </div>
            <Link href={`/private-events/downtown/${space.slug}`} className="text-sm font-semibold text-black/60 hover:text-black">
              More info →
            </Link>
          </Card>
        ))}
      </div>
    </main>
  )
}
