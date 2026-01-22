import { defineConfig } from "sanity"
import { visionTool } from "@sanity/vision"
import { structureTool } from "sanity/structure"

import { apiVersion, dataset, projectId } from "./sanity/lib"
import { schemaTypes } from "./sanity/schemas"

export default defineConfig({
  name: "district-tap",
  title: "District Tap",
  projectId,
  dataset,
  basePath: "/studio",
  apiVersion,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
  },
})
