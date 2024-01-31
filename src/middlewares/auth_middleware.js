import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized Access - Token not provided",
    });
  }

  try {
    const payload = jwt.verify(token, "s1l3vrfi5h");

    // Check if the payload exists and has the necessary data
    if (payload && payload.userId) {
      // Attach the payload to the request for use in subsequent middleware/routes
      req.user = payload;
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "Unauthorized Access - Invalid token payload",
      });
    }
  } catch (err) {
    console.error("Error in authentication middleware:", err);
    return res.status(401).json({
      success: false,
      message: "Unauthorized Access - Invalid token",
    });
  }
};

export default auth;
