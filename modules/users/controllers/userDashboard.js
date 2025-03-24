const mongoose = require("mongoose");
const UserDashboard = async (req, res) => {
  const usersModel = mongoose.model("users");
  const getuser = await usersModel
    .findOne({
      _id: req.user.id,
    })
    .select("-password");
  console.log(getuser, req.user);
  res.status(200).json({
    status: "Success",
    data: getuser,
  });
};
module.exports = UserDashboard;
