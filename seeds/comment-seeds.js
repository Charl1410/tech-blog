const Post = require("../models/Comments")

const commentData = [
  {
    text: "This article is amazing!",
    user_id: "3",
    post_id: "1"
  }, {
    text: "I'm going to save this one for later",
    user_id: "2",
    post_id: "1"
  }, {
    text: "This is really interesting",
    user_id: "3",
    post_id: "2"
  }, {
    text: "How did you research this?",
    user_id: "3",
    post_id: "3"
  },
  ];

  const seedComments = () => Post.bulkCreate(commentData);

module.exports = seedComments;  
