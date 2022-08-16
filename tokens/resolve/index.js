import { mo } from "../om/index.js";
import { hasRefs, isCalc, isEndpoint, isSingleRef } from "./endpoints.js";
import { resolveRef } from "./ref.js";
import { getEndpointCss } from "./convert.mjs";
import { resolveExpression } from "./expression.js";

export const resolve = (endpoint, root) => {

   if (!isEndpoint(endpoint)) throw "not an endpoint";

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
         const value = resolveRef(endpoint.value, root);
         return getEndpointCss({...endpoint, value }).value;
      }
      case "calc with refs": {
         console.log(`resolve`, endpoint.type, ":", endpoint.value);
         const resolvedEndpoint = resolveExpression(endpoint, root);
         const result = getEndpointCss(resolvedEndpoint).value;
         console.log(result);
         return result;
      }
      case "just a value": {
         return getEndpointCss(endpoint).value;
      }
      default: {
         return endpoint.value;
      }
   }
}

export const resolveAll = node => mo(node, child => isEndpoint(child) ? resolve(child, node) : child);
