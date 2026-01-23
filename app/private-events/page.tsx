import Link from "next/link"

import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { downtownSpaces, northsideSpaces, quickActions } from "@/lib/site-data"

export default function PrivateEventsPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
      <PageHeader
        eyebrow="Private Events"
        title="Spaces built for celebrations."
        description="From private rooms to semi-private lounges, The District Tap makes it easy to host, meet, or celebrate."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/private-events/northside" variant="secondary">
            Northside Rooms
          </Button>
          <Button href="/private-events/downtown" variant="outline">
            Downtown Rooms
          </Button>
          <Button href={quickActions[1].href} variant="primary">
            Book a Private Room
          </Button>
        </div>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-semibold">Northside</h2>
          <p className="text-sm text-black/60">{northsideSpaces.length} rooms · multiple formats</p>
          <ul className="mt-4 space-y-2 text-sm text-black/60">
            {northsideSpaces.map((space) => (
              <li key={space.slug} className="flex items-center justify-between">
                <span>{space.name}</span>
                <Link href={`/private-events/northside/${space.slug}`} className="font-semibold text-black/60 hover:text-black">
                  More info
                </Link>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold">Downtown</h2>
          <p className="text-sm text-black/60">{downtownSpaces.length} rooms · downtown energy</p>
          <ul className="mt-4 space-y-2 text-sm text-black/60">
            {downtownSpaces.map((space) => (
              <li key={space.slug} className="flex items-center justify-between">
                <span>{space.name}</span>
                <Link href={`/private-events/downtown/${space.slug}`} className="font-semibold text-black/60 hover:text-black">
                  More info
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card>
        <h3 className="text-xl font-semibold">Event inquiries</h3>
        <p className="text-sm text-black/60">
          Contact Nikki Snodgrass, Events + Catering Manager, for custom menus and private event pricing.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href="mailto:events@thedistricttap.com" variant="secondary">
            Email Events Team
          </Button>
          <Button href="/catering" variant="outline">
            View Catering
          </Button>
        </div>
        <p className="mt-3 text-xs text-black/50">Event fees are subject to service charges and taxes.</p>
      </Card>
    </main>
  )
}
