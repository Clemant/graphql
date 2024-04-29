const { ApolloServer } = require("apollo-server");
const Resolver = require("./src/resolvers/Query");
require("dotenv").config();
console.log(process.env);

let url = process.env.URL;
console.log(url);

//console.log(test)
const Aliment = require("./src/schema/Aliments");
//const Nutrition = require('./src/schema/Nutrition');
//const Season = require('./src/schema/Season');

// const server = new ApolloServer({ typeDefs:[Aliment,Nutrition,Season], resolvers: [Resolver] });

const server = new ApolloServer({ typeDefs: [Aliment], resolvers: [Resolver] });
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
