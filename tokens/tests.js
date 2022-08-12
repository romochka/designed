
const d = {
   color: {
      raw: {
         coolGray: {
            value: "#8F9397",
            type: "color",
            description: "button surface",
         },
         creamy: {
            value: "#FBFAF5",
            type: "color",
         },
         greenishBlack: {
            value: "#12241F",
            type: "color",
         },
      },
      get coolGray() { return this.raw.coolGray.value },
      get creamy() { return this.raw.creamy.value },
      get greenishBlack() { return this.raw.greenishBlack.value },
   },
};

const fb = node => {
   return node;
};

const f = node => {
   const fbNode = {
      source: node,
   };
   const keys = Object.keys(node);
   keys.forEach(key => {
      Object.defineProperty(fbNode, key, {
         get() {
            return fb(this.source[key]);
         },
      });
   });
   return fbNode;
};

// const fbNode = f(d);

const handler = {
   get(target, prop, receiver) {
      console.log(`prop requested:`, prop);
      return target[prop];
   },
};

const proxy = new Proxy(d, handler);

/* console.log(
   `tree with getters:`,
   util.inspect(fbNode, { getters: true, showHidden: true, depth: 100 })
); */

console.log(proxy.color.creamy);
