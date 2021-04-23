const express = require('express');
const mongoose = require('mongoose');
const TypeDefs = require('./schema');
const Resolvers = require('./resolvers');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const dotenv = require('dotenv');
dotenv.config();

const url = process.env.MONGODB_URL;

const connect = mongoose.connect(url, 
    { 
          useNewUrlParser: true,
          useUnifiedTopology: true
    });

    connect.then((db) => {
        console.log('Connected successfully to server!');
  }, (err) => {
        console.log(err);
  });

  //Define Apollo Server
const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers
});

//Define Express Server
const app = express();
app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });
app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`));
