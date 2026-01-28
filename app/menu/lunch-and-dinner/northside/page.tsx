import { MenuRenderer } from "@/components/site/MenuRenderer"
import { fetchMenuBySlug } from "@/lib/sanity"

export default async function NorthsideMenuPage() {
  const menu = await fetchMenuBySlug("northside")

  if (!menu) {
    return null
  }

  return (
    <MenuRenderer
      menu={menu}
      eyebrow="Northside Menu"
      descriptionFallback="From wings to burgers and pizzas, this menu keeps the classics tight."
    />
  )
}
