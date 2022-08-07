import { once, showUI } from "@create-figma-plugin/utilities";

import {
   CloseHandler,
   CreateRectanglesHandler,
   ExportNodesHandler,
} from "./types";

import { getData } from "./data";
import { countNodes } from "./export";

export default async function () {
   const data = await getData();

   console.log(data);

   once<CreateRectanglesHandler>("CREATE_RECTANGLES", function (count: number) {
      const nodes: Array<SceneNode> = [];
      for (let i = 0; i < count; i++) {
         const rect = figma.createRectangle();
         rect.x = i * 150;
         rect.fills = [
            {
               type: "SOLID",
               color: { r: 1, g: 0.5, b: 0 },
            },
         ];
         figma.currentPage.appendChild(rect);
         nodes.push(rect);
      }
      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
      figma.closePlugin();
   });

   once<CloseHandler>("CLOSE", function () {
      figma.closePlugin();
   });

   once<ExportNodesHandler>("EXPORT_NODES", () => {
      const obj = countNodes(figma.currentPage.children);
      console.log(`nodes on current page`, obj);

      figma.ui.postMessage({ type: "post", data: obj });

   });

   showUI({
      width: 240,
      height: 137,
   });
}
