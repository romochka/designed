import { LocalesProvider } from "./providers/locales";
import {RoutesProvider} from "./providers/routes";
import { ThemeProvider } from "./providers/theme";

const App = ({ children }) => {
   return (
      <LocalesProvider>
         <ThemeProvider>
            <RoutesProvider>{children}</RoutesProvider>
         </ThemeProvider>
      </LocalesProvider>
   )
};


export default App;
