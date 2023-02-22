const { User } = require('../models/');

const resolvers = {
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            return await User.create({ username, email, password });
          },
      }
  };
  
  module.exports = resolvers;