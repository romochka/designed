import { useEffect, useState } from "react";

function App() {
   const [data, set] = useState();

   useEffect(() => {
      fetch(`/api`).then(res => res.json()).then(data => { set(data) });
   }, []);

   return (
      <div>{data ? data.test : "..."}</div>
   );
}

export default App;
