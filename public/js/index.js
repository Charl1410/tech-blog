
const commentSection = document.querySelectorAll("#comment-section");
const viewCommentBtns = document.querySelectorAll(".view-comment-btn");
let commentsVisible = false;
const editButton = document.querySelectorAll("#edit-post-btn")


function showHideComments(e) {

    const postID = e.target.id;

    if(commentsVisible) {
        //this only works for the homepage because the specific comment links to the id by -1 but this is not the
        //case in the dashboard as the id is the same but the nubmer of comment sections change as there are only your posts
        //showing therefore comment.id does not equal post.id-1 anymore (only on homepage is this the case )
        commentSection[postID -1].style.display = "none";
        e.target.textContent = "View Comments";
        commentsVisible = false;
    } else {
        commentSection[postID -1].style.display = "block";
        e.target.textContent = "Hide Comments";
        commentsVisible = true;
    }}

viewCommentBtns.forEach(function(button) {
    button.addEventListener("click", showHideComments);
});

editButton.forEach(function(button){
    button.addEventListener("click", function() {
        const postID = this.dataset.id;
        window.location.href= "/post/" + postID + "/edit"
    })
});



