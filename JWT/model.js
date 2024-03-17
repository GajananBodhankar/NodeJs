import mongoose from "mongoose";

let schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let userModel = new mongoose.model("users", schema);

export default userModel;
