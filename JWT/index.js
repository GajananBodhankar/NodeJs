import express from "express";
import route from "./Router.js";
import connect from "./db.js";
import cors from "cors";
let app = express();
let port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api/auth", route);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
