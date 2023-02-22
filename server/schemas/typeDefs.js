// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    }
type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
    }
type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
    }
type Query {
    me: User
    }
type Auth {
    token: ID!
    user: User
    }
`;

// export the typeDefs
module.exports = typeDefs;