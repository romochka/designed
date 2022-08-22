import { isEndpoint } from "../resolve/endpoints.js";
import { findNext, findPrev, mo } from "./index.js";
import { rx } from "./rx.js";


export const createBreakpoints = (node, breakpoints) => {

   const breakpointValues = breakpoints
   .map((key) => isEndpoint(node.breakpoints[key]) && Number(node.breakpoints[key].value))
   .map((value, index, self) => {
      if (value !== undefined) return value;
      const prev = findPrev(self, index, v => v!==undefined);
      if (prev !== undefined) return prev;
      const next = findNext(self, index, v => v!==undefined);
      return next;
   });

   console.log(`breakpoint units:`, breakpointValues);


   return mo(node, (node, path) => {
      if (path === "breakpoints") {
         return breakpoints.reduce((child, key, index) => ({
            ...child,
            [key]: { value: breakpointValues[index], type: "unit" }
         }), {});
      }
      if (isEndpoint(node)) {
         if (/\{breakpoint\.[^\}]+\}/.test(node.value)) {
         // expand endpoints with expressionsh {breakpoint.device} to arrays {breakpoints.xs}...{breakpoints.xxl}
            return breakpoints.map(key => ({
               ...node,
               value: node.value.replace(/\{breakpoint\.[^\}]+\}/g, `{breakpoints.${key}}`),
            }))
         }
      }
      return node;
   });

};

export const isBreakpointRef = ref => rx.breakpoint.pass.test(ref);

export const getBreakpointName = ref => [...ref.match(rx.breakpoint.extract)][1];
