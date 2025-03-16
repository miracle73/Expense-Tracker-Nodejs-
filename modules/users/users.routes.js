const Register = require("./controllers/register");

const userRouter = require("express").Router();

userRouter.post("/register", Register);

module.exports = userRouter;
