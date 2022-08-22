import { useDevice, useTokens } from "../../providers/tokens";

const Page = ({ children }) => {

   const weekColors = useTokens("colors.week");

   const style = {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      height: "100%",
      backgroundColor: weekColors[new Date().getDay()],
   };
   return <div {...{style}}>{ children }</div>

};

const NavBar = ({ children }) => {
   const navbar = useTokens("composite.navbar");
   const device = useDevice();

   console.log(`navbar:`, navbar);

   const style = device === "tablet"
   ? {
      ...navbar[0],
      position: "fixed",
      height: "100vh",
      right: 0, top: 0,
   }
   : navbar[0];

   return (
      <div {...{ style }}>{ children }</div>
   )
}

const Layout = ({ children }) => {

   return (
      <Page>
         <NavBar>N</NavBar>
         {children}
      </Page>
   )
   
};

export default Layout;
