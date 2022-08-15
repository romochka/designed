import { createTheme } from "@mui/material";

export const theme = tokens => createTheme({
   tokens,
   components: {
      // Name of the component
      MuiButtonBase: {
         defaultProps: {
            // The props to change the default for.
            disableRipple: true, // No more ripple, on the whole application 💣!
         },
      },
      MuiButton: {
         variants: [
            {
               props: { variant: "action" },
               style: {
                  textTransform: "none",
                  backgroundColor:
                     tokens.composite.button.action.default[0].fill,
                  color: tokens.composite.button.action.default[1].fill,
                  ...tokens.composite.button.action.default[1].typography,
               },
            },
         ],
      },
   },
});
