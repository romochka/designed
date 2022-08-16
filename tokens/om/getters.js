
import lodash from "lodash";
import { hasEndpoints } from "../resolve/endpoints.js";
import { resolve } from "../resolve/index.js";
const { camelCase } = lodash;
import { isGetter, mo } from "./index.js";


const getterDescriptors = [
   {
      key: "..", // modifies node endpoint key
      on: true,
   },
   /* {
      key: "ref",
      fn: getRefValue,
      on: true,
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

   if (!root) throw "no root provided";

   let { key, fn } = getterDescriptor;

   if (key === "..") {
      Object.defineProperty(node, `_${endpointKey}`, {
         get() {
            return node[endpointKey]
         },
      });
      return;
   }

   const getterKey = camelCase(`${endpointKey.replace(/^_/, "")} ${key}`);

   Object.defineProperty(node, getterKey, {
      get() {
         return fn(node[endpointKey], root);
      },
   });
};

const injectEndpointGetters = (node, endpointKeys, root) => {
   endpointKeys.forEach(key => {
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
         if (!root) {
            throw `no root for ${path}`;
            // console.log(`node:`, node);
         }
         injectGetter(node, key, gd, root);
      });
   });

   return node;
}

export const injectGetters = node => mo(node, (node, path, root) => {
   // console.log(`check node`, path);
   const keys = hasEndpoints(node);
   if (keys) {
      // console.log(`node ${path || "[root]"} with endpoints:`, inspect(node));
      // console.log(`${path} keys with endpoints:`, keys);
      return injectEndpointGetters(node, keys, root);
   }

   return node;
});
