const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const VIEWS_PATH = __dirname + "/views/";

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(VIEWS_PATH + "index.html");
});

// Routes
app.use("/weapon", require("./routes/weapon.route"));

app.all("*", (req, res) => {
  res.sendFile(VIEWS_PATH + "page404.html");
});

const PORT = 5050;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
