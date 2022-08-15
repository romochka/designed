import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as TP, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";
// import { theme } from "./theme";
import { tokens } from "@designed/tokens/tokens.js";

export const ThemeProvider = ({ children }) => {
   const tablet = useMediaQuery("(min-width: 1000px)");
   const dark = useMediaQuery("(prefers-color-scheme: dark)");

   const theme = useMemo(() => {

      console.log(Object.keys(tokens));

      const device = tablet ? "tablet" : "phone";
      const scheme = dark ? "dark" : "light";

      return createTheme({
         tokens: {

         },
      });
   }, [tablet, dark]);

   return (
      <TP theme={theme}>
         <CssBaseline />
         {children}
      </TP>
   );
};
