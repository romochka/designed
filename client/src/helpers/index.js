export const ot = obj =>
   /^\[object (\w+)]$/
      .exec(Object.prototype.toString.call(obj))[1]
      .toLowerCase();

export function cl() {
   const classList = Array.prototype.slice
      .call(arguments)
      .filter((c) => c)
      .map((c) => {
         if (ot(c) === "object") {
            return Object.keys(c)
               // .map((key) => (c[key] === true ? key : false))
               .map((key) => (!!c[key] ? key : false))
               .filter((c) => c);
         }
         return c;
      })
      .flat(Infinity);

   // console.log(classList);

   return classList.length > 0 ? classList.filter((c) => c).join(" ") : null;
}
