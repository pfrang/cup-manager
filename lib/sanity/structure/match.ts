import { IoFootball } from "react-icons/io5";
import type { StructureBuilder } from "sanity/structure";
import DocumentsPane from "sanity-plugin-documents-pane";
import { schemaTypeObject } from "../schemaTypeObject";

const title = "Match";
const pageType = schemaTypeObject.MATCH;
export const matchStructure = (S: StructureBuilder) =>
  S.listItem()
    .title(title)
    .icon(IoFootball)
    .child(
      S.document()
        .schemaType(pageType)
        .documentId(pageType)
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
