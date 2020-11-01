/* istanbul ignore file */
const {gql} = require('apollo-server');

const schema = gql`
  type Example {
    "A simple type for getting started!"
    world: String
  }

  type Query {
    hello: Example
  }

  type Mutation {
    exampleChange(id: Int!): Example
  }
`;

module.exports = schema;
