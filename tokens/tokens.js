// import { getData, getFallback } from "./om/data.js";
// import { proxify } from "./om/proxies.js";

import { tokens as imported } from "./tokens-exported.js";
import { injectGetters } from "./om/getters.js";
import { resolveAll } from "./resolve/index.js";
import { stylizeAll } from "./style/index.js";
import { expandTypography } from "./style/expand.js";

// export const tokens = proxify(imported, getData, getFallback);

export const tokens = expandTypography(
   stylizeAll(
      resolveAll(
         injectGetters(imported)
      )
   )
);
