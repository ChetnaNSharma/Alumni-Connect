let User = require('../models/user.model');
var nodemailer = require('nodemailer');
const { pass } = require('../config');
// Fetch All Users from the DB
const fetchAllUsers = (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
};

// Fetch a user document based on the email passed
const fetchUserByEmail = (req, res) => {
  User.findOne({ email: req.params.email })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
};

// Add new user document to db
const addNewUser = (req, res) => {
  const newUser = new User({
    name = req.body.name,
        email = req.body.email,
        password = req.body.password,
        contact = req.body.contact,
        branch = req.body.branch,
        year = req.body.year,
        degree = req.body.degree,
        instituteName = req.body.instituteName,
        isAdmin: req.body.isAdmin,
        
  });

  newUser
    .save()
    .then(() => {
      res.json('User added!');
    })
    .catch(err => {
      console.log(err);
      res.status(400).json('Error: ' + err);
    });
};
// Update existing user document to the db
const updateUser = (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.email = req.body.email,
        user.password = req.body.password,
        user.contact = req.body.contact,
        user.branch = req.body.branch,
        user.year = req.body.year,
        user.degree = req.body.degree,
        user.instituteName = req.body.instituteName,
        user.isAdmin = req.body.isAdmin;
  
        user
          .save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  };
  
  // Delete existing user document on basis of ID
  const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json('Profile deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  };
  
  // Emailer
  const sendEmail = (req, res) => {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'xyz@gmail.com',
          pass: `${pass}`,
        },
      });
    
      let mailOptions;
    
      if (req.params.c == 1) {
        mailOptions = {
          from: 'xyz@gmail.com',
          to: req.params.email,
          subject: 'Alumni-Connect.com',
          text:
            'Greetings from Alumni-connect.com !!. We are glad to see you and will try to serve our great and best services to you. \n\nThanks and regards  ',
        };
      }
    
      if (req.params.c == 2) {
        mailOptions = {
          from: 'xyz@gmail.com',
          to: req.params.email,
          subject: 'Alumni-connect.com',
          text:
            'It is very disheartening to see you leave. We hope that you liked our service and would come back again. \n\nThanks and regards',
        };
      }
    
      transporter.sendMail(mailOptions, function (error) {
        if (error) {
          res.status(400).json('Error: ' + error);
        } else {
          res.json('Email sent!');
        }
      });
    };
  module.exports = {fetchAllUsers,
    fetchUserByEmail,
    addNewUser,
    updateUser,
    deleteUser,
    sendEmail,};