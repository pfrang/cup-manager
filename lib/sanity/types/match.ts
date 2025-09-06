import { SanityDocument } from "next-sanity";
import { schemaTypeObject } from "../schemaTypeObject";

export interface Match extends SanityDocument {
  _type: typeof schemaTypeObject.MATCH;
  title: string;
  slug: { current: string };
}
