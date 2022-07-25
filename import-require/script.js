// // import something from node modules
// import express from "express";

// // import export from different files locations
// export default [1, 2, 3];
// import name from "file path";

// export const p = { first: 1, second: 2 };
// import p from "file path";
// import { first, second } from "file path";
// // import export from different files locations

import connect from "./connectToDb.mjs";

console.log("try to connect");

const r = await connect();
console.log(r);

console.log("done");
