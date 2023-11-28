const { gql } = require("apollo-server");

const typeDefs = gql`
type User {
id: ID!
name: String!
username: String!
age: Int!
nationality: Nationality
friends: [User!]
}
type Query {
users: [User!]!
user(id: ID!): User
}
input createUserInput {
name: String!
username: String!
age: Int = 20
nationality: Nationality = INDIA
}
type Mutation {
createUser(input: createUserInput!) : User
}
enum Nationality {
CANADA
BRAZIL
INDIA
GERMANY
CHILE
}
`;

module.exports = {typeDefs};