const Booking = require('./models/Booking');
const Hotel = require('./models/Hotel');
const User = require('./models/User');


exports.resolvers ={
    Query: {
        hotel: async (parent, args) => {
            return await Hotel.find({});
        },
        hotelByID: async (parent, args) => {
            return await Hotel.findById(args.id);
        },
        hotelByCity: async (parent, args) => {
            return await Hotel.find({"city" : args.city});
        },
        user: async (parent, args) => {
            return await User.find({});
        },
        book: async (parent, args) => {
            return await Booking.find({});
        },
        
    },
    Mutation:{
        addHotel: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())

            if(!isValidEmail){
                throw new Error("email not in proper format")
            }

            let newHotel = new Hotel({
                hotel_id: args.hotel_id,
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email
            });

            return await newHotel.save();   
        },
        deleteHotel: async (parent, args) => {
            console.log(args)
            if (!args.hotel_id){
                return JSON.stringify({status: false, "message" : "No ID found"});
            }
            return await Hotel.findByIdAndDelete(args.hotel_id)
          },
          addUser: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())

            if(!isValidEmail){
                throw new Error("email not in proper format")
            }
            let newUser = new User({
                user_id: args.user_id,
                username: args.username,
                password: args.password,
                email: args.email
            });
            return await newUser.save();
        },
        addBooking: async(parent,args) => {
            let newBooking = new Booking({
                hotel_id: args.hotel_id,
                booking_date:args.booking_date,
                booking_start:args.booking_start,
                booking_end:args.booking_end,
                user_id: args.user_id
            });
            return await newBooking.save();

        }
    }

}