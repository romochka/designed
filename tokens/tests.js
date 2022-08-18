import { isGetter, mo, ot } from "./om/index.js";
import lodash from "lodash";
const { camelCase, merge } = lodash;
import util from "util";
const inspect = node =>
   util.inspect(node, { showHidden: true, getters: true, depth: 25 });

import { tokens } from "./tokens.js";
import { injectGetters } from "./om/getters.js";
import { resolveRefsInExpressionString } from "./resolve0/refs.js";
import { stylize } from "./style/index.js";

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

// console.log(`tokens.phone.light.composite.button.action:`, inspect(tokens.phone.light.composite.button.action));

// console.log(`tokens.phone.light.composite.button.action.active:`, inspect(tokens.phone.light.composite.button.action.active));

// console.log(`tokens.phone.typography.ui:`, inspect(tokens.phone.typography.ui));

// console.log(`spread obj w/getters:`, {...tokens.phone.typography.ui.sm});

console.log(`tokens:`, util.inspect(tokens, { depth: 20, showHidden: false }));

// const refString = tokens.phone.light.composite.button.action.default[0].borderRadius;

// console.log(`ref string:`, refString);

// console.log(`resolveRefExpressionString:`, resolveRefsInExpressionString(refString, tokens));

/* const resolvedNode = {
   fill: "red",
   verticalPadding: "9px",
   horizontalPadding: "16px",
   paddingRight: "20px",
   // fontSize: "12px",
};

const stylized = stylize(resolvedNode);

console.log(inspect(stylized)); */

const a = {
   light: {
      colors: {
         paper: "gray",
         ink: "dark"
      }
   },
   dark: {
      colors: {
         ink: "light"
      }
   }
};

const m =  merge(
   a.light,
   a.dark
);

console.log(m);

const tabs = x => ({x});

tabs`📱🔆`;

const style = {
   ...tabs`
      button action
   `
}

console.log(style);