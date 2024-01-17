import express from "express";
import router from "./router/cities.js";
let app = express();
// first middleware
app.use((req, res, next) => {
  console.log("In middleware one");
  req.name = "I am gajanan";

    // res.send("overriding response");
  //   Unless next() is called, the control stays in middleware one
  next();
});
// Error middleware
app.use((err, req, res, next) => {
  console.log("hi");
  next();
});

// Router level middleware
app.use("/cities", router);

app.get("/", (req, res) => {
  res.send("Learning middleware " + req.name);
});

app.listen(3000, () => {
  console.log("Listening to ", 3000);
});
