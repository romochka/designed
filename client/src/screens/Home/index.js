import { useEffect } from "react";
import { toXML } from "jstoxml";
import { useTokens } from "../../providers/tokens";
import Button from "../../components/ui/button";
import Layout from "../../components/layout";

const Comp = () => {
   const tokens = useTokens();

   useEffect(() => {
      console.log(`tokens:`, tokens.color);
   }, [tokens]);

   useEffect(() => {
      const obj = {
         _name: "Story",
         _attrs: {
            instance: true,
         },
         _content: {
            Layout: "some layout",
         },
      };
      const xml = toXML(obj, { indent: "  " });

      console.log(`xml:`, xml);

      /* fetch("http://localhost:5000/post", {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(obj),
      }).then(res => {
         console.log(`response:`, res);
      }).catch(err => {
         console.log(`error:`, err);
      }); */
   }, []);

   return (
      <div>
         <Button>Test</Button>
      </div>
   );
};

export const Home = () => {
   const tokens = useTokens();

   console.log(tokens.composite.navbar);

   // const button = useTokens(`phone.light.composite.button`);

   // console.log(button);

   return <Layout>Home</Layout>;
};
