import { notFound } from "next/navigation"

import { PageHeader } from "@/components/site/PageHeader"
import { Card } from "@/components/ui/Card"
import { downtownSpaces } from "@/lib/site-data"

export default function DowntownSpacePage({ params }: { params: { slug: string } }) {
  const space = downtownSpaces.find((item) => item.slug === params.slug)

  if (!space) {
    notFound()
  }

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Downtown Private Event"
        title={space.name}
        description={space.description}
      />

      <Card>
        <h2 className="text-xl font-semibold">Capacity + layout</h2>
        <p className="mt-2 text-sm text-black/60">
          {space.capacitySeated} seated · {space.capacityCocktail} cocktail
        </p>
        {space.size ? <p className="mt-2 text-sm text-black/60">Size: {space.size}</p> : null}
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Amenities</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-black/60">
          {space.amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Pricing</h2>
        <p className="mt-2 text-sm text-black/60">{space.rentalFee}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-black/60">
          {space.minimums.map((minimum) => (
            <li key={minimum}>{minimum}</li>
          ))}
        </ul>
      </Card>
    </main>
  )
}
