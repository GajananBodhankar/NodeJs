import mongoose from "mongoose";
import express from "express";
import { model } from "./model.js";
let app = express();
let con = await mongoose.connect("mongodb://localhost:27017/Sigma");
if (con) {
  console.log("Connection Successful");
}

app.get("/", async (req, res) => {
  let data = new model({
    title: "Eat",
    description: "Eat lunch",
    isDone: false,
  });
  let response = await model.insertMany(data);

  res.send({ response });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
