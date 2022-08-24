import { createContext, useContext, useEffect, useMemo, useState } from "react";
import allTokens from "@designed/tokens/tokens.json";
import breakpoints from "@designed/tokens/breakpoints.json";
import { get } from "lodash";
import { getTokensByMedia } from "./tokens";
import { useMediaQuery } from "react-responsive";
import { cl, usePrevious } from "../../helpers";
import { useBreakpoint as useBreakpointName } from "./mq";

// console.log(allTokens);

const Context = createContext();

export const useTokens = (path, merge) => {
   const { tokens } = useContext(Context);
   if (path) {
      return Array.isArray(path)
         ? merge
            ? path.reduce((merged, p) => ({ ...merged, ...get(tokens, p) }), {})
            : path.map(p => get(tokens, p))
         : get(tokens, path);
   }
   return tokens;
};

export const useBreakpoint = () => {
   const { breakpoint } = useContext(Context);
   return breakpoint;
};

export const useScheme = () => {
   const { scheme } = useContext(Context);
   return scheme;
};

export const useDevice = () => {
   const { device } = useContext(Context);
   return device;
};

export const useTokensAndMedia = () => {
   return useContext(Context);
}

export const withTokens = (Unstyled, style) => {
   const Styled = ({ variant, ...props }) => {
      const tokens = useTokens();
      console.log(style({ tokens, variant }));
      return <Unstyled {...props} className={style({ tokens, variant })} />;
   };
   return Styled;
};

export const Tokens = Context.Consumer;

export const TokensProvider = ({ children }) => {
   // console.log(`breakpoints received:`, breakpoints);

   const isTablet = useMediaQuery({ query: "(min-width: 960px)" });
   const isDark = useMediaQuery({ query: "(prefers-color-scheme: dark)" });

   const breakpoint = useBreakpointName(breakpoints);
   const prevBreakpoint = usePrevious(breakpoint);

   const [tokens, setTokens] = useState();

   const media = useMemo(() => {
      const devices = { phone: !isTablet, tablet: isTablet };
      const schemes = { light: !isDark, dark: isDark };

      const device = cl(devices);
      const scheme = cl(schemes);

      console.log(device, scheme);
      // console.log(`breakpoint:`, breakpoint);

      return {
         devices,
         schemes,
         device,
         scheme,
      };
   }, [isTablet, isDark]);

   useEffect(() => {
      if (!breakpoint || breakpoint === prevBreakpoint) return;
      console.log(`recalc tokens`);
      setTokens(
         getTokensByMedia(allTokens, media.devices, media.schemes, breakpoint)
      );
   }, [media.devices, media.schemes, breakpoint, prevBreakpoint]);

   if (!tokens) return null;

   return (
      <Context.Provider
         value={{
            tokens,
            breakpoint,
            device: media.device,
            scheme: media.scheme,
         }}
      >
         {children}
      </Context.Provider>
   );
};
