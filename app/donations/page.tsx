import { PageHeader } from "@/components/site/PageHeader"
import { Card } from "@/components/ui/Card"

export default function DonationsPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Donations"
        title="Donation request policy"
        description="We love supporting Indiana organizations through charitable giving."
      />

      <Card>
        <ul className="list-disc space-y-2 pl-5 text-sm text-black/60">
          <li>We do not provide donations to individuals or direct cash requests.</li>
          <li>Each organization may receive one donation per year.</li>
          <li>Requests should be submitted at least 30 days in advance.</li>
          <li>Email requests to marketing@thedistricttap.com or mail to the Northside address.</li>
          <li>We prioritize Indiana-based organizations and community events.</li>
        </ul>
      </Card>
    </main>
  )
}
