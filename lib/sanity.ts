import { events as fallbackEvents } from "@/lib/site-data"
import { getSupabaseServerClient } from "@/lib/supabase"

export type SanityMenuItem = {
  name: string
  price?: string
  details?: string
  tags?: string[]
  notes?: string
}

export type SanityMenuCategory = {
  title: string
  description?: string
  items: SanityMenuItem[]
}

export type SanityMenu = {
  _id: string
  title: string
  slug: string
  menuType: string
  subtitle?: string
  categories: SanityMenuCategory[]
  allergenNotice?: string
}

export type SanityEvent = {
  _id: string
  title: string
  slug: string
  dateLabel?: string
  timeLabel?: string
  description?: string
  lineup?: string[]
  specials?: string[]
  tags?: string[]
  locationLabel?: string
}

export async function fetchMenus(): Promise<SanityMenu[]> {
  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from("menus")
    .select("id, title, slug, menu_type, subtitle, categories, allergen_notice")
    .eq("is_published", true)
    .order("menu_type", { ascending: true })
    .order("title", { ascending: true })

  if (error) {
    throw new Error(`Failed to load menus: ${error.message}`)
  }

  return (data ?? []).map((menu) => ({
    _id: menu.id as string,
    title: menu.title as string,
    slug: menu.slug as string,
    menuType: menu.menu_type as string,
    subtitle: menu.subtitle ?? undefined,
    categories: (menu.categories as SanityMenuCategory[]) ?? [],
    allergenNotice: menu.allergen_notice ?? undefined,
  }))
}

export async function fetchMenuBySlug(slug: string): Promise<SanityMenu | null> {
  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from("menus")
    .select("id, title, slug, menu_type, subtitle, categories, allergen_notice")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle()

  if (error) {
    throw new Error(`Failed to load menu: ${error.message}`)
  }

  if (!data) {
    return null
  }

  return {
    _id: data.id as string,
    title: data.title as string,
    slug: data.slug as string,
    menuType: data.menu_type as string,
    subtitle: data.subtitle ?? undefined,
    categories: (data.categories as SanityMenuCategory[]) ?? [],
    allergenNotice: data.allergen_notice ?? undefined,
  }
}

export async function fetchEvents(): Promise<SanityEvent[]> {
  return fallbackEvents.map((event) => ({
    _id: event.slug,
    title: event.title,
    slug: event.slug,
    dateLabel: event.dateLabel,
    timeLabel: event.timeLabel,
    description: event.description,
    lineup: event.lineup,
    specials: event.specials,
    tags: event.tags,
    locationLabel: event.locationId === "both" ? "Both locations" : event.locationId,
  }))
}

export async function fetchEventBySlug(slug: string): Promise<SanityEvent | null> {
  const event = fallbackEvents.find((item) => item.slug === slug)
  return event
    ? {
        _id: event.slug,
        title: event.title,
        slug: event.slug,
        dateLabel: event.dateLabel,
        timeLabel: event.timeLabel,
        description: event.description,
        lineup: event.lineup,
        specials: event.specials,
        tags: event.tags,
        locationLabel: event.locationId === "both" ? "Both locations" : event.locationId,
      }
    : null
}
