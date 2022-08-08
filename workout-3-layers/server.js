const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

dotenv.config();

app.use(bodyParser.json());

const workoutRoute = require("./routes/workoutRoute");
app.use("/workouts", workoutRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is up"));
