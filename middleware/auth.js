const jsonwebtoken = require("jsonwebtoken");
const auth = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.replace("Bearer ", "");
    const decoded = await jsonwebtoken.verify(
      accessToken,
      process.env.jwt_secret
    );
    req.user = decoded;
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: "Unauthorized",
    });
    return;
  }

  next();
};
module.exports = auth;
