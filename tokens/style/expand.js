import { mo, ot } from "../om/index.js";

const isCompositeTokenWithTypography = node => {
   return ot(node)==="object" &&
   node.hasOwnProperty("typography") &&
   Object.entries(node).every(([key, value]) => (
      key === "typography" || ["string", "number"].includes(ot(value))
   ));
};

export const expandTypography = node => mo(node, node => {
   if (isCompositeTokenWithTypography(node)) {
      Object.entries(node.typography).forEach(([key, value]) => {
         node[key] = value;
      });
      delete node.typography;
      return node;
   }
   return node;
});
