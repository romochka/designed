import util from "util";
import { mo, ot } from "./om/index.js";
import { node as node } from "./testnode.js";
import lodash from "lodash";
const { get } = lodash;

const node0 = {
   a: 1,
   b: [
      {
         x: 1,
      },
      null,
      {
         x: 2,
      },
   ],
};

const getter = node => {
   if (ot(node)==="array") return node.map(child => getter(child));
   if (ot(node)==="object") {
      return Object.fromEntries(Object.entries(node).map(([key, child]) => {
         if (/^_/.test(key)) {
            return [
               key.slice(1),
               node[key.slice(1)]
            ]
         }
         return [key, child];
      }))
   }
   return node;
};

const gnode = mo(node, (node, path) => {
   if (ot(node) !== "object") return node;
   Object.entries(node).forEach(([key, child]) => {
      Object.defineProperty(
         node,
         `_${key}`,
         Object.getOwnPropertyDescriptor(node, key)
      );
      delete node[key];
      // console.log(`Define getter for ${path||"_root"}`);
      Object.defineProperty(node, key, {
         get() {
            console.log(`get ${key}`.grey);
            return getter(this[`_${key}`]);
         },
      });
   });
   return node;
});

const getData = (node, path, root) => {
   return node;
};

const getFallback = (node, missingKey, path, root) => {
   console.log(`fallback for ${path}`);
   // console.log(`${path}:`, get(root, path));
   return node;
}

const pnode = mo(node, (node, path, root) => {
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
            return getData(Reflect.get(target, index, receiver));            
         }

         const data = target.hasOwnProperty(key)
         ? getData(Reflect.get(...arguments), path, root)
         : getFallback(target, key, path, root);

         return data;

      }
   }
   const proxy = new Proxy(node, handler);
   return proxy;
});

console.log(`token:`, pnode.button.action.default[2]);

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
   console.log(`prop:`, prop);
    if (prop < 0) {
      // even if we access it like arr[1]
      // prop is a string, so need to convert it to number
      prop = +prop + target.length;
    }
    return Reflect.get(target, prop, receiver);
  }
});

// console.log(array[-1]); // 3
// console.log(array[-2]); // 2

// console.log(util.inspect(pnode, { showHidden: true, getters: true }));
