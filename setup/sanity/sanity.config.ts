import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "wearelion-dev",
  title: "We Are Lion Dev Studio Blog",
  subtitle: "We Are Lion Dev Sanity Studio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
