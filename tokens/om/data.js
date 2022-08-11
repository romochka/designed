import { monkey } from "baobab";
import { ot } from "./index.js";


const isValue = node =>
   ot(node) === "object" &&
   node.hasOwnProperty("value") &&
   node.hasOwnProperty("type");

function add(node) {
   if (ot(node) === "array") return node.map(n => add(n));
   if (isValue(node)) {
      return { ...node, m: monkey(
         [".", "value"],
         value => ot(value)==="object" ? {...value, custom: "yes" } : value
      ) };
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

export function getData(cursor, fallback) {
   const data = cursor.get();

   return {
      data,
      fallback,
   };
}
