import { getData } from "./data.js";
import { formatPath } from "./format.js";
import { isInteger, ot } from "./index.js";

export function fallback(cursor) {
   if (cursor.exists()) return getData(cursor, false);

   console.log(`cursor:`, cursor.get(), cursor.path);
   // console.log(`parent:`, cursor.up().get());

   // let exists = false;

   const path = cursor.path.slice(0);
   let missingKey = path.pop();
   let parent = cursor,
      sibling;

   while (parent) {
      console.log(`missing key:`, missingKey);

      // console.log(path);
      // console.log(cursor.path);

      parent = parent.up(); //.root().select(path);

      if (parent.exists()) {
         if (isInteger(missingKey)) {
            // if missing key is an array index
            // console.log(`parent:`, parent.get());
            if (ot(parent.get() === "array")) {
               // find value to the left
               // console.log("is parent array?", ot(parent.get()));
               // console.log("parent cursor data:", JSON.stringify(data));
               let index = parseInt(missingKey) - 1;
               while (index > 0) {
                  // don't use token[0] as fallback
                  sibling = parent.select(index);
                  // console.log(`sibling ${index} exists?:`, sibling.exists());
                  if (sibling.exists())
                     return getData(sibling, {
                        missing: formatPath(cursor.path),
                        used: formatPath(sibling.path),
                     });
                  // console.log(`sibling ${index} value:`, sibling.get());
                  // console.log(`data[${index}]:`, data[index]);
                  index--;
               }
            }
         }
         return getData(parent, {
            missing: formatPath(cursor.path),
            used: formatPath(parent.path) || "_root",
         });

      }
      
      missingKey = path.pop();
   }
   
   return { error: "no fallback found", missing: formatPath(cursor.path) };
}