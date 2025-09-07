import { FaCog } from "react-icons/fa";
import type { StructureBuilder } from "sanity/structure";
import { ageGroupStructure } from "./ageGroup";

const title = "Global Configurations";
export const configStructure = (S: StructureBuilder) =>
  S.listItem()
    .title(title)
    .icon(FaCog)
    .child(
      S.list()
        .title(title)
        .items([ageGroupStructure(S)])
    );
