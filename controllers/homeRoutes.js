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
        console.log(posts);

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
      ],
    });

    const post = postData.get({ plain: true });
    //renders the data from the single post through the singlepost hbs template 
    res.render("singlepost", {
     
      post,
      logged_in: req.session.logged_in,
      isOwner: req.session.user_id === post.user_id,
      
    });
    console.log(post,"this is after the render");
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
    console.log(user)

    res.render('dashboard', {
      ...user,
      logged_in: true
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


//Update Post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatePost = {
      title: req.body.title,
      post_content: req.body.post_content,
    };

    const postData = await Post.update(updatePost, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
