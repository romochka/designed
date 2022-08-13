import { isGetter, mo, ot } from "./om/index.js";
import lodash from "lodash";
const { cloneDeep } = lodash;
import util from "util";
const inspect = node => util.inspect(node, { showHidden: true, getters: true, depth: 25 });

const node = {
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

const withEndpoints = node => {
   if (ot(node) !== "object") return;
   const keys = Object.keys(node).filter(key => isEndPoint(node[key]));
   return keys.length > 0 ? keys : undefined;
}

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
            return this[`_${key}`]
         }
      });
   });
   return gnode;
};

const t = mo(node, (node, path) => {
   console.log(`check node`, path);
   const keys = withEndpoints(node);
   if (keys) {
      // console.log(`node ${path || "[root]"} with endpoints:`, inspect(node));
      console.log(`keys to getters:`, keys);
      const gnode = keys2getters(node, keys);
      console.log(`getters:`, Reflect.ownKeys(gnode).filter(key=>isGetter(gnode, key)));
      console.log(`new gnode:`, inspect(gnode));
      return gnode;
   }
   return node;
});

console.log(`res:`, inspect(t));

console.log(t.light.color.creamy);

const secpass = mo(t, node=>node);

console.log(`second pass:`, inspect(secpass));
