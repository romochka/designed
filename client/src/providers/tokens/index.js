import { createContext, useContext } from "react";
import rawTokens from "@designed/tokens/tokens.json";
import { proxify } from "./om/proxies";
import { getData, getFallback } from "./om/data";

console.log(rawTokens);

const tokens = proxify(
   rawTokens,
   getData,
   getFallback
);

const Context = createContext();

export const useTokens = () => useContext(Context);

export const TokensProvider = ({ children }) => (

   <Context.Provider value={tokens}>
      { children }
   </Context.Provider>
);
