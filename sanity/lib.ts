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

export function getSanityClient() {
  if (!projectId) {
    throw new Error("Sanity projectId is missing.")
  }

  return createClient(sanityConfig)
}
