import "server-only";
import { SanityConfigServer } from "../types/sanityConfig";
import { envVars } from "envVars";

export function getSanityConfigServer(): SanityConfigServer {
  return {
    dataset: envVars.sanityDataset,
    projectId: envVars.sanityProjectId,
    token: envVars.sanityApiToken,
  };
}
