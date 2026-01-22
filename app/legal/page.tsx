import { PageHeader } from "@/components/site/PageHeader"
import { Card } from "@/components/ui/Card"

export default function LegalPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Legal"
        title="Legal and disclaimers"
        description="For legal inquiries, contact our team directly."
      />

      <Card>
        <p className="text-sm text-black/60">
          This page is provided for general legal and policy information. Please email us if you need additional
          documentation.
        </p>
      </Card>
    </main>
  )
}
