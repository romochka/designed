import { mo, ot } from "./index.js";

export const proxify = (node, getData, getFallback) => mo(node, (node, path, root) => {
   if (ot(node) !== "object" && ot(node) !== "array") return node;
   const handler = {
      get(target, key, receiver) {
         // console.log(`----------------`);
         // console.log(`target:`, target);
         // console.log(`key: ${key}:${ot(key)}`);
         // console.log(`path:`, path);

         // console.log(`key > 0?`, key > 0);

         if (ot(target) === "array") {
            // console.log(`target is array`);
            const index = Number(key);
            if (isNaN(index) || target[index]===null || target[index]===undefined) {
               return getFallback(target, index, path, root);
            }
            return getData(Reflect.get(target, index, receiver), index, path, root);            
         }

         const data = target.hasOwnProperty(key)
         ? getData(Reflect.get(...arguments), key, path, root)
         : getFallback(target, key, path, root);

         return data;

      }
   }
   const proxy = new Proxy(node, handler);
   return proxy;
});
