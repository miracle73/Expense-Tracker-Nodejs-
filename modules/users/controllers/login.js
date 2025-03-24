const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const Login = async (req, res) => {
  const usersModel = mongoose.model("users");
  const { email, password } = req.body;

  const getUser = await usersModel.findOne({
    email,
  });

  if (!getUser) throw "User not found";

  const comparePassword = await bcrypt.compare(password, getUser.password);

  if (!comparePassword) throw "User details is incorrect";
  const accessToken = await jsonwebtoken.sign(
    {
      name: getUser.full_name,
      id: getUser._id,
    },
    process.env.jwt_secret
  );

  res.status(200).json({
    status: "Success",
    message: "User logged in successfully",
    accessToken,
  });
};
module.exports = Login;
