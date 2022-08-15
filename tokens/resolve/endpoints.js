import { ot } from "../om/index.js";

export const isEndpoint = node =>
   node && node.hasOwnProperty("value") && node.hasOwnProperty("type");

export const hasEndpoints = node => {
   if (ot(node) !== "object") return;
   const keys = Object.keys(node).filter(key =>
      ot(node[key]) === "array"
         ? node[key].some(e => isEndpoint(e))
         : isEndpoint(node[key])
   );
   return keys.length > 0 ? keys : undefined;
};
