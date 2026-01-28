import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const pdfUrl = "/menus/downtown-lunch-dinner.pdf"

export default function DowntownMenuPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Downtown Menu"
        title="Downtown Lunch + Dinner"
        description="Download the latest downtown menu PDF."
      />

      <Card className="space-y-4">
        <p className="text-sm text-white/70">
          Grab the newest Downtown Lunch + Dinner menu as a PDF.
        </p>
        <Button href={pdfUrl} variant="secondary" size="sm">
          Download PDF
        </Button>
      </Card>
    </main>
  )
}
