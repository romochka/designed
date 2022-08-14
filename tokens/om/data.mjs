import { mo, oa, ot } from "./index.js";
import { isExpression, resolve } from "./resolve/index.js";
import { rx } from "./rx.js";

export function getFallback(node, missingKey, path, root) {
   console.log(`%cfallback`, "color:orange");
   return node;
}

export function getData(node, key, path, root) {
   return node;
}

export const getResolvedValue = (endpoint, root) => oa(endpoint, endpoint => {

   

   if (!root) throw new Error();

   console.log(`endpoint:`, endpoint);

   if (!endpoint) return endpoint;

   if (ot(endpoint.value) === "string") {
      return resolve(endpoint.value, root);
   }

   if (!endpoint.value) {
      console.log(`no value in endpoint:`, endpoint);
   }

   return endpoint.value;

   // return mo(endpoint.value, node => isExpression(node) ? resolve(node, root) : node);

});

export const getRefValue = endpoint => oa(endpoint, endpoint => endpoint && endpoint.value);

export const getCssValue = endpoint => endpoint.value;
