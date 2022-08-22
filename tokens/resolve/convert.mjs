const cssUnits = {
   px: [
      /^borderRad/, /^fontSiz/, /^lineH/, /^letterSpac/,
      /^borderWidth/, /padding/i, /^margin/, /^width/, /^height/, /^spacing/, /^sizing/
   ],
};

const getEndpointUnit = (endpoint) => {
   // const endpointType = endpoint.type || key;
   const unit = Object.keys(cssUnits).find(unit =>
      cssUnits[unit].some(rx => rx.test(endpoint.type))
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

const convertEndpoint = (endpoint) => {
   // console.log(`\n`, `convertEndpointValue: check ${endpoint.type}`, `\n`);
   const cssProperty = Object.keys(cssValues)
   .find(props => props.split(",").map(s=>s.trim()).includes(endpoint.type));
   if (cssProperty) {
      // console.log(`cssProperty:`, cssProperty);
      const value = Object.keys(cssValues[cssProperty]).find(value => endpoint.value.toLowerCase().replace(/[\s-]/g, "") === value);
      
      if (value) return {...endpoint, value: cssValues[cssProperty][value] };
   }
   return endpoint;
};

export const getEndpointCss = (endpoint) => {
   // const endpointType = endpoint.type || key;
   // console.log(`\n`, `getEndpointCssValue: check ${endpoint.type}`, `\n`);
   let breakpoint, value;
   if (/[^:]+:[^:]+/.test(endpoint.value)) {
      [breakpoint, value] = endpoint.value.split(":");
   } else { value = endpoint.value }

   if (/^["'][^"']+["']$/.test(value)) {
      // quoted value -> return the same without quotes
      return {...endpoint, value: value.replace(/["']/g, "") }
   }

   if (!isNaN(Number(value))) value += getEndpointUnit(endpoint);
   const converted = convertEndpoint({...endpoint, value });
   return breakpoint ? {...converted, value: breakpoint + ":" + value } : converted;
}
