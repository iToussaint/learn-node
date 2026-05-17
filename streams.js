// const readStream = fs.createReadStream("./docs/file.txt", {
//   encoding: "utf-8",
// });
// const writeStream = fs.createWriteStream("./docs/file1.txt");

// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeStream.write(chunk)
// });

// // piping

// readStream.pipe(writeStream)

// // there is also duplex stream

const buffer = new Buffer("Toussaint");

console.log(buffer.toJSON());

// console.log(buffer.from());

const fs = require("fs");

// add the object with encoding property set to utf-8, otherwise you will be receiving the buffer in hexadecimal instead of the real content and in that very object you can specify the chunk size which is by default 64kB in bytes
const readableStream = fs.createReadStream("./docs/file.txt", {
  encoding: "utf-8",
  highWaterMark: 1024,
});

const writeableStream = fs.createWriteStream("./fs.txt", { flags: "a" });

readableStream.on("data", (chunk) => {
  console.log(chunk);
  console.log("==================");

  writeableStream.write(chunk);
});
