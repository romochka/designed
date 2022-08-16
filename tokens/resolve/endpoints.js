import { ot } from "../om/index.js";
import { rx } from "./rx.js";

export const isEndpoint = node =>
   node && node.hasOwnProperty("value") && node.hasOwnProperty("type");

export const hasEndpoints = node => {
   if (ot(node) !== "object") return;
   const keys = Object.keys(node).filter(key =>
      ot(node[key]) === "array"
         ? node[key].some(e => isEndpoint(e))
         : isEndpoint(node[key])
   );
   return keys.length > 0 ? keys : undefined;
};

export const hasRefs = endpoint => rx.ref.has.test(endpoint.value);

export const isCalc = endpoint => rx.calc.has.test(endpoint.value);

export const isSingleRef = endpoint => rx.ref.hasOnlySingle.test(endpoint.value.trim());

