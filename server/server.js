const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Love', 'root', '19mU06_Or_[20-05', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Query {
    users: [User]
    findUser(username: String!): User
  }

  type Mutation {
    register(username: String!, password: String!): User
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      return await User.findAll();
    },
    findUser: async (_, { username }) => {
      return await User.findOne({ where: { username } });
    },
  },
  Mutation: {
    register: async (_, { username, password }) => {
      const user = await User.create({ username, password });
      return user;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

// Важливо! Додайте await server.start() перед server.applyMiddleware()
async function startApolloServer() {
  await server.start();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/graphql`);
  });
}

startApolloServer();

