import { convertToArrays, mergeKeys, mergeTopLevels } from "./index.js";


export const om = node => {

   const tokens = convertToArrays(mergeTopLevels(node));
   
   return [
      ["phone", "tablet"],
      ["light", "dark"],
      ["phone.light", "phone.dark"],
      ["tablet.light", "tablet.dark"]
   ].reduce((tokens, keys) => (
      mergeKeys(tokens, keys)
   ), tokens);


}