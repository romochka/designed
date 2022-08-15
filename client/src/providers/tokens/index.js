import { createContext, useContext } from "react";
import { tokens } from "@designed/tokens/tokens.js";
import { get } from "lodash";

// console.log(tokens);

const Context = createContext();

export const useTokens = (path) => {
   const tokens = useContext(Context);
   return path ? get(tokens, path) : tokens;
};

export const TokensProvider = ({ children }) => (

   

   <Context.Provider value={tokens}>
      { children }
   </Context.Provider>
);
