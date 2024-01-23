import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: String,
  description: String,
  isDone: Boolean,
});

export const model = mongoose.model("list", schema);
