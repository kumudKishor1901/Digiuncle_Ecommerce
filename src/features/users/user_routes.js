import express from "express";
import UserController from "./user_controller.js";
import userCheck from "../../middlewares/user_check_middleware.js";
import validation from "../../middlewares/user_validation_middleware.js";
import auth from "../../middlewares/auth_middleware.js";

const userController = new UserController();

const userRouter = express.Router();
// Adding a user in the Database
userRouter.post("/register", validation, userCheck, userController.register);
userRouter.post("/login", userController.login);

userRouter.get("/home", auth, (req, res) => {
  res.status(200).json({
    success: true,
    message: "welcome to home page",
  });
});

userRouter.get("/logout", userController.logout);
export default userRouter;
