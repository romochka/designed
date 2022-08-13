import { proxify } from "./proxies.js";
import { getData, getFallback } from "./data.js";

export const ot = obj =>
   /^\[object (\w+)]$/
      .exec(Object.prototype.toString.call(obj))[1]
      .toLowerCase();

export const isInteger = obj => !isNaN(parseInt(obj)) && /^\d+$/.test(obj);

const mergeTopLevels = node =>
   Object.values(node).reduce((acc, value) => ({ ...acc, ...value }), {});

const convertToArrays = node => {
   if (ot(node) === "array") {
      console.log("array received:", node);
      return node.map(n => convertToArrays(n));
   }
   if (ot(node) === "object") {
      // console.log("object received:", JSON.stringify(node, null, 1));
      if (Object.keys(node).every(key => /^\d+$/.test(key))) {
         return Object.entries(node).reduce((arr, [key, value]) => {
            arr[parseInt(key)] = convertToArrays(value);
            return arr;
         }, []);
      }
      const res = Object.fromEntries(
         Object.entries(node).map(([key, value]) => {
            return [key, convertToArrays(value)];
         })
      );
      // console.log(res);
      return res;
   }
   if (node === undefined) throw new Error("err");
   return node;
};

export const om = node => (convertToArrays(mergeTopLevels(node)));

export const mo = (node, updater, path, root) => {
   if (ot(node) === "array") {
      const arr = node.map((item) => mo(item, updater, path, root || node));
      return updater(arr, path, root);
   }

   if (ot(node) === "object") {
      const updated = Object.keys(node).reduce((acc, key) => {
         const mutated = mo(
            node[key],
            updater,
            `${path ? path + "." : ""}${key}`,
            root || node
         );
         const value = acc.hasOwnProperty(key)
            ? ot(mutated) === "object" && ot(acc[key]) === "object"
               ? { ...acc[key], ...mutated }
               : ot(acc[key]) === "array"
               ? [...acc[key], mutated]
               : mutated
            : mutated;
         return { ...acc, [key]: value };
      }, {});
      try {
         return updater(updated, path, root);
      } catch (err) {
         console.error(err);
         return updated;
      }
   }
   try {
      return updater(node, path, root);
   } catch (err) {
      console.error(err);
      return node;
   }
};


export const oa = (node, mutate) => {
   if (ot(node) === "array") return node.map(n => mutate(n));
   if (ot(node) === "object")
      return Object.fromEntries(
         Object.entries(node).map(([key, value]) => [key, mutate(value)])
      );
   return node;
};

export const so = (node, cond) => {
   return Object.entries(node).reduce(
      (arr, [key, value]) =>
         cond([[key], value])
            ? [{ ...arr[0], [key]: value }, arr[1]]
            : [arr[0], { ...arr[1], [key]: value }],
      [{}, {}]
   );
};
