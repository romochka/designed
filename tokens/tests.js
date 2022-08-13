import { isGetter, mo, ot } from "./om/index.js";
import util from "util";
const inspect = node =>
   util.inspect(node, { showHidden: true, getters: true, depth: 25 });

import { node } from "./testnode.js";

const node0 = {
   light: {
      color: {
         coolGray: {
            value: "#8F9397",
            type: "color",
            description: "button surface",
         },
         description: "comment",
         creamy: {
            value: "#FBFAF5",
            type: "color",
         },
         greenishBlack: {
            value: "#12241F",
            type: "color",
         },
      },
   },
   button: {
      value: "super button",
      type: "test",
   },
};

const isEndPoint = node =>
   node && node.hasOwnProperty("value") && node.hasOwnProperty("type");

const hasEndpoints = node => {
   if (ot(node) !== "object") return;
   const keys = Object.keys(node).filter(key =>
      ot(node[key]) === "array"
         ? node[key].some(e => isEndPoint(e))
         : isEndPoint(node[key])
   );
   return keys.length > 0 ? keys : undefined;
};

const getResolvedValue = endpoint => endpoint.value;
const getRefValue = endpoint => endpoint.value;
const getCssValue = endpoint => endpoint.value;

const hasType =
   (...types) =>
   endpoint =>
      ot(endpoint) === "array"
      ? endpoint.every(e => e===null || types.includes(e.type)) && !endpoint.some(e=>e!==null)
      : types.includes(endpoint.type);

const getterDescriptors = [
   {
      key: "..",
      fn: getResolvedValue,
      off: hasType("composition"),
   },
   {
      key: "ref",
      fn: getRefValue,
      on: true,
   },
   {
      key: "css",
      on: hasType("composition"),
      fn: getCssValue,
   },
];

const injectGetter = (node, parentKey, getterDescriptor) => {
   let { key, fn } = getterDescriptor;
   if (key === "..") {
      key = parentKey;
      Object.defineProperty(
         node,
         `_${key}`,
         Object.getOwnPropertyDescriptor(node, key)
      );
      delete node[key];
   }
   Object.defineProperty(node, key, {
      get() {
         return fn(this);
      }
   });
};

const keys2getters = (node, keys) => {
   const gnode = node;
   keys.forEach(key => {
      Object.defineProperty(
         gnode,
         `_${key}`,
         Object.getOwnPropertyDescriptor(gnode, key)
      );
      delete gnode[key];
      Object.defineProperty(gnode, key, {
         get() {
            return this[`_${key}`];
         },
      });
   });
   return gnode;
};

const t = mo(node, (node, path) => {
   // console.log(`check node`, path);
   const keys = hasEndpoints(node);
   if (keys) {
      // console.log(`node ${path || "[root]"} with endpoints:`, inspect(node));
      console.log(`${path} keys with endpoints:`, keys);

      keys.forEach(key => {
         console.log(`find getters for ${key}`);
         const endpoint = node[key];
         const getters = getterDescriptors.filter(gd => {
            if (gd.on === true) return true;
            if (gd.off === true) return false; // hmmmm...

            if (gd.off && (
               ot(endpoint) === "array"
               ? endpoint.every(e => e===null || gd.off(e))
               : gd.off(endpoint)
            )) return false;

            if (gd.on && (
               ot(endpoint) === "array"
               ? endpoint.every(e => e===null || gd.on(e))
               : gd.on(endpoint)
            )) return true;

            return true;
         });
         console.log(`endpoint:`, endpoint.type);
         console.log(`getters:`, getters.map(g => g.key));
         
      });

      return node;
   }
   return node;
});

// console.log(`res:`, inspect(t));

// console.log(t.light.color.creamy);

// const secpass = mo(t, node=>node);

// console.log(`second pass:`, inspect(secpass));
