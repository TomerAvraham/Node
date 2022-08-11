const fs = require("fs");
const DB = require("../data/DB");

const DATABASE_PATH =
  "C:/Users/97250/Desktop/INT/March 2022/Node/workout-3-layers/data/data.json";

const DB_KEY = Object.keys(DB);

module.exports = (dataName, newContent) => {
  if (!DB_KEY.includes(dataName)) {
    throw new Error(`Database don't have ${dataName}`);
  }
  DB[dataName] = newContent;
  const JSON_DB = JSON.stringify(DB);
  fs.writeFileSync(DATABASE_PATH, JSON_DB);
};
