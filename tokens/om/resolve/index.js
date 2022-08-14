import { ot } from "../index.js";
import { rx } from "../rx.js";
import { resolveRefsInExpressionString } from "./refs.js";
import lodash from "lodash";
const { get } = lodash;

export const resolve = (expression, root) => {
   console.log("expression candidate:", expression);

   if (!isExpression(expression, root)) {
      console.log(`${expression} is not an expression`);
      return expression;
   }

   const res = resolveRefsInExpressionString(expression, root);

   console.log(`resolve res:`, res);

   return res;
};

const isRefObject = (ref, root) => {
   if (rx.refs.single.pass.test(ref)) {
      const path = ref.replace(/[\{\}]/g, "");
      console.log(`expression path:`, path);
      const refValue = get(root, path);
      return ot(refValue) === "object";
   }
   return false;
};

export const isExpression = (value, root) => {
   if (ot(value) === "number") return true;

   if (ot(value) === "string") {

      if (isRefObject(value, root)) {
         // console.log(`reference is an object`);
         return false;
      }

      if (!isNaN(Number(value))) return true;

      return rx.expression.pass.test(value);
   }
};
