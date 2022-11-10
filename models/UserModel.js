const mongoose = require("mongoose");
const jwt=require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
       required:true,
       maxlength:32,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
    },
    
    role:{
        type:String,
        default:"Admin",
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },
});

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_TOKEN, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };

  
module.exports = mongoose.model("User",userSchema);