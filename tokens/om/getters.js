import util from "util";

import { mo, ot, so } from "./index.js";
import { isValueContainer, isValueContainers } from "./tree.js";

export const injectGetters = (node, path, root) => {
   const keys = Object.keys(node.raw);

   // console.log("keys:", keys);

   // console.log(`path: ${path}`.yellow);

   // console.log(`injecting in node:`, node);

   // console.log(`-----------------------`);

   keys.forEach(key => {
      if (isValueContainer(node.raw[key])) {
         Object.defineProperty(node, key, {
            get() {
               return this.raw[key].value;
            },
         });
      }
      if (isValueContainers(node.raw[key])) {
         Object.defineProperty(node, key, {
            get() {
               return this.raw[key].map(valueContainer =>
                  valueContainer === null ? null : valueContainer.value
               );
            },
         });
      }
   });

   /*    console.log(
      `with getters:`,
      util.inspect(node, { getters: true, showHidden: true })
   ); */
};

export const createGetters = node => {
   const gNode = mo({ source: node }, (node, path) => {
      if (
         ot(node) === "object" &&
         Object.values(node).some(n => {
            return isValueContainer(n) || isValueContainers(n);
         })
      ) {
         const [raw, rest] = so(
            node,
            ([key, value]) =>
               isValueContainer(value) || isValueContainers(value)
         );

         // const mutated = { raw: node };
         const mutated = { raw, ...rest };
         injectGetters(mutated);
         // console.log(mutated);
         return mutated;
      }

      if (
         ot(node) === "object" &&
         Object.values(node).some(child => child.hasOwnProperty("raw"))
      ) {
         const key = path ? path.split(".").slice(-1) : "_root";
         // console.log(`${path||"_root"}: ${key}'s child has raw`.green);
         const raws = Object.values(node).filter(child => child.hasOwnProperty("raw"));
         // console.log(`children with .raw:`.green, util.inspect(raws, { showHidden: true, getters: true }));

         raws.forEach(raw => {
            Object.entries(raw).forEach(([key, child]) => {
               if (child.hasOwnProperty("raw")) {
                  // console.log(`should rename ${key} to _${key} in`, raw);
                  Object.defineProperty(raw, `_${key}`,
                     Object.getOwnPropertyDescriptor(raw, key));
                  delete raw[key];
                  Object.defineProperty(raw, key, {
                     get() { return this[`_${key}`].raw }
                  });
               }
            });
         });
         
      }

      return node;
   });
   return gNode;
};
