import { useTokens } from "../../providers/tokens";

const OuterBox = ({ children }) => {

   const weekColors = useTokens("colors.week");

   console.log("week colors:", weekColors);

   const style = {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      height: "100%",
      backgroundColor: weekColors[new Date().getDay()],
   };
   return <div {...{style}}>{ children }</div>

};

const Layout = ({ children }) => {

   return (
      <OuterBox>
         {children}
      </OuterBox>
   )
   
};

export default Layout;
