const nodemailer = require("nodemailer");

const signupMail = async ( Name, email) => {


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        auth: {
            user: 'xyz@gmail.com',
            pass: `${pass}`,
          },
    }
});

const options = {
    from: "Alumni-Connect",
    to: email,
    subject:"Welcome to Alumni-connect",
    html:`Hello Admin! Welcome to Alumni-Connect! ${Name}! `
};

transporter.sendMail(options, function( err, info ) {
    if(err){
        console.log(err);
        return;
    }
    console.log("Sent:" + info.response)
})

}
module.exports = welcomeMail = {
    signupMail
};