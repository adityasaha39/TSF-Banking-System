const mongoose = require("mongoose");
const User = require("../models/user.model");

const getAllUser = async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send(allUser);
  } catch (error) {
    res.status(404).send({
      code: 404,
      message: "Unable to fetch all user",
    });
  }
};

module.exports = { getAllUser };
