import express from "express";
import foodRoute from "./routes/food.js";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hey there</h1>");
});

app.use("/food", foodRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
