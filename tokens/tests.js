import { isGetter, mo, ot } from "./om/index.js";
import lodash from "lodash";
const { camelCase } = lodash;
import util from "util";
const inspect = node =>
   util.inspect(node, { showHidden: true, getters: true, depth: 25 });

import { tokens as imported } from "./tokens-exported.js";
import { injectGetters } from "./om/getters.js";
import { resolveRefsInExpressionString } from "./om/resolve/refs.js";

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


const tokens = injectGetters(imported);

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
// console.log(`inspect:`, inspect(tokens.phone.light.composite.button.action.default[0].borderRadius));

const refString = tokens.phone.light.composite.button.action.default[0].borderRadius;

console.log(`ref string:`, refString);

// console.log(`resolveRefExpressionString:`, resolveRefsInExpressionString(refString, tokens));
