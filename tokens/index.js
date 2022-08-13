import { readFile, writeFile } from "fs/promises";
import { om } from "./om/index.js";
// import { getData, getFallback } from "./om/data.js";

const rawTokens = await readFile("./figma/tokens.json", { encoding: "utf-8" })
   .then(res => JSON.parse(res))
   .then(node => om(node));

const json = JSON.stringify(rawTokens, null, 2);
const js = "export const tokens = " + json;

writeFile("./tokens.json", json).then(() => {console.log(`json flushed`);});

writeFile("./tokens-exported.js", js).then(() => { console.log(`js flushed`);})
