import express from "express";
import { model } from "./model.js";
let route = express.Router();

//  localhost:3000/title?title=car
route.get("/", async (req, res) => {
  let title = req.query.title;
  let data = await model.find({ title: title });
  console.log(data, title);
  res.send(data);
});

//   localhost:3000/title/false 
route.get("/:isDone", async (req, res) => {
  let params = req.params.isDone;
  let data = await model.find({ isDone: params });
  res.send(data);
});

export default route;
