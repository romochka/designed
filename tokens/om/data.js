import { monkey } from "baobab";
import { ot } from "./index.js";
import { isValueContainer } from "./tree.js";


function add(node) {
   if (ot(node) === "array") return node.map(n => add(n));
   if (isValueContainer(node)) {
      const updated = {
         raw: node,
         get() { return this.raw.value },
         fn: (some) => { console.log(some) },
         toJSON() { return {
            ...this, get: this.get.toString(), fn: this.fn.toString()
         } },
      }
      return node;
   }
   if (ot(node) === "object")
      return Object.fromEntries(
         Object.entries(node).map(([key, value]) => [key, add(value)])
      );
   return node;
}

export function monkeys(tree) {
   tree.set(add(tree.get()));
}

export function getTreeData(cursor, fallback) {
   const data = cursor.get();

   return {
      data,
      fallback,
   };
}

export function getData(data, fallback) {

   return {
      data,
      fallback,
   };
}
