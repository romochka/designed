import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as TP } from "@mui/material/styles";
import { useTokens } from "../tokens";
import { theme } from "./theme";

export const ThemeProvider = ({ children }) => {
   
   const tokens = useTokens();
   
   return (
      <TP theme={theme(tokens)}>
         <CssBaseline />
         {children}
      </TP>
   );
};
