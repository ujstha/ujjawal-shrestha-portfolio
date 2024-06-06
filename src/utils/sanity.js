import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  apiVersion: "2024-06-05",
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlFor = (src) => {
  return builder.image(src)
}
