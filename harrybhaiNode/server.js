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
// Static file  access
import express, { json } from "express";
import { obj } from "./file.js";
import cors from "cors";
import router from "./routes/blog.js";
let app = express();

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.use(express.static("public"));

app.use("/blog", router);
app.get("/users", function (req, res) {
  console.log(req.query);

  res.send("Welcome to home page");
});

// app.get("/:reqParams", (req, res) => {
//   console.log(req.query);
//   res.send(`hello ${req.params.reqParams}`);
// });

// *****************************************************
// Post
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.post("/items", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({ data: `${JSON.stringify(req.body)}`, status: "successful" });
});

app.get("/api", (req, res) => {
  res.json(obj);
});

app.listen(3000, (e) => {
  console.log("listening", e);
});
