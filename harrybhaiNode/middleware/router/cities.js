import express from "express";
let router = express.Router();

router.use((req, res, next) => {
  console.log("In cities router middleware");
  next();
});

router.get("/", (req, res) => {
  res.send("IN the cities");
});

export default router;
