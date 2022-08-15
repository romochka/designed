import { ot } from "../om/index.js";
import { rx } from "../om/rx.js";
import { resolveEndpointRef, resolveRefsInExpressionString } from "./refs.js";
import lodash from "lodash";
import { isEndpoint } from "../om/tree.js";
import { resolveEndpoint } from "./data.mjs";
import { getEndpointCssValue } from "./convert.mjs";
const { get } = lodash;

const resolveObject = (node, root) => {
   console.log(`resolveObject:`, node);
   const res = Object.fromEntries(Object.entries(node)
   .map(([key, child]) => {
      console.log(`resolveObject: iterate: child:`, child);
      if (isEndpoint(child)) {
         // console.log(`resolveObject: endpoint found:`);
         // const res = resolveEndpoint(child, root);
         // console.log(`resolveObject: returned res:`, res);
         return [key, resolveEndpoint(child, root)]
      };
      if (ot(child) === "object") return [key, resolveObject(child, root)];
      return [key, child];
   }));
   return res;
};

export const resolve = (endpoint, root) => {
   const expression = endpoint.value;
   console.log("resolve: expression candidate:", expression);

   const ro = refObject(expression, root);

   if (ro) {
      if (isEndpointRef(expression, root)) {
         console.log(`resolve: expression is reference to endpoint`);
         return resolveEndpointRef(expression, root);
      }
      console.log(`resolve: expression is reference to object`, ro);
      return resolveObject(ro, root);
   }

   if (isExpression(expression, root)) {
      console.log(`resolve: expression is an expression`);
      const res = resolveRefsInExpressionString(expression, root);
      console.log(`resolve: return result:`, res);
      return res;
   }

   console.log(`resolve: return ${expression} untouched`);
   return getEndpointCssValue(endpoint);
};

const refObject = (ref, root) => {
   if (rx.refs.single.pass.test(ref)) {
      const path = ref.replace(/[\{\}]/g, "");
      // console.log(`expression path:`, path);
      const refValue = get(root, path);
      return ot(refValue) === "object" && refValue;
   }
   return false;
};

const isEndpointRef = (value, root) => {
   if (ot(value) === "string") {
      const ro = refObject(value, root);
      if (ro && isEndpoint(ro)) {
         return true;
      }
   }
   return false;
};

export const isExpression = (value, root) => {
   if (ot(value) === "number") return true;
   if (ot(value) === "string") {
      if (!isNaN(Number(value))) return true;
      return rx.expression.pass.test(value);
   }
};