export const getTokensByDeviceAndScheme = (tokens, device, scheme) =>
   Object.entries(tokens).reduce((tokens, [key, node]) => {
      if (key in device) {
         return device[key]
            ? {
                 ...tokens,
                 ...Object.entries(node).reduce((node, [key, child]) => {
                    if (key in scheme) {
                       return scheme[key] ? { ...node, ...child } : node;
                    }
                    return { ...node, [key]: child };
                 }, {}),
              }
            : tokens;
      }
      if (key in scheme) {
         return scheme[key] ? { ...tokens, ...node } : tokens;
      }
      return { ...tokens, [key]: node };
   }, {});
