
export const rx = {
   refs: {
      has: /\{[^\}]+\}/,
      extract: /\{([^\}]+)\}/g
   }
};

export const rx0 = {
   containsRef: /{[^}]+}/,
   extractRefs: /{([^}]+)}/g,
   rgba: /\brgba\(/,
   alphaDec: /rgba\(\s*(#[A-Fa-f0-9]{6})\s*,\s*([\d\.]+)\)/,
   containsPx: /[\.\d]+\s*px/,
   extractPx: /([\.\d]+)\s*px/g,
   containsHexColor: /#[0-9A-Fa-f]{6}/,
   hexColorOnly: /^#[0-9A-Fa-f]{3,8}$/,
   calc: /[^\+\-\/\*]+[\+\-\/\*]\s*(\d|var\(|\()/,
   intOrFloat: /^[-+]?[0-9]*\.?[0-9]+$/
};
