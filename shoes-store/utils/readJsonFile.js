const fs = require("fs");

function readJsonFile(filePath) {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

module.exports = readJsonFile;
