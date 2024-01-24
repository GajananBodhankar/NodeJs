import mongoose from "mongoose";
import express from "express";
import { model } from "./model.js";
import route from "./routes.js";
import jwt from 'jsonwebtoken'
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
  try {
    let data = new model(req.body);
    let dbData = await model.find();
    let response = await model.insertMany(data);
    res.send({ success: true }).status(200);
  } catch (e) {
    res.send({ success: false, message: e.message });
  }
});

app.use("/title", route);

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
