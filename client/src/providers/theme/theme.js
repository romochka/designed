import { createTheme } from "@mui/material";

export const theme = tokens => createTheme({
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
                  ...tokens.composite.button.action.default[0], // container
                  ...tokens.composite.button.action.default[1], // textnode
                  "&:hover": {
                     ...tokens.composite.button.action.hover[0]
                  },
                  "&:active": {
                     ...tokens.composite.button.action.active[0]
                  },
                  "&:disabled": {
                     ...tokens.composite.button.action.disabled[0]
                  },
               },
            },
         ],
      },
   },
});
