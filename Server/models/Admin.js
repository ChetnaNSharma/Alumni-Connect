const mongoose = require('mongoose')
const validator = require('validator')
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        unique: true, 
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    },
    college:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required: true,
        trim: true,
    },
    jobdetails:{
        type:String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error ("cannot contain password")
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
}, { 
    timestamps: true,
    default : Date.now
})


const Admin = mongoose.model('Admin', adminSchema) 
module.exports = Admin