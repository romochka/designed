import { isGetter, mo, ot } from "./om/index.js";
import lodash from "lodash";
const { camelCase } = lodash;
import util from "util";
const inspect = node =>
   util.inspect(node, { showHidden: true, getters: true, depth: 25 });

import { tokens } from "./tokens.js";
import { injectGetters } from "./om/getters.js";
import { resolveRefsInExpressionString } from "./om/resolve/refs.js";

console.log(`%---------------------- RESTART -----------------------`);

const node0 = {
   light: {
      color: {
         coolGray: {
            value: "#8F9397",
            type: "color",
            description: "button surface",
         },
         description: "comment",
         creamy: {
            value: "#FBFAF5",
            type: "color",
         },
         greenishBlack: {
            value: "#12241F",
            type: "color",
         },
      },
   },
   button: {
      value: "super button",
      type: "test",
   },
};


const obj = {
   _a: 7,
   get a() {
      return this._a;
   },
   get b() {
      return this.a;
   },
};


// console.log(obj.a.b);

// console.log(`res:`, Object.keys(t.color));

// console.log(t.color.creamy);

// const secpass = mo(t, node=>node);

// console.log(`second pass:`, inspect(secpass));




// console.log("-----------------------");
// console.log(`inspect:`, inspect(tokens.phone.light.composite.button.action.default));

// console.clear();

// console.log(`tokens.light.colors.button.action.default:`, inspect(tokens.light.colors.button.action));

console.log(`tokens.phone.light.composite.button.action:`, inspect(tokens.phone.light.composite.button.action.default[0]));

// console.log(`tokens.light.colors.button.action.default:`, inspect(tokens.light.colors.button.action));

// const refString = tokens.phone.light.composite.button.action.default[0].borderRadius;

// console.log(`ref string:`, refString);

// console.log(`resolveRefExpressionString:`, resolveRefsInExpressionString(refString, tokens));
