import { readFile, writeFile } from "fs/promises";
import Baobab from "baobab";
import { select } from "./om/select.js";
import { mo, om } from "./om/index.js";
import util from "util";

const rawTokens = await readFile("./tokens.json", { encoding: "utf-8" })
   .then(res => JSON.parse(res))
   .then(node => om(node));

// const tree = new Baobab(rawTokens, { lazyMonkeys: true });

// console.log(tree.get());

console.log(
   `tokens with getters:`,
   util.inspect(rawTokens, { getters: true, showHidden: true, depth: 100 })
);

const query = `tablet.light`;

const token = rawTokens.select(query);
console.log(`query:`, query);
console.log(`response:`, JSON.stringify(token, null, 2));


/* function extract(tokenName) {
   const [device, scheme, ...rest] = tokenName.split(".");
   return [device, scheme, "composite", ...rest].join(".");
}

const tokenName = `phone.light.button.action.default[2]`; */

// console.log(`select ${tokenName}`);
// const value = select(tree, extract(tokenName));
// console.log(JSON.stringify(value, null, 2));

writeFile("./tokens-merged.json", JSON.stringify(rawTokens, null, 2)).then(
   () => {
      console.log("tokens-merged.json rewritten");
   }
);
