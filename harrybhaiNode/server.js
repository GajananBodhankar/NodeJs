// const http = require("http");
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write('"Hello from node js"');
    res.end();
  }

  if (req.url == "/users") {
    res.end("Users");
  }
});
(function (exports, module, require, __filename, __dirname) {
  console.log("hi");
})();

server.listen(3000, (e) => {
  console.log("listening", e);
});
