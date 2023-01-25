const router = require("express").Router();
const { Post, User, Comments } = require("../models");
const withAuth = require('../utils/auth');

//get request to find all the posts in the database
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
        //inclduning the linked name from the user model for that post
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
        //and the linked comments content
          model: Comments,
          attributes: ["text"],
        //and the user name
          include: [{ model: User, attributes: ["name"] }],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    //rendering through the homepage handlebars passing in posts data
    //passing through logged in data
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get request for indivudla posts 
router.get("/post/:id", async (req, res) => {
  try {
//finding the post by priamry key
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comments,
          attributes: ["text"],
          include: [{ model: User, attributes: ["name"] }],
        },
      ],
    });

    const post = postData.get({ plain: true });
    console.log(post,"this is before the render");

    res.render("singlepost", {
     
      post,
      logged_in: req.session.logged_in,
      
    });
    console.log(post,"this is after the render");
  } catch (err) {
    res.status(500).json(err);
  } 
});

//route to serve up the login page 
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
    // if they are logged in redirect to the profile page
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

//route to serve up the signup page 
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('signup');
});

//route to serve up the profile page 
router.get('/profile', withAuth, async (req, res) => {
  console.log("yo")
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        { 
          model: Post,
          include: [{model: User, attributes: ["name"]}]
         }]
    });

    const user = userData.get({ plain: true });
    console.log(user)

    res.render('profile', {
      ...user,
      logged_in: true
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
