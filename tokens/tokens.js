
import { getData, getFallback } from "./om/data.js";
import { proxify } from "./om/proxies.js";
import { tokens as imported } from "./tokens-exported.js";

export const tokens = proxify(imported, getData, getFallback);
