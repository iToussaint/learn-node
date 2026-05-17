const { error } = require("node:console");
const fs = require("node:fs");

fs.readFile("./fs.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

const contentSync = fs.readFileSync("./fs.txt", "utf-8");

console.log(contentSync);
