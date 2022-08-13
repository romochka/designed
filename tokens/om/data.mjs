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

   // console.log(`endpoint:`, endpoint);

   if (!endpoint) return endpoint;

   /* const res = mo(endpoint.value, node => {
      return (ot(node)==="string") ? resolveRefs(node, root) : node;
   }); */

   if (ot(endpoint.value) === "string") return resolve(endpoint.value, root);

   if (ot(endpoint.value) === "object") {
      /* 
      console.log(`endpoint value:`, endpoint.value);
      const mapped = mo(endpoint.value, node => {
         if (isExpression(node, root)) {
            console.log(`expression: ${node}`);
            const res = resolve(node, root);
            console.log(`resolved:`, res);
         }
         return node;
      }); */
   }

   return endpoint.value;

   // return mo(endpoint.value, node => isExpression(node) ? resolve(node, root) : node);

});

export const getRefValue = endpoint => oa(endpoint, endpoint => endpoint && endpoint.value);

export const getCssValue = endpoint => endpoint.value;
