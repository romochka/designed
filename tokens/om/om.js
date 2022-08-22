import { createBreakpoints } from "./breakpoints.js";
import { convertToArrays, mergeKeys, mergeTopLevels, pipe } from "./index.js";


export const om = (node, breakpoints) => {

   console.log("OM");

   const tokens = pipe(mergeTopLevels, node => createBreakpoints(node, breakpoints), convertToArrays)(node);
   
   return [
      ["phone", "tablet"],
      ["light", "dark"],
      ["phone.light", "phone.dark"],
      ["tablet.light", "tablet.dark"]
   ].reduce((tokens, keys) => (
      mergeKeys(tokens, keys)
   ), tokens);


}