import { createContext, useContext, useMemo } from "react";
import { tokens as allTokens } from "@designed/tokens/tokens.js";
import { get } from "lodash";
import { getTokensByDeviceAndScheme } from "./tokens";
import { useMediaQuery } from "react-responsive";
import { cl } from "../../helpers";

console.log(allTokens);

const Context = createContext();

export const useTokens = path => {
   const tokens = useContext(Context);
   return path ? get(tokens, path) : tokens;
};

export const Tokens = Context.Consumer;

export const TokensProvider = ({ children }) => {
   const isTablet = useMediaQuery({ query: "(min-width: 1000px)" });
   const isDark = useMediaQuery({ query: "(prefers-color-scheme: dark)" });

   const tokens = useMemo(() => {
      
      const device = { phone: !isTablet, tablet: isTablet };
      const scheme = { light: !isDark, dark: isDark };

      console.log(cl(device), cl(scheme));

      return getTokensByDeviceAndScheme(allTokens, device, scheme);

   }, [isTablet, isDark]);

   return <Context.Provider value={tokens}>{children}</Context.Provider>;
};
