import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { loyaltyBenefits, loyaltySignupUrl } from "@/lib/site-data"

export default function LoyaltyPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Loyalty"
        title="Damn Good Rewards"
        description="Earn points every time you visit and turn them into your next meal or round."
      >
        <Button href={loyaltySignupUrl} variant="secondary">
          Join the Loyalty Program
        </Button>
      </PageHeader>

      <Card>
        <h2 className="text-xl font-semibold">Program benefits</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
          {loyaltyBenefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </Card>
    </main>
  )
}
