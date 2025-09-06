import { IoFootball } from "react-icons/io5";
import type { StructureBuilder } from "sanity/structure";
import DocumentsPane from "sanity-plugin-documents-pane";
import { schemaTypeObject } from "../schemaTypeObject";
import { sanityApiVersion } from "../env";

const title = "Match";
const schemaType = schemaTypeObject.MATCH;
export const matchStructure = (S: StructureBuilder) =>
  S.listItem()
    .title(title)
    .icon(IoFootball)
    .child(
      S.documentList()
        .title(title)
        .menuItems(S.documentTypeList(schemaType).getMenuItems()!)
        .apiVersion(sanityApiVersion)
        .filter(`_type == "${schemaType}"`)
        .child((documentId) =>
          S.document()
            .documentId(documentId)
            .schemaType(schemaType)
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
        )
    );
