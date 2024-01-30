import userModel from "../features/users/user_schema.js";
import UserModel from "../features/users/user_model.js";

const modelInstance = new UserModel();

const userCheck = async (req, res, next) => {
  try {
    const { email, mobile } = req.body;
    const data = { email, mobile };

    // isExist returns a boolean
    const userExists = await modelInstance.isExist(data);

    if (userExists) {
      res.status(200).json({
        success: false,
        message: "User Record Already Exists",
        result: userExists, // You might want to return additional information about the existing user
      });
    } else {
      next();
    }
  } catch (error) {
    console.error("Error in userCheck middleware:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export default userCheck;
