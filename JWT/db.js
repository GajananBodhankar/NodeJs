import mongoose from "mongoose";
let connect = await mongoose.connect("mongodb://localhost:27017/GajananDB");
console.log("connected to db");
export default connect;
