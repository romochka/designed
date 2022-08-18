import { LocalesProvider } from "./providers/locales";
import {RoutesProvider} from "./providers/routes";
// import { ThemeProvider } from "./providers/theme";
import { TokensProvider } from "./providers/tokens";

const App = ({ children }) => {
   return (
      <TokensProvider>
         <LocalesProvider>
            {/* <ThemeProvider> */}
               <RoutesProvider>{children}</RoutesProvider>
            {/* </ThemeProvider> */}
         </LocalesProvider>
      </TokensProvider>
   )
};


export default App;
