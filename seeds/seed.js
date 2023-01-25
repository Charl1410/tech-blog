const sequelize = require('../config/connection');
const seedComments = require('./comment-seeds');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  await seedComments();

//   await ();

  process.exit(0);
};

seedAll();
