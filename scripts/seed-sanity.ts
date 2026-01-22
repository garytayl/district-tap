import { createClient } from "next-sanity"

import {
  allergenNotice,
  brunchMenu,
  downtownMenu,
  eventMenu,
  events as fallbackEvents,
  locations,
  northsideMenu,
} from "@/lib/site-data"
import { apiVersion, dataset, projectId } from "@/sanity/lib"

type SeedLocation = {
  _id: string
  _type: "location"
  name: string
  slug: { _type: "slug"; current: string }
  addressLines: string[]
  phone: string
  email: string
  hours: string[]
  orderUrl: string
  mapUrl: string
}

const token = process.env.SANITY_API_TOKEN

if (!projectId || !dataset || !token) {
  throw new Error(
    "Missing SANITY_API_TOKEN or Sanity project config. Set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_TOKEN.",
  )
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

const seedLocations: SeedLocation[] = Object.values(locations).map((location) => ({
  _id: `location-${location.id}`,
  _type: "location",
  name: location.name,
  slug: { _type: "slug", current: location.id },
  addressLines: location.addressLines,
  phone: location.phone,
  email: location.email,
  hours: location.hours,
  orderUrl: location.orderUrl,
  mapUrl: location.mapUrl,
}))

const seedMenus = [
  {
    _id: "menu-downtown",
    _type: "menu",
    title: "Downtown Menu",
    slug: { _type: "slug", current: "downtown" },
    menuType: "Lunch + Dinner",
    location: { _type: "reference", _ref: "location-downtown" },
    categories: downtownMenu,
    allergenNotice,
    status: "Published",
  },
  {
    _id: "menu-northside",
    _type: "menu",
    title: "Northside Menu",
    slug: { _type: "slug", current: "northside" },
    menuType: "Lunch + Dinner",
    location: { _type: "reference", _ref: "location-northside" },
    categories: northsideMenu,
    allergenNotice,
    status: "Published",
  },
  {
    _id: "menu-event",
    _type: "menu",
    title: "Downtown Event Menu",
    slug: { _type: "slug", current: "event" },
    menuType: "Event",
    location: { _type: "reference", _ref: "location-downtown" },
    categories: eventMenu,
    allergenNotice,
    status: "Published",
  },
  {
    _id: "menu-brunch",
    _type: "menu",
    title: "Northside Brunch",
    slug: { _type: "slug", current: "brunch" },
    menuType: "Brunch",
    location: { _type: "reference", _ref: "location-northside" },
    categories: brunchMenu,
    allergenNotice,
    status: "Published",
  },
]

const seedEvents = fallbackEvents.map((event) => ({
  _id: `event-${event.slug}`,
  _type: "event",
  title: event.title,
  slug: { _type: "slug", current: event.slug },
  dateLabel: event.dateLabel,
  timeLabel: event.timeLabel,
  description: event.description,
  lineup: event.lineup,
  specials: event.specials,
  tags: event.tags,
  locationLabel: event.locationId === "both" ? "Both locations" : event.locationId,
  status: "Published",
}))

async function seed() {
  console.log("Seeding locations...")
  for (const doc of seedLocations) {
    await client.createOrReplace(doc)
  }

  console.log("Seeding menus...")
  for (const doc of seedMenus) {
    await client.createOrReplace(doc)
  }

  console.log("Seeding events...")
  for (const doc of seedEvents) {
    await client.createOrReplace(doc)
  }

  console.log("Done.")
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
