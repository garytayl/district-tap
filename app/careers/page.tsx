import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { careerRoles, careersBenefits } from "@/lib/site-data"

export default function CareersPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Careers"
        title="Work with the District Tap team"
        description="Join a hospitality team that is passionate about craft, service, and community."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/careers/northside-application" variant="secondary">
            Apply Northside
          </Button>
          <Button href="/careers/downtown-application" variant="outline">
            Apply Downtown
          </Button>
        </div>
      </PageHeader>

      <Card>
        <h2 className="text-xl font-semibold">Why work here</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
          {careersBenefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Open positions</h2>
        <div className="mt-4 grid gap-2 text-sm text-black/60 md:grid-cols-2">
          {careerRoles.map((role) => (
            <div key={role} className="rounded-xl border border-black/10 px-3 py-2">
              {role}
            </div>
          ))}
        </div>
      </Card>
    </main>
  )
}
