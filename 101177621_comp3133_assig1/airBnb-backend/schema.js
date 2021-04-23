const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
     hotel_id: ID!
     hotel_name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
     user_id: ID!
   }
   type User{
     user_id:ID!
     username:String!
     password:String!
     email:String!
   }
   type Booking {
    hotel_id:ID!
    user_id:ID!
    booking_date:String
    booking_start:String!
    booking_end:String!

   }

   type Query {
    hotel: [Hotel]
    hotelByID(hotel_id: ID!): Hotel
    hotelByCity(city: String!): [Hotel]
    user:[User]
    book:[Booking]
    
  }
  type Mutation {
    addHotel(
    hotel_id:ID!
    hotel_name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!):Hotel

     deleteHotel(hotel_id:ID!):Hotel

    addUser(
      user_id:ID!
      username:String!
      password:String!
      email:String!):User

      deleteUser(user_id:ID!):User

      addBooking(
        hotel_id:ID!
        user_id:ID!
        booking_date:String
        booking_start:String!
        booking_end:String!):Booking

      deleteBooking(user_id:ID!):Booking
  }
`