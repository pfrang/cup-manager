export const envVars = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
  orgId: process.env.ORGANIZATION ?? "default",
  sanityProjectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "development",
  sanityDataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  sanityApiToken: process.env.SANITY_API_TOKEN ?? "",
} as const;
