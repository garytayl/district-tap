import { PageHeader } from "@/components/site/PageHeader"
import { MenuSections } from "@/components/site/MenuSections"
import type { SanityMenu } from "@/lib/sanity"

type MenuRendererProps = {
  menu: SanityMenu
  eyebrow?: string
  descriptionFallback?: string
}

export function MenuRenderer({ menu, eyebrow, descriptionFallback }: MenuRendererProps) {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow={eyebrow ?? menu.menuType}
        title={menu.title}
        description={menu.subtitle ?? descriptionFallback}
      />

      <MenuSections menu={menu} />
    </main>
  )
}
