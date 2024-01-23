import mongoose from "mongoose";
import express from "express";
import { model } from "./model.js";
import route from "./routes.js";
let app = express();
let con = await mongoose.connect("mongodb://localhost:27017/Sigma");
if (con) {
  console.log("Connection Successful");
}
app.use(express.json());
app.get("/", async (req, res) => {
  let data = await model.find();
  res.send(data);
});

app.post("/users", async (req, res) => {
  let data = new model(req.body);
  let dbData = await model.find();
  if (dbData.every((i) => i.title != data.title)) {
    let response = await model.insertMany(data);
    if (response[0]._id) {
      res.send({ success: true }).status(200);
    }
  } else {
    res.send({ success: false, message: "Title already exists" });
  }
  console.log(dbData);
});

app.use("/title", route);

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
