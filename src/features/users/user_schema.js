import mongoose from "mongoose";
//  Defining schema for User
const userSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true, minLength: 8, maxLength: 25 },
  date: { type: Date, default: Date.now },
});

// Creating Model Of User Schema

const userModel = mongoose.model("User", userSchema);

export default userModel;
