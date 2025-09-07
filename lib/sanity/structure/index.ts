import type { StructureBuilder, StructureResolver } from "sanity/structure";
import { matchStructure } from "./match";
import { configStructure } from "./config";

const getItems = (S: StructureBuilder) => {
  return [
    matchStructure(S),
    S.divider().title("Configurations"),
    configStructure(S),
  ];
};
// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list().title("Content").items(getItems(S));
