import express from "express";

let router = express.Router();

router.get("/", (req, res) => {
  res.send("You are in blog");
});



router.get("/cities", (req, res) => {
  res.send("You are in cities");
});

export default router;
