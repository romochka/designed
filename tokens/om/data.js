import { monkey } from "baobab";
import { ot } from "./index.js";
import { isValueContainer } from "./tree.js";

export function getFallback(node, missingKey, path, root) {
   console.log(`fallback`.yellow);
   return node;
}

export function getData(node, key, path, root) {
   return node;
}
