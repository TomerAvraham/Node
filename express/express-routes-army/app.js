const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const VIEWS_PATH = __dirname + "/views/";

console.log(path.join(VIEWS_PATH, "index.html"));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(VIEWS_PATH, "index.html"));
});

// Routes
app.use("/weapon", require("./routes/weapon.route"));

app.all("*", (req, res) => {
  res.sendFile(VIEWS_PATH + "page404.html");
});

const PORT = 5050;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
