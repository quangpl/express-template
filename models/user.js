const UserSchema = require("../schemas/user");
const mongoose = require("mongoose");
const { Types } = require("mongoose");
const UserModel = mongoose.model("User", UserSchema);

UserModel.register = async ({ username, password }) => {
    const newUser = new UserModel({
      username,
      password
    });
    const res = await newUser.save();
    return res;
};


module.exports = UserModel;