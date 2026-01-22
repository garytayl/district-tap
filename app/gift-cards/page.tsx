import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

export default function GiftCardsPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Gift Cards"
        title="Give the gift of The District Tap"
        description="Physical or digital gift cards available for any occasion."
      >
        <Button href="https://www.securetree.com/" variant="secondary">
          Buy Gift Cards
        </Button>
      </PageHeader>

      <Card>
        <h2 className="text-xl font-semibold">Perfect for every occasion</h2>
        <p className="mt-2 text-sm text-black/60">
          Celebrate birthdays, thank your team, or send a taste of Indy to someone special.
        </p>
      </Card>
    </main>
  )
}
