import { gql } from 'apollo-server';

// A schema is a collection of type definitions that together define the shape of queries
// that are executed against your data.
export const typeDefs = gql`
  type Query {
    hello: String
  }
`;
