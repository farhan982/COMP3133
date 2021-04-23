const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    hotel_id: {
        type: Number,
        required: true
      },
      hotel_name: {
        type: String,
        uppercase: true,
        required: true
      },
      street: {
        type: String,
        lowercase:true,
        required: true
      },
      city: {
        type: String,
        trim: true,
        required: true
      },
      postal_code: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      email: {
        type: String,
        required: true,
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
      },
      user_id: {
        type: Number
      },
      created: { 
        type: Date,
        default: Date.now,
        alias: 'createdAt'
      }

})



const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;