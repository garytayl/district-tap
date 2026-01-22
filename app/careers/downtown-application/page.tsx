import { PageHeader } from "@/components/site/PageHeader"
import { Card } from "@/components/ui/Card"
import { applicationSections } from "@/lib/site-data"

export default function DowntownApplicationPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Downtown Application"
        title="Apply to The District Tap Downtown"
        description="Submit your availability and experience for downtown openings."
      />

      <Card>
        <h2 className="text-xl font-semibold">Application overview</h2>
        <div className="mt-4 grid gap-4 text-sm">
          {applicationSections.map((section) => (
            <div key={section.title}>
              <p className="font-semibold">{section.title}</p>
              <p className="text-black/60">{section.fields.join(", ")}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Application form</h2>
        <form className="mt-4 grid gap-4 text-sm">
          <input className="rounded-xl border border-black/10 px-3 py-2" placeholder="Full name" />
          <input className="rounded-xl border border-black/10 px-3 py-2" placeholder="Email" />
          <input className="rounded-xl border border-black/10 px-3 py-2" placeholder="Phone number" />
          <input className="rounded-xl border border-black/10 px-3 py-2" placeholder="Position applied for" />
          <textarea className="min-h-[140px] rounded-xl border border-black/10 px-3 py-2" placeholder="Availability and experience" />
          <button className="w-fit rounded-full bg-black px-5 py-2 text-sm font-semibold text-white">
            Submit Application
          </button>
        </form>
      </Card>
    </main>
  )
}
