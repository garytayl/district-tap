import Link from "next/link"

import { LocationCard } from "@/components/site/LocationCard"
import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { aboutHighlights, locations } from "@/lib/site-data"

export default function AboutPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
      <PageHeader
        eyebrow="About"
        title="Built on craft, community, and a damn good time."
        description="Since 2014, The District Tap has delivered craft beer, cocktails, and food worth gathering for."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/about/who-we-are" variant="secondary">
            Read Our Story
          </Button>
          <Button href="/events" variant="outline">
            Explore Events
          </Button>
        </div>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-2">
        {aboutHighlights.map((highlight) => (
          <Card key={highlight}>
            <p className="text-sm text-black/60">{highlight}</p>
          </Card>
        ))}
      </div>

      <Card className="space-y-4">
        <h2 className="text-2xl font-semibold">Find your vibe</h2>
        <p className="text-sm text-black/60">
          Northside and Downtown are built for every occasion: big screens for game day, live music on the patio, curated
          cocktails at the bar, and shareable food for your crew.
        </p>
        <Link href="/menu" className="text-sm font-semibold text-black/60 hover:text-black">
          Explore the menus →
        </Link>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.values(locations).map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </main>
  )
}
