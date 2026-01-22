import { LocationCard } from "@/components/site/LocationCard"
import { PageHeader } from "@/components/site/PageHeader"
import { Badge } from "@/components/ui/Badge"
import { Card } from "@/components/ui/Card"
import { locations } from "@/lib/site-data"

const team = [
  {
    name: "Brett M.",
    role: "General Manager",
    quote: "We build community one pour and one plate at a time.",
  },
  {
    name: "Jess R.",
    role: "Bar Manager",
    quote: "Our cocktail list changes with the seasons, not the trends.",
  },
  {
    name: "Marco L.",
    role: "Kitchen Lead",
    quote: "We chase big flavor and keep it honest.",
  },
]

export default function WhoWeArePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
      <PageHeader
        eyebrow="Who We Are"
        title="Craft beer, cocktails, and damn good food since 2014."
        description="The District Tap is where Indy comes to watch the game, unwind after work, and celebrate with friends."
      />

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <p className="text-sm text-black/70">
            From day one, our mission has been simple: bring people together with great food, serious beer, and a relaxed
            vibe. Today, both locations serve lunch, dinner, and late-night favorites with a lineup of local brews,
            bourbon, and cocktails you will not find anywhere else.
          </p>
          <p className="text-sm text-black/70">
            Expect big screens for sports, shuffleboard for competition, and live music for those nights you want to
            keep going. Every visit should feel like your spot.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Craft Beer</Badge>
            <Badge>Cocktails</Badge>
            <Badge>Live Music</Badge>
            <Badge>Private Events</Badge>
          </div>
        </Card>
        <Card className="space-y-3">
          <h3 className="text-lg font-semibold">Find your vibe</h3>
          <p className="text-sm text-black/60">
            Come for happy hour, stay for the main event. We are here for big screens, bigger flavors, and unforgettable
            nights.
          </p>
        </Card>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Meet the team</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name}>
              <p className="text-sm uppercase tracking-[0.2em] text-black/50">{member.role}</p>
              <p className="mt-3 text-lg font-semibold">{member.name}</p>
              <p className="mt-2 text-sm text-black/60">“{member.quote}”</p>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.values(locations).map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </main>
  )
}
