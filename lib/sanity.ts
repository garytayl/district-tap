import { groq } from "next-sanity"

import {
  allergenNotice,
  brunchMenu,
  downtownMenu,
  eventMenu,
  events as fallbackEvents,
  northsideMenu,
} from "@/lib/site-data"
import { sanityClient } from "@/sanity/lib"

export type SanityMenuItem = {
  name: string
  price?: string
  details?: string
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

const hasSanityConfig = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)

const menuQuery = groq`*[_type == "menu" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  menuType,
  subtitle,
  categories[]{
    title,
    description,
    items[]{name, price, details}
  },
  allergenNotice
}`

const menusQuery = groq`*[_type == "menu"] | order(menuType asc, title asc){
  _id,
  title,
  "slug": slug.current,
  menuType,
  subtitle,
  categories[]{
    title,
    description,
    items[]{name, price, details}
  },
  allergenNotice
}`

const eventsQuery = groq`*[_type == "event" && status == "Published"] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  dateLabel,
  timeLabel,
  description,
  lineup,
  specials,
  tags,
  locationLabel
}`

const eventQuery = groq`*[_type == "event" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  dateLabel,
  timeLabel,
  description,
  lineup,
  specials,
  tags,
  locationLabel
}`

const fallbackMenus: Record<string, SanityMenu> = {
  downtown: {
    _id: "fallback-downtown",
    title: "Downtown Menu",
    slug: "downtown",
    menuType: "Lunch + Dinner",
    categories: downtownMenu,
    allergenNotice,
  },
  northside: {
    _id: "fallback-northside",
    title: "Northside Menu",
    slug: "northside",
    menuType: "Lunch + Dinner",
    categories: northsideMenu,
    allergenNotice,
  },
  event: {
    _id: "fallback-event",
    title: "Downtown Event Menu",
    slug: "event",
    menuType: "Event",
    categories: eventMenu,
    allergenNotice,
  },
  brunch: {
    _id: "fallback-brunch",
    title: "Northside Brunch",
    slug: "brunch",
    menuType: "Brunch",
    categories: brunchMenu,
    allergenNotice,
  },
}

export async function fetchMenus(): Promise<SanityMenu[]> {
  if (!hasSanityConfig) {
    return Object.values(fallbackMenus)
  }

  return sanityClient.fetch(menusQuery)
}

export async function fetchMenuBySlug(slug: string): Promise<SanityMenu | null> {
  if (!hasSanityConfig) {
    return fallbackMenus[slug] ?? null
  }

  return sanityClient.fetch(menuQuery, { slug })
}

export async function fetchEvents(): Promise<SanityEvent[]> {
  if (!hasSanityConfig) {
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

  return sanityClient.fetch(eventsQuery)
}

export async function fetchEventBySlug(slug: string): Promise<SanityEvent | null> {
  if (!hasSanityConfig) {
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

  return sanityClient.fetch(eventQuery, { slug })
}
