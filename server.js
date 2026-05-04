/*
Challenge: 

1.Set up a server that serves the string 
    '<html><h1>The server is working</h1></html>'.
    
    What should the content type be? 
    What status code should you send?

2. Listen on port 8000 and log a connection message to the console.

3. Open the browser to see your first served HTML.

*/

import http from "node:http";

const server = http
  .createServer((request, response) => {
    response.statusCode = 301;
    response.setHeader("Content-Type", "text/html");
    response.write("<html><h1>The server is working</h1><html>");
    response.end();
  })
  .listen(8000, () => {
    console.log("Server running");
  });


  console.log(__dirname)