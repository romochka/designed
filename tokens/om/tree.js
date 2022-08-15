import { ot } from "./index.js";

import lodash from "lodash";
const { uniq } = lodash;

export const isValueContainer = node =>
   ot(node) === "object" &&
   node.hasOwnProperty("value") &&
   node.hasOwnProperty("type");

export const isValueContainers = node =>
   ot(node) === "array" &&
   node.every(child => isValueContainer(child) || child === null);

export const isEndpoint = node =>
   node && node.hasOwnProperty("value") && node.hasOwnProperty("type");

export const isEndpoints = node =>
   ot(node) === "array" &&
   node.every(child => isEndpoint(child) || child === null) &&
   node.some(child => child !== null);

export const hasEndpoints = node => {
   if (ot(node) !== "object") return;
   const keys = Object.keys(node).filter(key =>
      ot(node[key]) === "array"
         ? node[key].some(e => isEndpoint(e))
         : isEndpoint(node[key])
   );
   return keys.length > 0 ? keys : undefined;
};

export const endpointType = endpoint => {
   if (ot(endpoint) === "array") {
      const types = uniq(endpoint.map(e => e && e.type).filter(e => e));
      if (types.length > 1)
         console.warn("enpoint array contains different types", types);
      return types[0];
   }
   return endpoint.type;
};

export const hasType =
   (...types) =>
   endpoint =>
      ot(endpoint) === "array"
         ? endpoint.every(e => e === null || types.includes(e.type)) &&
           endpoint.some(e => e !== null)
         : types.includes(endpoint.type);

export const hasDefaultState = endpoint => endpoint.hasOwnProperty("default");
