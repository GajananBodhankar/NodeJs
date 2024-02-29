import mongoose from "mongoose";

let connection = await mongoose.connect("mongodb://localhost:27017/Multer");
console.log("Database connected");
export default connection;
