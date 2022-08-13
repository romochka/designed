
import lodash from "lodash";
const { camelCase } = lodash;

import { getCssValue, getRefValue, getResolvedValue } from "./data.mjs";
import { isGetter, mo } from "./index.js";
import { hasEndpoints, hasType } from "./tree.js";

const getterDescriptors = [
   {
      key: "..", // modifies node endpoint key
      fn: getResolvedValue,
      on: true,
   },
   {
      key: "ref",
      fn: getRefValue,
      on: true,
   },
   /* {
      key: "css",
      on: hasType("composition"),
      fn: getCssValue,
   }, */
];

const getGetterDescriptors = endpoint =>
   getterDescriptors.filter(gd => {
      if (gd.on === true) return true;
      if (gd.off === true) return false; // hmmmm...
      if (gd.off && gd.off(endpoint)) return false;
      if (gd.off && !gd.off(endpoint) && !gd.on) return true;
      if (gd.on && gd.on(endpoint)) return true;
      return false;
   });

const injectGetter = (node, endpointKey, getterDescriptor, root) => {
   let { key, fn } = getterDescriptor;

   if (key === "..") {
      Object.defineProperty(
         node,
         `_${endpointKey}`,
         Object.getOwnPropertyDescriptor(node, endpointKey)
      );
      delete node[endpointKey];
      Object.defineProperty(node, endpointKey, {
         get() {
            return fn(this[`_${endpointKey}`], root);
         },
      });
      return;
   }

   const originKey = isGetter(node, endpointKey) ? `_${endpointKey}` : endpointKey;

   const getterKey = camelCase(`${endpointKey.replace(/^_/, "")} ${key}`);

   Object.defineProperty(node, getterKey, {
      get() {
         return fn(this[originKey], root);
      },
   });
};

export const injectGetters = node => mo(node, (node, path, root) => {
   // console.log(`check node`, path);
   const keys = hasEndpoints(node);
   if (keys) {
      // console.log(`node ${path || "[root]"} with endpoints:`, inspect(node));
      // console.log(`${path} keys with endpoints:`, keys);

      keys.forEach(key => {
         // console.log(`find getters for ${key}`);
         const endpoint = node[key];
         const gds = getGetterDescriptors(endpoint);
         // console.log(`endpoint:`, endpointType(endpoint));
         /* console.log(
            `getters:`,
            gds.map(g => g.key)
         ); */
         gds.forEach(gd => {
            // console.log(`inject getter ${gd.key} into ${path} for ${key}`);
            injectGetter(node, key, gd, root);
         });
      });

      return node;
   }
   return node;
});
