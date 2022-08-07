
export async function getData() {
   const data = await fetch("http://localhost:5000/api")
      .then(res => {
         console.log(`resolve response:`, res);
         return res.json ? res.json() : res.text();
      })
      .then(res => {
         if (typeof res === "string") return JSON.parse(res);
         return res;
      })
      .catch(err => {
         console.log(`error:`, err);
      });
   /* let t : number;
   const p = new Promise((resolve) => {
      clearTimeout(t);
      t = setTimeout(() => {
         resolve(data);
      }, 1500);
   }); */
   return data;
}
