import { isGetter, mo, ot } from "./om/index.js";
import lodash from "lodash";
const { camelCase } = lodash;
import util from "util";
const inspect = node =>
   util.inspect(node, { showHidden: true, getters: true, depth: 25 });

import { tokens as node } from "./tokens-exported.js";

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

const endpointType = endpoint => {
   if (ot(endpoint) === "array") {
      const types = endpoint.map(e => e && e.type).filter(e=>e);
      if (types.length > 1)
         console.warn("enpoint array contains different types", types);
      return types[0];
   }
   return endpoint.type;
};
const hasType =
   (...types) =>
   endpoint =>
      ot(endpoint) === "array"
         ? endpoint.every(e => e === null || types.includes(e.type)) &&
           endpoint.some(e => e !== null)
         : types.includes(endpoint.type);

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
   {
      key: "css",
      on: hasType("composition"),
      fn: getCssValue,
   },
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

const injectGetter = (node, endpointKey, getterDescriptor) => {
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
            return fn(this[`_${endpointKey}`]);
         },
      });
      return;
   }

   const originKey = isGetter(node, endpointKey) ? `_${endpointKey}` : endpointKey;

   const getterKey = camelCase(`${endpointKey.replace(/^_/, "")} ${key}`);

   Object.defineProperty(node, getterKey, {
      get() {
         return fn(this[originKey]);
      },
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
         const gds = getGetterDescriptors(endpoint);
         console.log(`endpoint:`, endpointType(endpoint));
         console.log(
            `getters:`,
            gds.map(g => g.key)
         );
         gds.forEach(gd => {
            console.log(`inject getter ${gd.key} into ${path} for ${key}`);
            injectGetter(node, key, gd);
         });
      });

      return node;
   }
   return node;
});

const obj = {
   _a: 7,
   get a() {
      return this._a;
   },
   get b() {
      return this.a;
   },
};


// console.log(obj.a.b);

console.log(`res:`, Object.keys(t.color));

console.log(t.color.creamy);

// const secpass = mo(t, node=>node);

// console.log(`second pass:`, inspect(secpass));
