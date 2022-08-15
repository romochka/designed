import { mo, oa, ot } from "../om/index.js";
import { isExpression, resolve } from "./index.js";
import { rx } from "../om/rx.js";

export function getFallback(node, missingKey, path, root) {
   console.log(`%cfallback`, "color:orange");
   return node;
}

export function getData(node, key, path, root) {
   return node;
}

export const resolveEndpoint = (endpoint, root) => oa(endpoint, endpoint => {

   if (!root) throw "no root provided";

   // console.log(`endpoint:`, endpoint);

   if (endpoint === null) return endpoint;

   if (!endpoint.value) throw endpoint.hasOwnProperty("value") ? "endpoint value is falsy" : "endpoint has no value";

   if (ot(endpoint.value) === "string") {
      return resolve(endpoint, root);
   }

   throw "endpoint value not a string";

   return endpoint.value;

});

export const getRefValue = endpoint => oa(endpoint, endpoint => endpoint && endpoint.value);

export const getCssValue = endpoint => endpoint.value;
