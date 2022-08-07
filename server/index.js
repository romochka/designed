import express, { response } from "express";
import reduceCSSCalc from "reduce-css-calc";
import cors from "cors";
import fxp from "fast-xml-parser";
const { XMLParser } = fxp;

const options = {
   ignoreAttributes: false,
   attributeNamePrefix: "@",
   allowBooleanAttributes: true,
};
const parser = new XMLParser(options);
const obj = parser.parse(`
<app>
<components>
   <Layout>
      some content
   </Layout>
</components>
<screens>
   <About>
      <Layout.instance>
         another content
      </Layout.instance>
   </About>
</screens>
</app>
`);

// console.log(`obj:`, JSON.stringify(obj, null, 2));

const PORT = process.env.PORT || 5000;

const app = express();

// const expr = "calc(176 / 401 * 100)%";
// const evaluated = reduceCSSCalc(expr, 1);
// console.log(evaluated);

app.use(cors());

app.get(`/api`, (req, res) => {
   res.json({ test: "test message" });
});

app.use(express.json());

app.post("/post", (request, response) => {
   const json = request.body;
   console.log(json);
   response.send(json);
});

app.listen(PORT, () => {
   console.log(`listening ${PORT}...`);
});
