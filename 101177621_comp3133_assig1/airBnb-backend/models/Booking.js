const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    hotel_id: {
        type: Number,
        required: true,
        ref:'Hotel'
      },
      booking_date: {
          type:String,
          required: true
      },
      booking_start: {
          type: String,
          required:true
      },
      booking_end: {
        type: String,
        required:true
      },
      user_id: {
        type: Number,
        required: true,
        ref:'User'
      }
      
})

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;