import multer from "multer";
import connection from "./ds.js";
import express from "express";
import cors from "cors";
import multerModel from "./model.js";
import path from "path";
let app = express();
let Port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: "*",
  })
);
let uploadstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
let upload = multer({
  storage: uploadstorage,
});

app.post(
  "/",
  upload.fields([
    { name: "name", maxCount: 10 },
    { name: "image", maxCount: 10 },
  ]),
  async (req, res) => {
    let data = new multerModel({
      name: req.body.name,
      image: req.files.image[0].filename,
    });
    try {
      let response = await multerModel.insertMany(data);
      if (response.length > 0) {
        res.send({
          message: "file uploaded",
          response: response[0]._id,
        });
      }
      console.log(response);
    } catch (error) {
      res.send({ message: "failed", success: false });
    }
  }
);

app.get("/get", (req, res) => {
  res.send({ name: "max", success: true });
});

app.listen(Port, () => {
  console.log("listening to port", Port);
});
