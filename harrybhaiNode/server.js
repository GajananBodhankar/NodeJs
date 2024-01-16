// import http from "http";

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {

//     res.write(index.html); // can not do this with http
//     res.end();
//   }

//   if (req.url == "/users") {
//     res.end("Users");
//   }
// });
// ****************************************************************************
import express from "express";
let app = express();
app.use(express.static("public"));

app.get("/name", function (req, res) {
  res.send("Welcome to home page");
});

app.get("/:reqParams", (req, res) => {
  console.log(req.query);
  res.send(`hello ${req.params.reqParams}`);
});

app.listen(3000, (e) => {
  console.log("listening", e);
});
