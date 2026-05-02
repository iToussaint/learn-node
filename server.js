import http from "node:http";

console.log("Hello worlddd");

const server = http.createServer((request, response) => {
  response.write("Hello from the server!!!!");
  response.end();
});

server.listen(8000, () => console.log("The server is runninggg"));
