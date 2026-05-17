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

fs.writeFileSync("./writeSync.txt", " and append instead of overriding", {
  flag: "a",
});

fs.writeFile(
  "./docs/writeAsync.txt",
  " that is inside a folder",
  { flag: "a" },
  (error) => {
    if (error) {
      console.log(error);
    }
  },
);
