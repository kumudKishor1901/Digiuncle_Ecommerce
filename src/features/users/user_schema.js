import mongoose from "mongoose";
//  Defining schema for User
const userSchema = new mongoose.Schema({
  fname: { type: String, required: [true, "First Name Required"] },
  lname: { type: String, required: [true, "Last Name Required"] },
  email: {
    type: String,
    required: [true, "Email Required"],
    unique: true,
  },
  mobile: {
    type: String,
    required: [true, "mobile Number Required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password Required"],
    minLength: 8,
  },
  date: { type: Date, default: Date.now },
});

// Creating Model Of User Schema

const userModel = mongoose.model("User", userSchema);

export default userModel;
