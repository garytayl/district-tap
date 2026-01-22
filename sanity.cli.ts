import { defineCliConfig } from "sanity/cli"

import { dataset, projectId } from "./sanity/lib"

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
