import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Locales } from "./components/locales";
import { ThemeProvider } from "./components/theme";
import { routes } from "./routes";

const ScrollToTop = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return null;
};

const AppProvider = ({ children }) => {
   return (
      <Locales>
         <ThemeProvider>
            {children}
         </ThemeProvider>
      </Locales>
   )
};

const AppRouter = () => {

   return (
      <BrowserRouter>
         <ScrollToTop />
         <Routes>
            {routes.map(([path, Element, props = {}], i) => (
               <Route key={i} path={path} element={<Element {...props} />} />
            ))}
         </Routes>
      </BrowserRouter>
   );
};

const App = () => (
   <AppProvider>
      <AppRouter />
   </AppProvider>
)


export default App;
