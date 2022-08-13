import { rx } from "./rx.js";
import lodash from "lodash";
import { ot } from "./index.js";
const { get } = lodash;


export const resolveRefs = (rawValue, root) => {
   if (!rx.containsRef.test(rawValue)) return { value: rawValue };

   let value = rawValue;

   // console.log(`${value}`.red);
   const refs = [...value.matchAll(rx.extractRefs)].map((arr) => ({
      name: arr[1],
   }));

   refs.forEach((ref) => {

      let resolved;

      resolved = get(root, ref.path);

      if (resolved !== undefined) {
         ref.unresolved = ref.name;
         ref.name = searchPath;

         if (ot(resolved) !== "string") {
            // console.log("value to resolve is not a string", resolved);
            ref.value = mo(resolved, (node, nodePath) => {
               const p = path + "." + nodePath;
               // console.log(p);
               const res = resolveRefs(p, node, root);
               // console.log(res);
               return res.value;
            });
         } else {
            ref.value = resolved;
         }
         ref.resolved = true;
         return;
      }

      // console.log(`%cunresolved`, "color: red");
      ref.resolved = false;
   });

   const resolvedRefs = refs.filter((ref) => ref.resolved);

   const updated = { value, ref: value };

   resolvedRefs.forEach((ref) => {
      const r = new RegExp(`{${ref.unresolved}}`, "g");
      if (ot(ref.value) === "string") {
         updated.value = updated.value.replace(r, ref.value);
      } else {
         // console.log("value is not a string", JSON.stringify(ref.value));
         updated.value = ref.value;
      }
      updated.ref = updated.ref.replace(r, `{${ref.name}}`);
   });

   return updated;
};
