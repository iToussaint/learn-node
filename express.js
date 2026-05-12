const { response } = require("express");

const app = require("express")();

app.listen(3000);

app.get("/", (request, response) => {
  response.sendFile("./public/home.html", { root: __dirname });
});

app.get("/about/", (request, response) => {
  response.sendFile("./public/about.html", { root: __dirname });
});

app.get("/contact/", (request, response) => {
  response.sendFile("./public/contact.html", { root: __dirname });
});

app.use((request, response) => {
  response.sendFile("./public/404.html", { root: __dirname });
});

console.log("Hello worlddd");
