import { ApolloServer } from "@apollo/server";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

let server = new ApolloServer({ typeDefs, resolvers });

await server.start();

export default server;
