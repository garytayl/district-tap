import { notFound } from "next/navigation"
import Link from "next/link"

import { PageHeader } from "@/components/site/PageHeader"
import { Badge } from "@/components/ui/Badge"
import { Card } from "@/components/ui/Card"
import { events } from "@/lib/site-data"

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((item) => item.slug === params.slug)

  if (!event) {
    notFound()
  }

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Event"
        title={event.title}
        description={event.description}
      >
        <div className="flex flex-wrap gap-2">
          <Badge>{event.dateLabel}</Badge>
          <Badge>{event.timeLabel}</Badge>
          <Badge>{event.locationId === "both" ? "Both locations" : event.locationId}</Badge>
        </div>
      </PageHeader>

      <Card>
        <h2 className="text-xl font-semibold">Event details</h2>
        <div className="mt-4 space-y-3 text-sm text-black/60">
          <p>Lineup and specials are subject to change. Follow us on social for updates.</p>
          {event.lineup ? (
            <div>
              <p className="font-semibold text-black">Lineup</p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                {event.lineup.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {event.specials ? (
            <div>
              <p className="font-semibold text-black">Specials</p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                {event.specials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Share + add to calendar</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link href="https://calendar.google.com/calendar" className="rounded-full border border-black/15 px-4 py-2">
            Google Calendar
          </Link>
          <Link href="https://outlook.office.com/calendar" className="rounded-full border border-black/15 px-4 py-2">
            Outlook 365
          </Link>
          <Link href="https://outlook.live.com/calendar" className="rounded-full border border-black/15 px-4 py-2">
            Outlook Live
          </Link>
          <Link href="https://www.facebook.com" className="rounded-full border border-black/15 px-4 py-2">
            Facebook
          </Link>
          <Link href="https://www.linkedin.com" className="rounded-full border border-black/15 px-4 py-2">
            LinkedIn
          </Link>
        </div>
      </Card>
    </main>
  )
}
