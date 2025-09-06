import { createClient } from "next-sanity";

import { sanityApiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: sanityApiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
