import { createContext, useContext, useMemo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens as allTokens } from "@designed/tokens/tokens.js";
import { get } from "lodash";
import { getTokensByDeviceAndScheme } from "./tokens";

console.log(allTokens);

const Context = createContext();

export const useTokens = path => {
   const tokens = useContext(Context);
   return path ? get(tokens, path) : tokens;
};

export const TokensProvider = ({ children }) => {
   const isTablet = useMediaQuery("(min-width: 1000px)");
   const isDark = useMediaQuery("(prefers-color-scheme: dark)");

   const tokens = useMemo(() => {

      const device = { phone: !isTablet, tablet: isTablet };
      const scheme = { light: !isDark, dark: isDark };
      return getTokensByDeviceAndScheme(allTokens, device, scheme);

   }, [isTablet, isDark]);

   return <Context.Provider value={tokens}>{children}</Context.Provider>;
};
