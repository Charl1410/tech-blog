console.log('hi')

const commentSection = document.querySelectorAll("#comment-section");
const viewCommentBtns = document.querySelectorAll(".view-comment-btn");
let commentsVisible = false;

function showHideComments(e) {

    const postID = e.target.id;
    // console.log(postID)

    if(commentsVisible) {
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

