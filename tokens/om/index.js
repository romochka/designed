
export const ot = obj =>
   /^\[object (\w+)]$/
      .exec(Object.prototype.toString.call(obj))[1]
      .toLowerCase();

export const isInteger = obj => !isNaN(parseInt(obj)) && /^\d+$/.test(obj);

const mergeTopLevels = node =>
   Object.values(node).reduce((acc, value) => ({ ...acc, ...value }), {});

const convertToArrays = (node) => {
   if (ot(node) === "array") {
      console.log("array received:", node);
      return node.map(n => convertToArrays(n));
   }
   if (ot(node) === "object") {
      // console.log("object received:", JSON.stringify(node, null, 1));
      if (Object.keys(node).every(key => /^\d+$/.test(key))) {
         return Object.entries(node)
            .reduce((arr, [key, value]) => {
               arr[parseInt(key)] = convertToArrays(value);
               return arr;
            }, []);
      }
      const res = Object.fromEntries(
         Object.entries(node).map(([key, value]) => {
            return [key, convertToArrays(value)];
         })
      );
      // console.log(res);
      return res;
   }
   if (node === undefined) throw new Error("err");
   return node;
};

export const om = node => convertToArrays(mergeTopLevels(node));
