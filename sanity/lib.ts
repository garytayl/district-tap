import { createClient } from "next-sanity"

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ""
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
export const apiVersion = "2024-10-01"

export const sanityConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
}

export const sanityClient = createClient(sanityConfig)
