import { ot } from "../index.js";
import { rx } from "../rx.js";
import { resolveRefsInExpressionString } from "./refs.js";
import lodash from "lodash";
const { get } = lodash;

export const resolve = (expression, root) => {

   console.log("expression:", expression);

   const res = resolveRefsInExpressionString(expression, root);

   console.log(res);

   return res;

};

export const isExpression = (value, root) => {
   if (ot(value) === "number") return true;

   if (ot(value) === "string") {

      if (rx.refs.single.pass.test(value) &&
         ot(get(root, value.replace(/[\{\}]/g, ""))) === "object") return false;

      if (!isNaN(Number(value))) return true;

      return rx.expression.pass.test(value);

   }

};
