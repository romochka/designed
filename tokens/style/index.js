import { mo, ot } from "../om/index.js";
import { styles } from "./styles.js";

const textNodeKeys = [
   "fontFamily", "fontWeight", "lineHeight", "fontSize",
   "letterSpacing", "textTransform", "textDecoration", // standard
   "textCase", "paragraphSpacing", "typography", // figma tokens plugin
];

const isToken = node => Object.values(node);

export const stylize = node => {

   // preserve getters
   const clone = Object.create(
      Object.getPrototypeOf(node),
      Object.getOwnPropertyDescriptors(node)
   );

   styles.forEach(([key, fn]) => {

      let style;

      if (key.every(k => clone.hasOwnProperty(k))) {
         style = fn(key.map(k => clone[k]), textNodeKeys.some(k => clone.hasOwnProperty(k)));
         key.forEach(k => { delete clone[k] });
      }

      if (style) Object.entries(style).forEach(([key, value]) => {
         clone[key] = value;
      });

   });

   return clone;

};

export const stylizeAll = node => mo(node, node => {

   if (ot(node) === "object") {
      return stylize(node);
   }

   return node;

});
