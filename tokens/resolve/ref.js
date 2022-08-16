
import lodash from "lodash";
import { ot } from "../om/index.js";
import { isEndpoint } from "./endpoints.js";
import { resolve } from "./index.js";
import { refpath, rx } from "./rx.js";
const { get } = lodash;

const findFinalNode = (ref, root) => {
   const res = get(root, refpath(ref));
   if (!res) return;
   if (isEndpoint(res) && rx.ref.hasOnlySingle.test(res.value))
      return findFinalNode(res.value, root);
   return res;
};

export const resolveRef = (ref, root) => {

   const node = findFinalNode(ref, root);

   // console.log(`\n----- resolve single ref ${ref} ------`);
   // console.log(`final node:`, node);
   // console.log(`----- resolved single ref ------\n`);

   if (isEndpoint(node)) return node.value;

   if (ot(node) === "object") return Object.fromEntries(Object.entries(node).map(([key, child]) => [key,
      isEndpoint(child)
      ? resolve(child, root)
      : child
   ]));

   return ref;

}