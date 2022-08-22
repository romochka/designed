import { createContext, useContext, useMemo } from "react";
import { tokens as allTokens } from "@designed/tokens/tokens.js";
import breakpoints from "@designed/tokens/breakpoints.json";
import { get } from "lodash";
import { getTokensByMedia } from "./tokens";
import { useMediaQuery } from "react-responsive";
import { cl } from "../../helpers";
import { useBreakpoint as useBreakpointName } from "./mq";

// console.log(allTokens);

const Context = createContext();

export const useTokens = (path, merge=true) => {
   const { tokens } = useContext(Context);
   if (path) {
      return Array.isArray(path)
      ? merge
         ? path.reduce((merged, p) => ({...merged, ...get(tokens, p) }), {})
         : path.map(p => get(tokens, p))
      : get (tokens, path);
   }
   return tokens;
};

export const useBreakpoint = () => {
   const { breakpoint } = useContext(Context);
   return breakpoint;
}

export const useScheme = () => {
   const { scheme } = useContext(Context);
   return scheme;
}

export const useDevice = () => {
   const { device } = useContext(Context);
   return device;
}

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

   const isTablet = useMediaQuery({ query: "(min-width: 960px)" });
   const isDark = useMediaQuery({ query: "(prefers-color-scheme: dark)" });

   const breakpoint = useBreakpointName(breakpoints);

   const everything = useMemo(() => {

      if (!breakpoint) return;
      
      const device = { phone: !isTablet, tablet: isTablet };
      const scheme = { light: !isDark, dark: isDark };

      console.log(cl(device), cl(scheme));

      console.log(`breakpoint name:`, breakpoint);

      return {
         tokens: getTokensByMedia(allTokens, device, scheme, breakpoint),
         device: cl(device), scheme: cl(scheme),
         breakpoint,
      }

   }, [isTablet, isDark, breakpoint]);

   if (!breakpoint) return null;

   return <Context.Provider value={everything}>{children}</Context.Provider>;
};
