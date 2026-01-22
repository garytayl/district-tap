import Link from "next/link"

import { PageHeader } from "@/components/site/PageHeader"
import { Badge } from "@/components/ui/Badge"
import { Card } from "@/components/ui/Card"
import { fetchEvents } from "@/lib/sanity"

export default async function EventsPage() {
  const events = await fetchEvents()
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
      <PageHeader
        eyebrow="Live Music & Events"
        title="See what is coming up."
        description="Filter by date, venue, or category and add events to your calendar."
      />

      <Card>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">Date</p>
            <input
              type="date"
              className="mt-2 w-full rounded-xl border border-black/10 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">Venue</p>
            <select className="mt-2 w-full rounded-xl border border-black/10 px-3 py-2 text-sm">
              <option>All locations</option>
              <option>Northside</option>
              <option>Downtown</option>
            </select>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">Category</p>
            <select className="mt-2 w-full rounded-xl border border-black/10 px-3 py-2 text-sm">
              <option>All categories</option>
              <option>Live music</option>
              <option>Happy hour</option>
              <option>Brunch</option>
            </select>
          </div>
        </div>
      </Card>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Upcoming events</h2>
          <Badge>{events.length} events</Badge>
        </div>

        <div className="grid gap-4">
          {events.map((event) => (
            <Card key={event.slug} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                  {event.dateLabel} · {event.timeLabel}
                </p>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-black/60">{event.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/events/${event.slug}`}
                  className="rounded-full border border-black/15 px-4 py-2 text-sm font-semibold text-black/70 hover:border-black hover:text-black"
                >
                  View Details
                </Link>
                <Link
                  href="https://calendar.google.com/calendar"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/15 px-4 py-2 text-sm font-semibold text-black/70 hover:border-black hover:text-black"
                >
                  Add to Calendar
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
