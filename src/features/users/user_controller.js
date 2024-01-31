import dbConnection from "../../config/db_connection.js";
import UserModel from "./user_model.js";
import jwt from "jsonwebtoken";

// instantiating UserModel
const modelInstance = new UserModel();
export default class UserController {
  //   To register user in the database use below method
  register(req, res) {
    try {
      const { fname, lname, email, mobile, password } = req.body;
      let user = { fname, lname, email, mobile, password };
      let result = modelInstance.add(user);
      if (!result) {
        res
          .status(400)
          .json({ success: false, message: "Error creating a Record" });
      } else {
        res.status(201).json({
          success: true,
          message: "Record saved successfully",
          result: result,
        });
      }
    } catch (error) {
      console.error("Error while login:", error.message);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  async login(req, res) {
    try {
      let { email, password } = req.body;
      let credentials = { email, password };
      console.log("Login request with credentials:", credentials);

      let result = await modelInstance.isExist(credentials);
      console.log("Result from isExist:", result);

      if (result) {
        const token = jwt.sign(
          {
            userId: result._id,
            email,
          },
          "s1l3vrfi5h"
        );

        console.log("Generated token:", token);

        res.cookie("token", token, {
          secure: true,
          httpOnly: true,
          sameSite: "strict",
          expires: new Date(Date.now() + 60 * 60 * 1000),
        });

        res.status(200).json({
          success: true,
          message: "User logged in successfully",
          result: result,
          token,
        });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Invalid Email or Password" });
      }
    } catch (error) {
      console.error("Error while login:", error.message);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  logout(req, res) {
    res.cookie("token", null, {
      secure: true,
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(0),
    });
    res.status(200).json({
      success: true,
      message: "Logout Successfully",
    });
  }
}
