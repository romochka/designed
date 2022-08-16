export const rx = {
   ref: {
      has: /{[^}]+}/,
      hasOnlySingle: /^{[^}]+}$/,
      extract: /{([^}]+)}/g,
   },
   calc: {
      has: /[^\+\-\/\*]+[\+\-\/\*]\s*(\d|var\(|\()/,
   },
};

export const refpath = ref => {
   if (rx.ref.hasOnlySingle.test(ref)) return ref.replace(/[\{\}]/g, "");
   throw "refpath: not a ref";
};

export const splitRefs = str => {
   return str.split(rx.ref.extract);
};
