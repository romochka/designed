import { useDevice, useTokens } from "../../providers/tokens";

const ScreenBox = ({ children }) => {
   const weekColors = useTokens("colors.week");

   const style = {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      height: "100%",
      backgroundColor: weekColors[new Date().getDay()],
   };
   return <div {...{ style }}>{children}</div>;
};

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

const MainBox = ({ children }) => {

   const style = {
      flexGrow: 1,
   }

   return <div {...{ style }}>{children}</div>;
};

const Footer = () => {

   return (
      <div>footer</div>
   )
};

const PageBox = ({ children, contentDependentStyle }) => {
   const tokens = useTokens();
   const device = useDevice();

   const deviceDependentStyle =
      device === "tablet"
      ? { paddingRight: tokens.composite.NavBox[0].width }
      : {};

   const style = {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      ...deviceDependentStyle,
      ...contentDependentStyle,
   };

   // console.log(`pagebox style:`, style);

   return <div {...{ style }}>{children}</div>;
};

const Layout = ({ children, contentDependentStyle }) => {

   // contentDependentStyle is for Story backgroundColor for now

   return (
      <ScreenBox>
         <NavBox {...{contentDependentStyle}}>N</NavBox>
         <PageBox {...{contentDependentStyle}}>
            <MainBox>{children}</MainBox>
            <Footer />
         </PageBox>
      </ScreenBox>
   );
};

export default Layout;
