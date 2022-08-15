import { createTheme } from "@mui/material";
import { tokens } from "@designed/tokens/tokens.js";

console.log(tokens.phone.light.composite.button.action.default[1].fill);

let device, scheme;

function setupDeviceAndScheme() {
   const getDevice = e => e.matches ? "tablet" : "phone";
   const getScheme = e => e.matches ? "dark" : "light";
   const mqDevice = window.matchMedia("(min-width: 1000px)");
   const mqScheme = window.matchMedia("(prefers-color-scheme: dark)");
   device = getDevice(mqDevice);
   scheme = getScheme(mqScheme);
   mqDevice.addEventListener("change", e => {
      device = getDevice(e);
   });
   mqScheme.addEventListener("change", e => {
      scheme = getScheme(e);
   });
}

setupDeviceAndScheme();

export const theme = createTheme({
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
                  backgroundColor:
                     tokens.phone.light.composite.button.action.default[0].fill,
               },
            },
         ],
      },
   },
});
