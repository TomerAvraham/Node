const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let userGoal = "learn NodeJS";

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`<html>
    <head>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <section>
        <h2>Set Your Goal</h2>
        <h6>${userGoal}</h6>
    </section>
    <form action="/set-goal" method="POST" >
        <input type="text" name="goal" />
        <button type="submit" >Set Goal</button>
    </form>
    </body>
  </html>`);
});

app.post("/set-goal", (req, res) => {
  userGoal = req.body.goal;
  res.redirect("/");
});

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
