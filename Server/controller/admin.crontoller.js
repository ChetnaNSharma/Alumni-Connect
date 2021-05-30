const asyncHandler = require('express-async-handler');
const User = require('../models/Student');
const welcomeMail = require("../utility/signup-mail-admin");
const responseHandler = require("../helpers/responseHandler");

// @desc    Get all users
// @route   GET /admin/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc    Get  user by Id
// @route   GET /admin/user/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json('User not found!!');
  }
});

const updateAdmin = async( req, res ) => {
  try{
    const user = User.findById(req.user.id);
    const updates = Object.keys(req.body);
    const allowedUpdates = ["Name", "email", "password"];
    const isValid = updates.every((update) => {
      return allowedUpdates.includes(update);
    });
    if(!isValid) {
      res.status(400).json(responseHandler(false, 400, "Invalid input", null));
    } try {
      updates.forEach((update) => {
        user[update] = req.body[update]
      });

      await user.save();
      const { _id, Name, email } = user;
      return res.status(200).json(responseHandler(true, 200, "Updated successfully", user));
    } catch (e) {
      res.status(400).json(responseHandler(false, 400, "Something went rong!", null));
    }

  } catch(e) {
    res.status(400).json(responseHandler(false, 400, "Something went rong!", null));
  }
};
if (data) {
  welcomeMail.signupMail(_user.firstName, _user.lastName, _user.email)
    return res
        .status(201)
        .json(
            responseHandler(
                true,
                201,
                "Admin Created Succesfully...!",
                { data }
            )
        );
}
module.exports = adminController = {
  getUsers,
  getUserById,
  updateAdmin
};