const mongoose = require('mongoose')
const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types;

const studentSchema = new mongoose.Schema({
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
    contact:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required: true,
        trim: true,
    },
    year:{
        type:String,
        required: true,
        trim: true,
    },
    degree:{
        type:String,
        required: true,
        trim: true,
    },
    institutionName:{
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
    following: [{
        type: ObjectId,
        ref: "User"
    }],
    followers: [{
        type: ObjectId,
        ref: "User"
    }],
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


const Student = mongoose.model('Student', studentSchema) 
module.exports = Student