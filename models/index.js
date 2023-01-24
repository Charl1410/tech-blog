const User = require('./User');
const Comments = require('./Comments');
const Post = require('./Post');


User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comments, {
    foreignKey: 'post_id'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id'
});

Comments.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comments };
