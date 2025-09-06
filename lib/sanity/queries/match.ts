import groq from "groq";
import "server-only";
import { Match } from "../types/match";
import { schemaTypeObject } from "../schemaTypeObject";
import { client } from "../lib/client";

const query = groq`*[_type == $schemaType] {
		_id,
		_type,
		_rev,
		_createdAt,
		_updatedAt,
		title,
    "slug": slug.current
	}`;

export async function getAllMatches(): Promise<Match[]> {
  // Get the data from Sanity
  const matches = await client.fetch<Match[]>(query, {
    schemaType: schemaTypeObject.MATCH,
  });

  return matches;
}
