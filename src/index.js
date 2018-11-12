import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { augmentSchema } from "neo4j-graphql-js";
import { v1 as neo4j } from "neo4j-driver";
import { ApolloServer, makeExecutableSchema } from "apollo-server";
import { printSchema } from "graphql";

const schema = augmentSchema(makeExecutableSchema({ typeDefs, resolvers }));

const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("api-server", "api-server")
);

const server = new ApolloServer({ schema, context: { driver } });

server.listen(3003, "0.0.0.0").then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`);
});
