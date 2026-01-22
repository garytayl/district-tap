import { defineCliConfig } from "sanity/cli"

import { dataset, projectId } from "./sanity/lib"

export default defineCliConfig({ projectId, dataset })
