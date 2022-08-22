import { useCallback, useEffect, useState } from "react";

export const useBreakpoint = breakpoints => {
   const [bps, set] = useState([]);

   const reduce = useCallback((matches, name) => {
      // console.log(`${name} changes to: ${matches}`);

      if (matches) {
         set(bps => (bps.indexOf(name) < 0 ? [...bps, name] : bps));
         return;
      }
      set(bps =>
         bps.indexOf(name) > -1 ? bps.filter(bp => bp !== name) : bps
      );
   }, []);

   useEffect(() => {
      const queries = Object.entries(breakpoints).map(([name, query]) => [
         name,
         window.matchMedia(query),
      ]);

      // console.log(`queries`, queries);

      queries.forEach(([name, mql]) => {
         // console.log(`bp name:`, name);
         reduce(mql.matches, name);
         mql.addEventListener("change", event => reduce(event.matches, name));
      });
   }, [breakpoints, reduce]);

   return (
      bps.length > 0 &&
      bps.reduce((bp, name) =>
         Object.keys(breakpoints).indexOf(name) >
         Object.keys(breakpoints).indexOf(bp)
            ? name
            : bp
      )
   );
};
