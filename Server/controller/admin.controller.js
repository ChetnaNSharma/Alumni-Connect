const asyncHandler = require('express-async-handler');
const User = require('../models/Student');

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
// @desc    Delete user
// @route   DELETE /admin/user/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: 'User removed' });
  } else {
    res.status(404).json('User not found!!');
  }
});

// @desc    Update user
// @route   PUT /admin/user/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.email = req.body.email || user.email;
        user.password = req.body.password||user.password,
        user.contact = req.body.contact||user.contact
        user.branch = req.body.branch||user.branch,
        user.year = req.body.year||user.year,
        user.degree = req.body.degree||user.degree,
        user.instituteName = req.body.instituteName||user.instituteName,
        user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({title: updatedUser.title,
      email: updatedUser.email,
      password: updatedUser.password,
      contact: updatedUser.contact,
      branch: updatedUser.branch,
      year: updatedUser.year,
      degree: updatedUser.degree,
      instituteName: updatedUser.instituteName,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404).json('User not found!!');
  }
});
module.exports = adminController = {
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};