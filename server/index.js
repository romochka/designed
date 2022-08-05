import express from "express";

const PORT = process.env.PORT || 5000;

const app = express();

app.get(`/api`, (req, res) => {
   res.json({ test: "test message" });
});

app.listen(PORT, () => {
   console.log(`listening ${PORT}...`);
});
