import fs from "fs";

const file = fs.readFile("README.md", (error, data) => {
  console.log(data.toString(), error);
});

