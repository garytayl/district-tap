import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const pdfUrl = "/menus/northside-brunch.pdf"

export default function BrunchMenuPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Northside Brunch"
        title="Northside Brunch"
        description="Download the latest Northside brunch menu PDF."
      />

      <Card className="space-y-4">
        <p className="text-sm text-white/70">
          Brunch runs at the Northside location. Grab the most current PDF menu.
        </p>
        <Button href={pdfUrl} variant="secondary" size="sm">
          Download PDF
        </Button>
      </Card>
    </main>
  )
}
