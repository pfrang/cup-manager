"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import pkg from "./package.json";

const { version } = pkg;

const projectId = envVars.sanityProjectId;
const dataset = envVars.sanityDataset;
const title = `Generic ${dataset === "development" ? "Dev" : "Prod"} [v${version}]`;

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { structure } from "./lib/sanity/structure";
import { envVars } from "./envVars";
import { sanityApiVersion } from "./lib/sanity/env";
import { schemaTypes } from "./lib/sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: sanityApiVersion }),
  ],
});
