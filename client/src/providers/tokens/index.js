import { createContext, useContext, useMemo } from "react";
import { tokens as allTokens } from "@designed/tokens/tokens.js";
import breakpoints from "@designed/tokens/breakpoints.json";
import { get } from "lodash";
import { getTokensByMedia } from "./tokens";
import { useMediaQuery } from "react-responsive";
import { cl } from "../../helpers";
import { useBreakpoint } from "./mq";

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

   // console.log(`breakpoints received:`, breakpoints);

   const isTablet = useMediaQuery({ query: "(min-width: 1000px)" });
   const isDark = useMediaQuery({ query: "(prefers-color-scheme: dark)" });

   const breakpoint = useBreakpoint(breakpoints);

   const tokens = useMemo(() => {

      if (!breakpoint) return;
      
      const device = { phone: !isTablet, tablet: isTablet };
      const scheme = { light: !isDark, dark: isDark };

      console.log(cl(device), cl(scheme));

      console.log(`breakpoint name:`, breakpoint);

      return getTokensByMedia(allTokens, device, scheme, breakpoint);

   }, [isTablet, isDark, breakpoint]);

   if (!breakpoint) return null;

   return <Context.Provider value={tokens}>{children}</Context.Provider>;
};
