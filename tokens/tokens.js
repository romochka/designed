// import { getData, getFallback } from "./om/data.js";
// import { proxify } from "./om/proxies.js";

import { tokens as imported } from "./tokens-exported.js";
// import { injectGetters } from "./om/getters.js";
import { resolveAll } from "./resolve/index.js";
import { stylizeAll } from "./style/index.js";
import { expandTypography } from "./style/expand.js";
import { pipe } from "./om/index.js";
import lodash from "lodash";
const { cloneDeep } = lodash;

// export const tokens = proxify(imported, getData, getFallback);

const $ = cloneDeep(imported);

const processed = pipe(
   resolveAll,
   stylizeAll,
   expandTypography
)(imported);

export const tokens = {
   ...processed,
   $
};
