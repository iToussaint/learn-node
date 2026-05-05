import fs from "fs";

const readStream = fs.createReadStream("./docs/file.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./docs/file1.txt");

readStream.on("data", (chunk) => {
  console.log(chunk);
  writeStream.write(chunk)
});



// piping

readStream.pipe(writeStream)

// there is also duplex stream
