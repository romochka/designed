import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./routes";

const ScrollToTop = () => {
   const { pathname } = useLocation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);
   return null;
};

export const RoutesProvider = () => {

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
