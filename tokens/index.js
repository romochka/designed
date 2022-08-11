import { readFile, writeFile } from "fs/promises";
import Baobab from "baobab";
import { select } from "./om/select.js";
import { om } from "./om/index.js";

const rawTokens = await readFile("./tokens.json", { encoding: "utf-8" })
   .then(res => JSON.parse(res))
   .then(node => om(node));

const tree = new Baobab(rawTokens);

function extract(tokenName) {
   const [device, scheme, ...rest] = tokenName.split(".");
   return [device, scheme, "composite", ...rest].join(".");
}

const tokenName = `phone.light.button.action.default`;

console.log(`select ${tokenName}`);
const value = select(tree, extract(tokenName));
console.log(JSON.stringify(value, null, 2));


const dummy = {
   top: {
      second: [],
   },
};

dummy.top.second[1] = { one: 1 };
dummy.top.second[3] = { three: 3 };
dummy.top.second[5] = { five: 5 };
dummy.top.second[6] = { six: 6 };
dummy.top.second[8] = { eight: 8 };

const dummyTree = new Baobab(dummy.top.second);

const dummyValue = select(dummyTree, "7");

console.log(JSON.stringify(dummyValue, null, 2));

// console.log(`from tree:`, dummyTree.select("top", "second", 4).get());

// const c = dummyTree.select(["top", "second", 5]);

// console.log("this:", c.get());
// console.log("left:", c.left().get());
// console.log("select non existing key:", c.select(2).get());

writeFile("./tokens-merged.json", JSON.stringify(rawTokens, null, 2)).then(
   () => {
      console.log("tokens-merged.json rewritten");
   }
);
