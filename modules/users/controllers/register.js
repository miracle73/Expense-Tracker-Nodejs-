const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const Register = async (req, res) => {
  const usersModel = mongoose.model("users");

  const { email, full_name, password, confirm_password } = req.body;
  if (!full_name) throw "Name is required";
  if (!email) throw "Email is required";
  if (!password) throw "Password is required";
  if (password < 5) throw "Password is short";
  if (!confirm_password || password != confirm_password || confirm_password < 5)
    throw "Password was not confirmed";
  const duplicateEmail = await usersModel.findOne({
    email,
  });
  if (duplicateEmail) throw "This email already exists";
  const hashedPassword = await bcrypt.hash(password, 12);
  const createdUser = await usersModel.create({
    email,
    full_name,
    password: hashedPassword,
    balance: 0,
  });
  const accessToken = await jsonwebtoken.sign(
    {
      name: createdUser.full_name,
      id: createdUser._id,
    },
    process.env.jwt_secret
  );

  res.status(200).json({
    status: "Success",
    message: "User registered successfully",
    accessToken,
  });
};
module.exports = Register;
