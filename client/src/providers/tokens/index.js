import { createContext, useContext, useMemo } from "react";
import { tokens as allTokens } from "@designed/tokens/tokens.js";
import { get } from "lodash";
import { getTokensByDeviceAndScheme } from "./tokens";
import { useMediaQuery } from "react-responsive";
import { cl } from "../../helpers";

// console.log(allTokens);

const Context = createContext();

export const useTokens = (path, merge=true) => {
   const tokens = useContext(Context);
   if (path) {
      return Array.isArray(path)
      ? merge
         ? path.reduce((merged, p) => ({...merged, ...get(tokens, p) }), {})
         : path.map(p => get(tokens, p))
      : get (tokens, path);
   }
   return tokens;
};

export const withTokens = (Unstyled, style) => {
   const Styled = ({ variant, ...props }) => {
      const tokens = useTokens();
      return <Unstyled {...props} className={style({ tokens, variant })} />
   };
   return Styled;
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
