import { rx } from "../rx.js";
import lodash from "lodash";
import { ot } from "../index.js";
import { resolve } from "./index.js";
import { isEndpoint } from "../tree.js";
import { resolveEndpoint } from "./data.mjs";
import { getEndpointCssValue, getEndpointUnit } from "./convert.mjs";
const { get } = lodash;

const resolveRef = (refString, root) => {
   const res = get(root, refString);
   // console.log(`\nresolveRef: result:`, res, "\n");
   return res;
}

export const resolveEndpointRef = (refEndpoint, root) => {
   const ref = [...refEndpoint.match(rx.refs.single.extract)][1];
   console.log(`resolveEndpointRef: ref:`, ref);
   const endpoint = resolveRef(ref, root);
   console.log(`resolveEndpointRef: return result of type ${endpoint.type} value:`, endpoint.value);
   if (rx.refs.pass.test(endpoint.value)) {
      console.log(`resolveEndpointRef: value contains another refs`);
      return resolve(endpoint, root);
   }
   return getEndpointCssValue(endpoint);
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
      return str.replace(r, isEndpoint(ref.resolved) ? resolveEndpoint(ref.resolved, root) : ref.resolved);
   }, refExpressionString);

   return res;
   
};
