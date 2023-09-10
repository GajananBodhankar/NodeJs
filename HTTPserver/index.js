const http = require("http");
const url = require("url");
const fs = require("fs");
const obj = fs.readFileSync("HTTPserver/users.json", "utf-8");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welcome to the hope page of application");
    res.end();
  } else if (req.url == "/home") {
    res.write("Welcome to home page");
    res.end();
  } else if (req.url == "/users") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(obj);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("Error");
    res.end();
  }
});

server.listen(3000, () => console.log("Port no 3000"));
