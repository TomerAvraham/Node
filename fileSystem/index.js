// import fs from "fs"
// const fs = require("fs");

// this is the old way
// fs.readFile("demo.txt", "utf8", (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log(data);
// });

// const textOutput = ` this txt was writing at ${new Date()}`;
// fs.writeFile("demo1.txt", textOutput, (error) => {
//   if (error) {
//     console.error(error);
//   }
// });

// function doSomething() {
//   try {
//     console.log("reading file in process");
//     const data = fs.readFileSync("demo.txt", "utf8");
//     console.log(data);
//     console.log("done reading");
//   } catch (error) {
//     console.log("error got catch");
//     console.log(error);
//   }
// }

// doSomething();

// fs.writeFileSync("demo.txt", "this file have new changes");

// write a script that create a txt file if doesn't exist, write in it your name if doesn't exist.
// 1. check if file exist - Done
// 2. if not - create file and write my name - Done
// 3. otherwise - read file - Done
// 4. check if name exist - Done
// 5. if not - add name to file
// 6. otherwise - print to user, name exist
const fs = require("fs");

const fileName = "demo.txt";
const name = "John";
const encoding = "utf8";

if (fs.existsSync(fileName)) {
  const data = fs.readFileSync(fileName, encoding);
  const isNameExist = data.toLowerCase().includes(name.toLowerCase());
  if (!isNameExist) {
    fs.appendFile(fileName, ` ${name}`, (err) => {
      console.log(err);
    });
  } else {
    console.log("all good mate, file and name exist");
  }
  console.log(isNameExist);
} else {
  fs.writeFileSync(fileName, name);
}

console.log(fs.readFile.toString());
