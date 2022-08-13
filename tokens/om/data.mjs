import { mo, oa, ot } from "./index.js";
import { resolveRefs } from "./resolve.js";

export function getFallback(node, missingKey, path, root) {
   console.log(`%cfallback`, "color:orange");
   return node;
}

export function getData(node, key, path, root) {
   return node;
}

export const getResolvedValue = (endpoint, root) => oa(endpoint, endpoint => {
   if (!endpoint) return endpoint;

   const res = mo(endpoint.value, node => {
      return (ot(node)==="string") ? resolveRefs(node, root) : node;
   });

   return endpoint.value;
});

export const getRefValue = endpoint => oa(endpoint, endpoint => endpoint && endpoint.value);

export const getCssValue = endpoint => endpoint.value;
