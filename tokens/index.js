import { readFile, writeFile } from "fs/promises";
import { om, ot } from "./om/index.js";
// import util from "util";
import { proxify } from "./om/proxies.js";
import { getData, getFallback } from "./om/data.js";

const rawTokens = await readFile("./tokens.json", { encoding: "utf-8" })
   .then(res => JSON.parse(res))
   .then(node => om(node));

writeFile("./tokens-merged.json", JSON.stringify(rawTokens, null, 2)).then(
   () => {
      console.log("tokens-merged.json rewritten");
   }
);

const tokens = proxify(rawTokens, getData, getFallback);

// console.log(`tokens:`, tokens);
// console.log(`tokens type:`, ot(tokens));
// console.log(`json:`, JSON.stringify(tokens));

console.log(`phone.light.composite.button.action.default:`, tokens.phone.light.composite.button.action.default[2]);

export default tokens;
