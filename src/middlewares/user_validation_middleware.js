import { body, validationResult } from "express-validator";

// validation middleware
const validation = async (req, res, next) => {
  const { fname, lname, email, mobile, password } = req.body;

  // Define Rules
  const rules = [
    body("fname").notEmpty().withMessage("First Name is Required"),
    body("lname").notEmpty().withMessage("Last Name is Required"),
    body("email").notEmpty().isEmail().withMessage("Valid Email is Required"),
    body("mobile").notEmpty().withMessage("Valid Mobile Number is Required"),
    body("password").notEmpty().withMessage("Password Required"),
  ];

  try {
    console.log("Validation middleware executing...");
    await Promise.all(rules.map((rule) => rule.run(req)));
    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
      console.log("Validation successful. Proceeding to next middleware.");
      next();
    } else {
      console.log("Validation failed. Sending response with errors.");
      res.status(400).json({
        success: false,
        message: "Validation errors",
        validationErrors: validationErrors.array(),
      });
    }
  } catch (err) {
    console.error("Error in validation middleware:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error during validation",
    });
  }
};

export default validation;
