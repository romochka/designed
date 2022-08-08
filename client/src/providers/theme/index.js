import { CssBaseline, ThemeProvider as TP } from "@mui/material";
import { theme } from "./theme";

export const ThemeProvider = ({ children }) => (
   <TP theme={theme}>
      <CssBaseline />
      {children}
   </TP>
);
