import { readFile, writeFile } from "fs/promises";
import { om } from "./om/om.js";
// import { getData, getFallback } from "./om/data.js";

const breakpoints = await readFile("./breakpoints.json", { encoding: "utf-8" })
   .then(res => JSON.parse(res))
   .then(obj => Object.keys(obj));

const rawTokens = await readFile("./figma/tokens.json", { encoding: "utf-8" })
   .then(res => JSON.parse(res))
   .then(node => om(node, breakpoints));

const json = JSON.stringify(rawTokens, null, 2);
// const js = "export const tokens = " + json;

writeFile("./tokens-prepared.json", json).then(() => {
   console.log(`json flushed`);
});

/* writeFile("./tokens-exported.js", js).then(() => {
   console.log(`js flushed`);
}); */
