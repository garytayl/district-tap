import { LocationCard } from "@/components/site/LocationCard"
import { PageHeader } from "@/components/site/PageHeader"
import { Card } from "@/components/ui/Card"
import { locations, staffContacts } from "@/lib/site-data"

export default function ContactPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
      <PageHeader
        eyebrow="Contact"
        title="Reach the District Tap team"
        description="General inquiries, private events, catering, and media requests."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {Object.values(locations).map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>

      <Card>
        <h2 className="text-xl font-semibold">Key contacts</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {staffContacts.map((contact) => (
            <div key={contact.email} className="text-sm">
              <p className="font-semibold">{contact.name}</p>
              <p className="text-black/60">{contact.role}</p>
              <a href={`mailto:${contact.email}`} className="text-black/60 hover:text-black">
                {contact.email}
              </a>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Send a message</h2>
        <form className="mt-4 grid gap-4 text-sm">
          <input className="rounded-xl border border-black/10 px-3 py-2" placeholder="Name" />
          <input className="rounded-xl border border-black/10 px-3 py-2" placeholder="Email" />
          <textarea className="min-h-[140px] rounded-xl border border-black/10 px-3 py-2" placeholder="How can we help?" />
          <button className="w-fit rounded-full bg-black px-5 py-2 text-sm font-semibold text-white">
            Submit
          </button>
        </form>
      </Card>
    </main>
  )
}
