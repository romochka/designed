import lodash from "lodash";
const { merge, has, set, get, cloneDeep } = lodash;
// import { inspect } from "util";

export const ot = obj =>
   /^\[object (\w+)]$/
      .exec(Object.prototype.toString.call(obj))[1]
      .toLowerCase();

export const pt = obj => ["null", "undefined", "boolean", "number", "string"].includes(ot(obj));

export const pipe = (...fns) => arg => fns.reduce((res, fn) => fn(res), arg);

export const isGetter = (node, key) => {
   const descriptor = Object.getOwnPropertyDescriptor(node, key);
   return descriptor.get;
};

export const mergeTopLevels = node =>
   Object.values(node).reduce((acc, value) => (merge(acc, value)), {});

export const mergeKeys = (node, keys) => {
   return keys.reduce((node, key, index, keys) => {
      if (index===0) return node;
      if (!has(node, key)) {
         set(node, key, get(node, keys[index-1]));
         return node;
      }
      const merged = merge(
         cloneDeep(get(node, keys[index-1])),
         get(node, key),
      );
      // console.log(`merge ${key}, ${keys[index-1]} :`, inspect(merged, { depth: 20 }));
      set(node, key, merged);
      return node;
   }, node);
}

export const convertToArrays = node => {
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
   if (node === undefined) throw "error";
   return node;
};

const merge2 = (obj1, obj2) => {
   const merged = Object.defineProperties(obj1, Object.getOwnPropertyDescriptors(obj2));
   return merged;
}

export const mo = (node, updater, path, root) => {

   // throw new Error();
   const realroot = root || node;
   if (!realroot) throw new Error();

   if (ot(node) === "array") {
      const arr = node.map((item) => mo(item, updater, path, root || node));
      return updater(arr, path, root || node);
   }

   if (ot(node) === "object") {
      const updated = Reflect.ownKeys(node).reduce((acc, key) => {
         // console.log(`checking key ${key}`);
         if (isGetter(node, key)) {
            // console.log(`${key} is a getter`);
            Object.defineProperty(acc, key, Object.getOwnPropertyDescriptor(node, key));
            return acc;
         }
         const mutated = mo(
            node[key],
            updater,
            `${path ? path + "." : ""}${key}`,
            root || node
         );
         const res = merge2(acc, { [key]: mutated });
         return res;
      }, {});
      try {
         return updater(updated, path, root || node);
      } catch (err) {
         console.error(err);
         return updated;
      }
   }
   try {
      return updater(node, path, root || node);
   } catch (err) {
      console.error(err);
      return node;
   }
};

export const findPrev = (arr, index, cond) => {
   if (index === 0) return undefined;
   for (let i=index-1; i>=0; i--) {
      if (cond(arr[i])) return arr[i];
   }
   return undefined;
};

export const findNext = (arr, index, cond) => {
   if (index === arr.length-1) return undefined;
   for (let i=index; i<arr.length; i++) {
      if (cond(arr[i])) return arr[i];
   }
   return undefined;
}


export const oa = (node, mutate) => {
   if (ot(node) === "array") return node.map(n => mutate(n));
   return mutate(node);
};

export const ad = (node, mutate) => {
   if (ot(node) === "array") return node.map(n => mutate(n));
   if (ot(node) === "object")
      return Object.fromEntries(
         Object.entries(node).map(([key, value]) => [key, mutate(value)])
      );
   return mutate(node);
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

export const save$original = node => ({
   ...node,
   $: cloneDeep(node)
});
