const fs = require("fs");
const path = require("path");

const JSON_DB = fs.readFileSync(path.join(__dirname, "data.json"), "utf-8");
const DB = JSON.parse(JSON_DB);

module.exports = DB;
