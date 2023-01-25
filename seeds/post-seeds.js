const Post = require("../models/Post")

const postData = [
  {
    posted_by: "Tom Smith",
    post_title: "Top 10 CSS tips",
    post_content: "Knowledge of CSS is a fundamental skill in the web development space. However, implementing certain web design patterns with just CSS can be a frustrating task, and often requires an in-depth understanding of it." ,
    //date_created: "01//01/2023",
    user_id: "3"
  },
  {
    posted_by: "Rebecca Black",
    post_title: "How to build a website",
    post_content: "HTML is the standard markup language used to display documents in a web browser. First developed by Tim Berners Lee in 1990 while working at the European Organization for Nuclear Research (CERN).",
    //date_created: "06/01/2023",
    user_id: "5"
  },
  {

    posted_by: "Caylaya Undertone",
    post_title: "What is the best new coding language to learn?",
    post_content: "Whether you are looking to begin coding as a hobby, a new career, or just to enhance your current role, the first thing you will have to do is decide which programming language you want to start with.",
    //date_created: "10/01/2023",
    user_id: "1"

  },
  {
    posted_by: "Jerry Summers",
    post_title: "Python vs Java",
    post_content: "Some battles seem unwinnable and have apparently been raging forever. Star Wars vs. Star Trek. Cats vs. dogs. Apple vs. Samsung.But when it comes to software development, different conflicts tend to come up." ,   
    //date_created: "15/01/2023",
    user_id: "7"
  }
  ];

  const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;  
