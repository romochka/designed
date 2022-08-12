export const node = {
   color: {
      coolGray: {
         value: "#8F9397",
         type: "color",
         description: "button surface",
      },
      creamy: {
         value: "#FBFAF5",
         type: "color",
      },
      greenishBlack: {
         value: "#12241F",
         type: "color",
      },
   },
   button: {
      action: {
         default: [
            {
               value: {
                  borderRadius: "{phone.borderRadius.md}",
                  fill: "{light.colors.button.action.default}",
               },
               type: "composition",
            },
            {
               value: {
                  typography: "{phone.typography.ui.sm}",
                  fill: "{color.creamy}",
               },
               type: "composition",
            },
            null,
            {
               value: {
                  typography: "{phone.typography.ui.sm}",
                  fill: "{color.creamy}",
               },
               type: "composition",
            },
         ],
         active: [
            {
               value: {
                  borderRadius: "{phone.borderRadius.md}",
                  fill: "{light.colors.button.action.active}",
               },
               type: "composition",
            },
         ],
      },
   },
};
