let User = require('../models/Student');
var nodemailer = require('nodemailer');
const { pass } = require('../config');
const responseHandler = require("../helpers/responseHandler");
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
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        contact : req.body.contact,
        branch : req.body.branch,
        year : req.body.year,
        degree : req.body.degree,
        instituteName : req.body.instituteName,
        isAdmin: req.body.isAdmin,
        
  });

  newUser.tokens = user.tokens.concat({token:token})
  newUser.save()
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

//allow user to follow another user
const followUser = async( req, res) => {
  try{
      if( req.user._id === req.params.user_id){
          return res.status(405).json(responseHandler( false, 405, "Sorry, you made a follow request to yourself!", null))
      } 
      else{
          const user = await User.findById( req.user._id );
          if( user.following.includes(req.params.user_id)){
              return res.status(405).json(responseHandler( false, 405, "Already following", null))
          } 
          else{
          User.findByIdAndUpdate( req.params.user_id , {
              $push: {followers: req.user._id}
          },{
              new: true
          }, (err, result) => {
              if(err){
                  return res.status(400).json(responseHandler( false, 405, "Already following", null))
              }
          User.findByIdAndUpdate( req.user._id,{
              $push: {following: req.params.user_id}
          }, {
              new: true
          }).then((async (result) => {

              try{
                  const notification = new Notification({
                      notificationFor: req.params.user_id,
                      notificationBy: req.user._id,
                      notificationTitle: `${user.Name} started following you, their user id is ${user._id}!`,
                      followNotification: user._id,
                      status: "unread" 
                  }) 
  
                  await notification.save()
              }
              catch(e){
                  console.log(e)
                  return res
                  .status(400)
                  .json(
                      responseHandler
                      ( false, 
                        400, 
                        "Something went wrong", 
                        null 
                      )
                  );
              }

              const {role, _id, Name, email, following, followers} = result

              res.status(200).json(responseHandler(true, 200, "Followed!", {role, _id, Name, email, following, followers}));
          }))
      }) } }
        
  } catch (e) {
      console.log(e)
      return res.status(400).json(responseHandler( false, 400, "Something went wrong", null ));
  }

}
  
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
    const unfollowUser = async( req, res) => {
      try{
          if( req.user._id === req.params.user_id){
              return res.status(405).json(responseHandler( false, 405, "Action not allowed", null))
          } 
          else{
              const user = await User.findById( req.user._id );
              if( !user.following.includes(req.params.user_id)){
                  return res.status(405).json(responseHandler( false, 405, "You need to follow first", null))
              } 
              else{
              User.findByIdAndUpdate( req.params.user_id , {
                  $pull: {followers: req.user._id}
              },{
                  new: true
              }, (err, result) => {
                  if(err){
                      return res.status(400).json({error: err})
                  }
              User.findByIdAndUpdate( req.user._id,{
                  $pull: {following: req.params.user_id}
              }, {
                  new: true
              }).then(result => {
                  res.status(200).json(responseHandler(true, 200, "Unfollow done", result));
              })
          }) } }
            
      } catch (e) {
          return res.status(400).json(responseHandler( false, 400, "Something went wrong", null ));
      }
  
  }
  
  
  module.exports = {fetchAllUsers,
    fetchUserByEmail,
    followUser,
    addNewUser,
    updateUser,
    deleteUser,
    sendEmail,
  unfollowUser};