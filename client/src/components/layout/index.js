import { useTokens } from "../../providers/tokens";
import Footer from "./Footer";
import NavBox from "./NavBox";
import PageBox from "./PageBox";

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


const MainBox = ({ children }) => {

   const style = {
      flexGrow: 1,
   }

   return <div {...{ style }}>{children}</div>;
};


const Layout = ({ children, contentDependentStyle }) => {

   // for now, contentDependentStyle is for Story backgroundColor

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
