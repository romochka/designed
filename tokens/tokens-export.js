
import { readFile, writeFile } from "fs/promises";
// import { tokens as imported } from "./tokens-exported.js";
import { resolveAll } from "./resolve/index.js";
import { stylizeAll } from "./style/index.js";
import { expandTypography } from "./style/expand.js";
import { pipe } from "./om/index.js";
// import { inspect } from "util";
import lodash from "lodash";
const { cloneDeep } = lodash;

// export const tokens = proxify(imported, getData, getFallback);

const prepared = await readFile("./tokens-prepared.json").then(res => JSON.parse(res));

const $ = cloneDeep(prepared);

const processed = pipe(
   resolveAll,
   stylizeAll,
   expandTypography
)(prepared);

export const tokens = {
   ...processed,
   $
};

// console.log(inspect(tokens, { depth: 20 }));

await writeFile("./tokens.json", JSON.stringify(tokens, null, 2));
