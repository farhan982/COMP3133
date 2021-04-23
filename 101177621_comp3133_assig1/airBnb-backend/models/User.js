const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
      user_id: {
        type: Number,
        required: true
      },
      username:{
        type: String,
        unique:true,
        required:true,
        trim: true,
        lowercase: true

      },
      password:{
          type: String,
          required: true

      },
      email: {
        type: String,
        required: [true,"need your email"],
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
      },
      created: { 
        type: Date,
        default: Date.now,
        alias: 'createdAt'
      }
})



const User = mongoose.model("User", UserSchema);
module.exports = User;