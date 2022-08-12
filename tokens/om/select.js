import { isInteger } from "./index.js";
import { fallbackTree } from "./fallback.js";


export function select(tree, token) {
   const path = isInteger(token)
      ? token
      : token.split(".").reduce((keys, key) => {
           if (/[^\[]+\[\d+\]$/.test(key)) {
              const [k, i] = [...key.match(/^([^\[]+)\[(\d+)\]/)].slice(1);
              return [...keys, k, parseInt(i)];
           }
           return [...keys, key];
        }, []);

   const testpath = [
      "phone",
      "light",
      "composite",
      "button",
      "action",
      "default",
      0,
   ];
   const testcursor = tree.select(testpath);
   // console.log(JSON.stringify(testcursor.get(), null, 2));
   // const fullpath = [device, scheme, "composite", ...path];

   // console.log("path:", path);

   // console.log(`tree:`, tree.get());
   const cursor = tree.select(path);
   // console.log(`cursor:`, cursor.get());

   const data = fallbackTree(cursor);

   return data;
}
