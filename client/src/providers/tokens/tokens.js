import { mo, ot } from "../../helpers";

export const getTokensByMedia = (tokens, device, scheme, breakpoint) => {

   const node = Object.entries(tokens).reduce((tokens, [key, node]) => {
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
