const auth = require("../../middleware/auth");
const Login = require("./controllers/login");
const Register = require("./controllers/register");
const UserDashboard = require("./controllers/userDashboard");

const userRouter = require("express").Router();

userRouter.post("/register", Register);
userRouter.post("/login", Login);
userRouter.use(auth);
userRouter.get("/dashboard", UserDashboard);

module.exports = userRouter;
