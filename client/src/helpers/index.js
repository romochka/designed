import { useEffect, useRef } from "react";

export const ot = obj =>
   /^\[object (\w+)]$/
      .exec(Object.prototype.toString.call(obj))[1]
      .toLowerCase();

export function cl() {
   const classList = Array.prototype.slice
      .call(arguments)
      .filter(c => c)
      .map(c => {
         if (ot(c) === "object") {
            return (
               Object.keys(c)
                  // .map((key) => (c[key] === true ? key : false))
                  .map(key => (!!c[key] ? key : false))
                  .filter(c => c)
            );
         }
         return c;
      })
      .flat(Infinity);

   // console.log(classList);

   return classList.length > 0 ? classList.filter(c => c).join(" ") : null;
}

export const usePrevious = value => {
   const ref = useRef();
   useEffect(() => {
      ref.current = value;
   }, [value]);
   return ref.current;
};

const merge2 = (obj1, obj2) => {
   const merged = Object.defineProperties(
      obj1,
      Object.getOwnPropertyDescriptors(obj2)
   );
   return merged;
};

export const isGetter = (node, key) => {
   const descriptor = Object.getOwnPropertyDescriptor(node, key);
   return descriptor.get;
};

export const mo = (node, updater, path, root) => {
   // throw new Error();
   const realroot = root || node;
   if (!realroot) throw new Error();

   if (ot(node) === "array") {
      const arr = node.map(item => mo(item, updater, path, root || node));
      return updater(arr, path, root || node);
   }

   if (ot(node) === "object") {
      const updated = Reflect.ownKeys(node).reduce((acc, key) => {
         // console.log(`checking key ${key}`);
         if (isGetter(node, key)) {
            // console.log(`${key} is a getter`);
            Object.defineProperty(
               acc,
               key,
               Object.getOwnPropertyDescriptor(node, key)
            );
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
