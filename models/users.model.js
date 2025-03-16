const mongoose = require("mongoose");

const usersModel = mongoose.model("users", usersSchema);
module.exports = usersModel;
