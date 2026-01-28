import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const pdfUrl = "/menus/downtown-event-menu.pdf"

export default function EventMenuPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Downtown Event Menu"
        title="Downtown Event Menu"
        description="Download the latest event menu PDF."
      />

      <Card className="space-y-4">
        <p className="text-sm text-white/70">
          Planning a private event? Use the current PDF menu for tray and package details.
        </p>
        <Button href={pdfUrl} variant="secondary" size="sm">
          Download PDF
        </Button>
      </Card>
    </main>
  )
}
