import type { StructureResolver } from "sanity/structure";
import { matchStructure } from "./match";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([matchStructure(S)]);
