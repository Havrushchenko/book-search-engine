const { User } = require('../models/User');

const resolvers = {
    User: {
      username: () => {
        return 'Volodya';
      },
      email: () => {
        return 'Volodya';
      }
    }
  };
  
  module.exports = resolvers;