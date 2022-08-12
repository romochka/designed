import { mo, ot, so } from "./index.js";

export const isValueContainer = node =>
   ot(node) === "object" &&
   node.hasOwnProperty("value") &&
   node.hasOwnProperty("type");

export const isValueContainers = node =>
   ot(node) === "array" &&
   node.every(child => isValueContainer(child) || child === null);
