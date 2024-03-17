import express from "express";
import userModel from "./model.js";
import jwt from "jsonwebtoken";
import { secretKey } from "./config.js";
let route = express.Router();

route.post("/login", async (req, res) => {
  if (req.body.username && req.body.password) {
    let data = await userModel.insertMany(req.body);
    if (data) {
      let token = jwt.sign({ username: req.body.username }, secretKey, {
        expiresIn: 10,
      });
      console.log(token);
      res.status(200).send({
        token: token,
      });
    }
  }
});

route.post("/verify", (req, res) => {
  if (req.body.username && req.body.token) {
    try {
      let result = jwt.verify(req.body.token, secretKey);
      if (result.username == req.body.username) {
        res.send({ success: true, message: "valid user" });
      }
    } catch (e) {
      res.send({
        success: false,
        message: "Invalid token or token expired",
        error: e,
      });
    }
  }
});

export default route;
