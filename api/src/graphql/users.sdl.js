export const schema = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    password: String!
    email: String!
    phone: String!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }

  input CreateUserInput {
    id: Int!
    firstName: String!
    lastName: String!
    password: String!
    email: String!
    phone: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    password: String
    email: String
    phone: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
