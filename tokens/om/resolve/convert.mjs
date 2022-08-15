const cssUnits = {
   px: ["borderRadius", "fontSize", "fontSizes", "lineHeight", "lineHeights", "letterSpacing"],
};

export const getEndpointUnit = (endpoint) => {
   // const endpointType = endpoint.type || key;
   const unit = Object.keys(cssUnits).find(unit =>
      cssUnits[unit].includes(endpoint.type)
   );
   return unit || "";
};

const cssValues = {
   "fontWeight, fontWeights": {
      thin: "100",
      extralight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
   },
};

export const convertEndpointValue = (endpoint) => {
   console.log(`\n`, `convertEndpointValue: check ${endpoint.type}`, `\n`);
   const cssProperty = Object.keys(cssValues)
   .find(props => props.split(",").map(s=>s.trim()).includes(endpoint.type));
   if (cssProperty) {
      console.log(`cssProperty:`, cssProperty);
      const value = Object.keys(cssValues[cssProperty]).find(value => endpoint.value.toLowerCase().replace(/[\s-]/g, "") === value);
      
      if (value) return cssValues[cssProperty][value];
   }
   return endpoint.value;
};

export const getEndpointCssValue = (endpoint) => {
   // const endpointType = endpoint.type || key;
   console.log(`\n`, `getEndpointCssValue: check ${endpoint.type}`, `\n`);
   if (!isNaN(Number(endpoint.value))) return endpoint.value + getEndpointUnit(endpoint);
   return convertEndpointValue(endpoint);
}
