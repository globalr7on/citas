const { ApolloServer } = require('apollo-server');

const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const conectarDB = require('./config/db');

conectarDB();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url})=> {
    console.log(`servidor listo en la url ${url}`);
})