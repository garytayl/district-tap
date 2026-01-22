import { PageHeader } from "@/components/site/PageHeader"
import { Card } from "@/components/ui/Card"
import { allergenNotice } from "@/lib/site-data"

export default function FoodSafetyPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Food Safety"
        title="Allergen information"
        description="Your safety is our priority. Please review our allergen statement before ordering."
      />

      <Card>
        <p className="text-sm text-black/60">{allergenNotice}</p>
        <p className="mt-4 text-sm text-black/60">
          Notify your server of any allergies, and our team will guide you through menu options and preparation details.
        </p>
      </Card>
    </main>
  )
}
