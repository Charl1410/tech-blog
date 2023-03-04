# MVC tech blog 

https://mvc-posting-blog.herokuapp.com

 ## Table of contents

  * [Description](#Description)
  * [Instillation](#Instillation)
  * [Usage](#Usage)
  * [Developments](#Developments)
  * [Licence](#License)
  * [Questions](#Questions)
  
## Description

The purpose of this application is to provide users with a social media blog platform specific to coding. Users can view all existing posts from other users as well as create their own account and view their profile. Individual users can generate and view their own posts from their profile as well as seeing them on the homepage once created. Additionally, users can interact with post from other users by commenting! Posts can also be viewed individually in with a large format by clicking the title. Users also have the ability to delete and edit there own posts.


## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Initialisation
To use this application node.js must be installed: https://nodejs.org/en/download/ <br />

**The packages required are:**
 * **bcrypt**  @5.0.0
 * **connect-session-sequelize** @7.0.4 
 * **dotenv** @8.2.0 
* **express** @4.17.1 
* **express-handlebars** @5.2.0 
* **mysql2** @2.2.5 
* **sequelize** @6.3.5 

All dependencies should already be in the package.json file and installed through running ```npm i``` in the terminal.

## Usage
To use this application all dependencies must be installed. <br>

Check out the repo: https://github.com/Charl1410/tech-blog

To run the application: https://mvc-posting-blog.herokuapp.com

* The data base must be created by logging into mysql ```mysql -u root -p``` and running the command ```source db/schema.sql```
* Quit mysql by running the command ```quit;```
* To seed the data base run ```npm run seed```
* Finally run ```npm run start``` and navigate to your url route localhost:3001 in your to access the website locally 
* Or follow this link to access the deployed application through Heroku: 

## Screenshots 

![]()

![]()

![]()

## Developments 
* Being able to access the edit post page straight from the dashboard. I struggled to get the is owner data passed through into the dashboard so the button will render in the post-item partial. 

* The view comments button does not work in the dahboard due to the way the specific comment section is targeted in the array using `postID - 1`. This only work in the homepage age the post is is linear just like the number of comment sections present.

* Users are not currently able to edit or delete comments.


## Licensing 

This project was not licensed.