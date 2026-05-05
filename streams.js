import fs from "fs";

const readStream = fs.createReadStream("./docs/file.txt", {encoding: 'utf-8'});

readStream.on("data", (chunk) => {
  console.log(chunk);
});
