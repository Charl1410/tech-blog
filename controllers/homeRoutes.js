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
          attributes: ["text", "date_created"],
        //and the user name
          include: [{ model: User, attributes: ["name"] }],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => {
      const plainPost = post.get({ plain: true });
      plainPost.isOwner = req.session.user_id === plainPost.user_id;
      return plainPost;
    });

    //rendering through the homepage handlebars passing in posts data
    //passing through logged in data
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
      isOwner: req.session.user_id === posts.user_id,

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get request for individual  posts 
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
          attributes: ["text", "date_created"],
          include: [{ model: User, attributes: ["name"] }],
        },
      ]
    });

    const post = postData.get({ plain: true });
    //renders the data from the single post through the singlepost hbs template 
    res.render("singlepost", {
     
      post,
      logged_in: req.session.logged_in,
      isOwner: req.session.user_id === post.user_id,
      
    });
  } catch (err) {
    res.status(500).json(err);
  } 
});

//route to serve up the login page 
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
    // if they are logged in redirect to the dashboard page
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

//route to serve up the signup page 
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});

//route to serve up the dashboard (profile) page 
router.get('/dashboard', withAuth, async (req, res) => {
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

    res.render('dashboard', {
      ...user,
      logged_in: true,
      //isOwner: req.session.user_id === user.user_id,

    });

  } catch (err) {
    res.status(500).json(err);
  }
});


//edit post route 
router.get("/post/:id/edit", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render("edit-post", {
      ...post,
      isLoggedIn: req.session.isLoggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
