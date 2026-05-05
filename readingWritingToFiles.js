import fs from "fs";

fs.readFile("README.md", (error, data) => {
  console.log(data.toString(), error);
});

console.log("Hello worlddd");

fs.writeFile("README.md", "Helloo worlddd", () => {
  console.log("The file is written");
});
