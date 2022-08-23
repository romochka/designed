import { mo, ot } from "../../helpers";

export const getTokensByMedia = (tokens, devices, schemes, breakpoint) => {

   const node = Object.entries(tokens).reduce((tokens, [key, node]) => {
      if (key in devices) {
         return devices[key]
            ? {
                 ...tokens,
                 ...Object.entries(node).reduce((node, [key, child]) => {
                    if (key in schemes) {
                       return schemes[key] ? { ...node, ...child } : node;
                    }
                    return { ...node, [key]: child };
                 }, {}),
              }
            : tokens;
      }
      if (key in schemes) {
         return schemes[key] ? { ...tokens, ...node } : tokens;
      }
      return { ...tokens, [key]: node };
   }, {});


   return mo(node, node => {
      if (Array.isArray(node)) {
         // console.log("node is array:", node);
         if (
            node.every(
               child =>
                  ot(child) === "string" &&
                  /[^:]+:[^:]+/.test(child)
            )
         ) {
            // console.log(`node contains array of breakpoints`);
            return (
               node.find(
                  child =>
                     child.indexOf(`${breakpoint}:`) === 0
               )?.split(":")[1] || node
            );
         }
      }
      return node;
   });

};
