import { mo } from "../om/index.js";
import { hasRefs, isCalc, isEndpoint, isSingleRef } from "./endpoints.js";
import { resolveRef } from "./ref.js";

export const resolve = (endpoint, root) => {

   if (!isEndpoint(endpoint)) throw "not an endpoint";

   console.log(`resolve`, endpoint.type, ":", endpoint.value);

   const kind =
      isSingleRef(endpoint)
      ? "one reference to one node"
      : isCalc(endpoint)
         ? hasRefs(endpoint)
            ? "calc with refs"
            : "calc without refs"
         : hasRefs(endpoint)
            ? "few refs without calc, which is weird, but ok"
            : "just a value";

   // console.log(endpoint.value, ":", kind);

   switch(kind) {
      case "one reference to one node": {
         return resolveRef(endpoint.value, root)
      }
      case "just a value": {
         return endpoint.value;
      }
      default: {
         return endpoint.value;
      }
   }
}

export const resolveAll = node => mo(node, child => isEndpoint(child) ? resolve(child, node) : child);
