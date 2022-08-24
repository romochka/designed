import { useDevice, useTokens } from "../../providers/tokens";

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

export default PageBox;
