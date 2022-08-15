import { ot } from "../index.js";
import { rx } from "../rx.js";
import { resolveEndpointRef, resolveRefsInExpressionString } from "./refs.js";
import lodash from "lodash";
import { isEndpoint } from "../tree.js";
import { resolveEndpoint } from "./data.mjs";
const { get } = lodash;

const resolveObject = (node, root) => {
   const res = Object.fromEntries(Object.entries(node).map(([key, child]) => {
      if (isEndpoint(child)) return [key, resolveEndpoint(child, root)];
      if (ot(child) === "object") return [key, resolveObject(child, root)];
      return [key, child];
   }));
   return res;
};

export const resolve = (expression, root) => {
   console.log("resolve: expression candidate:", expression);

   const ro = refObject(expression, root);

   if (ro) {
      if (isEndpointRef(expression, root)) {
         console.log(`resolve: expression is reference to endpoint`);
         return resolveEndpointRef(expression, root);
      }
      console.log(`resolve: expression is reference to object`);
      return resolveObject(ro, root);
   }

   if (isExpression(expression, root)) {
      console.log(`resolve: expression is an expression`);
      const res = resolveRefsInExpressionString(expression, root);   
      console.log(`resolve: return result:`, res);
      return res;
   }

   console.log(`resolve: return untouched`);
   return expression;
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
