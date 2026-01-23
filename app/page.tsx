import Link from "next/link"

import { AmbientBackground } from "@/components/sections/AmbientBackground"
import { LocationCard } from "@/components/site/LocationCard"
import { PageHeader } from "@/components/site/PageHeader"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { events, locations, menuLinks, quickActions } from "@/lib/site-data"

export default function Home() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <AmbientBackground />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24">
          <div className="max-w-2xl space-y-6">
            <Badge className="bg-white/10 text-white">Indianapolis</Badge>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Craft beer, cocktails, and damn good food at The District Tap.
            </h1>
            <p className="text-sm text-white/70 md:text-base">
              Two locations. One vibe. Join us for lunch, dinner, live music, private events, and the best draft list in
              the city.
            </p>
            <div className="flex flex-wrap gap-3">
              {quickActions.map((action) => (
                <Button key={action.label} href={action.href} variant="secondary" size="lg">
                  {action.label}
                </Button>
              ))}
              <Button href="/menu" variant="outline" size="lg" className="border-white/40 text-white">
                View Menus
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.values(locations).map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <PageHeader
          eyebrow="Menus"
          title="Every craving has a home here."
          description="Explore our lunch + dinner, event, and brunch menus, plus curated drinks for each location."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {menuLinks.map((link) => (
            <Card key={link.href} className="flex items-center justify-between">
              <div>
                <p className="text-sm text-black/50">Menu</p>
                <p className="text-lg font-semibold">{link.label}</p>
              </div>
              <Button href={link.href} variant="outline" size="sm">
                Open
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5">
            <Badge className="bg-white/10 text-white">Live Music & Events</Badge>
            <h2 className="text-3xl font-semibold">Your calendar just got better.</h2>
            <p className="text-sm text-white/70 md:text-base">
              From live music and summer concert series to brunch takeovers, keep up with what is happening across both
              locations.
            </p>
            <Button href="/events" variant="secondary" size="lg">
              View Event Calendar
            </Button>
          </div>
          <div className="space-y-4">
            {events.slice(0, 2).map((event) => (
              <Card key={event.slug} className="bg-white/5 text-white">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60">
                    <span>{event.dateLabel}</span>
                    <span>{event.timeLabel}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-sm text-white/70">{event.description}</p>
                  <Button href={`/events/${event.slug}`} variant="outline" size="sm" className="border-white/20 text-white">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <PageHeader
          eyebrow="Private Events"
          title="Host your next event with us."
          description="Private rooms, full A/V, flexible menus, and a team that knows how to throw a party."
        >
          <div className="flex flex-wrap gap-3">
            <Button href="/private-events" variant="primary">
              Explore Event Spaces
            </Button>
            <Button href={quickActions[1].href} variant="outline">
              Submit Inquiry
            </Button>
          </div>
        </PageHeader>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Northside Rooms</h3>
            <p className="text-sm text-black/60">
              The Rickhouse, Craft Cellar, Game Room, Parlor, and Fieldhouse.
            </p>
            <Button href="/private-events/northside" variant="outline" size="sm" className="mt-4">
              View Northside
            </Button>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Downtown Rooms</h3>
            <p className="text-sm text-black/60">Downtown Parlor, Fieldhouse, and flexible lounge options.</p>
            <Button href="/private-events/downtown" variant="outline" size="sm" className="mt-4">
              View Downtown
            </Button>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Catering + Event Menu</h3>
            <p className="text-sm text-black/60">Full-service catering and large-format menus for groups.</p>
            <Button href="/catering" variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </Card>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2">
        <Card>
          <h3 className="text-xl font-semibold">Gift Cards</h3>
          <p className="text-sm text-black/60">
            Give the gift of great food, great beer, and even better experiences.
          </p>
          <div className="mt-4">
            <Button href="/gift-cards" variant="secondary">
              Buy Gift Cards
            </Button>
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold">Join the team</h3>
          <p className="text-sm text-black/60">
            We are always looking for people who care about hospitality, craft, and community.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button href="/careers" variant="primary">
              View Careers
            </Button>
            <Button href="/careers/northside-application" variant="outline">
              Apply Northside
            </Button>
            <Button href="/careers/downtown-application" variant="outline">
              Apply Downtown
            </Button>
          </div>
        </Card>
      </section>

      <section className="border-t border-black/10 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
          <p className="text-sm text-black/60">Stay in the loop for new events, menus, and specials.</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/loyalty" variant="secondary" size="sm">
              Join Loyalty
            </Button>
            <Link href="/contact" className="text-sm font-semibold text-black/60 hover:text-black">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
