import { FaPeopleGroup } from "react-icons/fa6";
import type { StructureBuilder } from "sanity/structure";
import DocumentsPane from "sanity-plugin-documents-pane";
import { schemaTypeObject } from "../schemaTypeObject";

const title = "Age group";
const schemaType = schemaTypeObject.AGE_GROUP;
export const ageGroupStructure = (S: StructureBuilder) =>
  S.listItem()
    .title(title)
    .icon(FaPeopleGroup)
    .child(
      S.document()
        .schemaType(schemaType)
        .documentId(schemaType)
        .views([
          S.view.form(),
          S.view
            .component(DocumentsPane)
            .options({
              query: `*[references($id)]`,
              params: { id: `_id` },
              options: { perspective: "drafts" },
            })
            .title("References to this page"),
        ])
    );
