import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  description: String,
  isDone: Boolean,
});

export const model = mongoose.model("list", schema);
