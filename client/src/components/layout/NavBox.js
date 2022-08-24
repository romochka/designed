import { useDevice, useTokens } from "../../providers/tokens";

const NavBox = ({ children, contentDependentStyle }) => {
   const token = useTokens("composite.NavBox");
   const device = useDevice();

   const style =
      device === "tablet"
         ? {
              ...token[0],
              position: "fixed",
              height: "100vh",
              right: 0,
              top: 0,
           }
         : {
            ...token[0],
            ...contentDependentStyle, // on a phone, NavBox changes
         };

   return <div {...{ style }}>{children}</div>;
};

export default NavBox;
