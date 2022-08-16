export const rx = {
   ref: {
      has: /{[^}]+}/,
      hasOnlySingle: /^{[^}]+}$/,
      extract: /{([^}]+)}/g,
   },
   calc: {
      has: /[^\+\-\/\*\s]+\s*[\+\-\/\*]\s*[^\+\-\/\*\s]+/,
   },
};

export const refpath = ref => {
   if (rx.ref.hasOnlySingle.test(ref)) return ref.replace(/[\{\}]/g, "");
   throw "refpath: not a ref";
};

export const splitByRefs = expression => {
   return expression.split(/({[^}]+})/,).filter(s=>s);
};
