import jwt from "jsonwebtoken";
const auth = (req, res, next) => {
  let token = req.header["authorization"];
  console.log(token);
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Unauthorized Access",
    });
  }
  try {
    const payLoad = jwt.verify(token, "s1l3vrfi5h");
    next();
  } catch (err) {
    console.log("error in header token:", err);
  }
};
export default auth;
