import { ot } from "../om/index.js";
import { resolveRef } from "./ref.js";
import { splitByRefs, rx } from "./rx.js";
import reduceCSSCalc from "reduce-css-calc";
import { getBreakpointName, isBreakpointRef } from "../om/breakpoints.js";

export const resolveExpression = (endpoint, root) => {

   const expression = endpoint.value;

   // console.log(expression);

   const bp = isBreakpointRef(expression) ? getBreakpointName(expression) + ":" : "";

   const arr = splitByRefs(expression).map(part => {
      if (!rx.ref.hasOnlySingle.test(part)) return part;
      const res = resolveRef(part, root);
      if (ot(res) !== "string" && ot(res) !== "number") {
         console.warn(`ref ${part} in expression is not a string nor a number`);
         return "";
      }
      return res;
   });

   const value = bp + reduceCSSCalc(`calc(${arr.join("")})`);

   // console.log(value);

   return {...endpoint, value };
};
