import { body, validationResult } from "express-validator";

const validation = async (req, res, next) => {
  let { fname, lname, email, mobile, password } = req.body;
  // Define Rules
  const rules = [
    body(fname).notEmpty().withMessage("First Name is Required"),
    body(lname).notEmpty().withMessage("Last Name is Required"),
    body(email).notEmpty().isEmail().withMessage("Valid Email is Required"),
    body(mobile).notEmpty().withMessage("Valid Mobile Number is Required"),
    body(password).notEmpty().withMessage("Password Required"),
  ];

  // Run Rules
  await Promise.all(rules.map((rule) => rule.run(req)));
  const validationErrors = validationResult(req);

  if (validationErrors.isEmpty()) {
    next();
  } else {
    res.status(400).json({
      success: false,
      message: "Validation errors",
      validationErrors,
    });
  }
};

export default validation;
