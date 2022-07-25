// import something from node modules
const express = require("express");

// import export from different files locations
module.exports = [1, 2, 3];
const name = require("file path");

module.exports = { first: 1, second: 2 };
const { first, second } = require("file path");
// import export from different files locations
