import mongoose from "mongoose";

let schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

let multerModel = new mongoose.model("images", schema);

export default multerModel;
