const { response } = require("express");
const http = require("http");

const superHero = {
  firstName: "Bruce",
  lastName: "Wayne",
};

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(superHero));
});

server.listen(5000, () => {
  console.log("Server listenning...");
});
