import { rx } from "../rx.js";
import lodash from "lodash";
import { ot } from "../index.js";
import { resolve } from "./index.js";
import { isEndpoint } from "../tree.js";
import { resolveEndpoint } from "./data.mjs";
const { get } = lodash;

const resolveRef = (refString, root) => {
   const res = get(root, refString);
   console.log(`\nresolveRef: result:`, res, "\n");
   return res;
}

export const resolveEndpointRef = (refEndpoint, root) => {
   const ref = [...refEndpoint.match(rx.refs.single.extract)][1];
   console.log(`resolveEndpointRef: ref:`, ref);
   const res = resolveRef(ref, root);
   console.log(`resolveEndpointRef: return result value:`, res.value);
   if (rx.refs.pass.test(res.value)) {
      console.log(`resolveEndpointRef: value contains another refs`);
      return resolve(res.value, root);
   }
   return res.value;
}

export const resolveRefsInExpressionString = (refExpressionString, root) => {

   const refs = [...refExpressionString.matchAll(rx.refs.extract)].map(arr => ({ path: arr[1]})).reduce((refs, ref, index, self) => {

      const i = self.findIndex(existing => existing.path === ref.path);
      // console.log(`index of ${ref.path} in self: ${i}`);
      // console.log(`self:`, self);
      // console.log(`current index: ${index}`);
      if (i < index) return refs;

      // console.log(`resolve ${ref.path} in`, root);

      const resolved = resolveRef(ref.path, root);

      // console.log(`resolved:`, resolved);

      if (resolved !== undefined) return [...refs, {...ref, resolved } ];

      return refs;

   }, []);

   console.log(`refs:`, refs);

   const res = refs.reduce((str, ref) => {
      const r = new RegExp(`{${ref.path}}`, "g");
      return str.replace(r, ref.resolved);
   }, refExpressionString);

   return res;
   
};
