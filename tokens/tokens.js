
// import { getData, getFallback } from "./om/data.js";
// import { proxify } from "./om/proxies.js";

import { tokens as imported } from "./tokens-exported.js";
import { injectGetters } from "./om/getters.js";

// export const tokens = proxify(imported, getData, getFallback);

export const tokens = injectGetters(imported);
