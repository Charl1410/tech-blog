// Update a post form handler
const updateFormHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute("data-id")) {
      //grab post id
      const id = event.target.getAttribute("data-id");
      // Grab title and post content
      const postContent = document.querySelector(".post-content").value.trim();
      const titletUpdate = document.querySelector(".post-title").value.trim();
      console.log(postContent);
      console.log(titletUpdate);
      console.log({id})
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          post_title: titletUpdate,
          post_content: postContent,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        // replace url
        document.location.replace("/dashboard");
      } else {
        // console log an error message
        console.log(response.statusText);
      }
    }
  };
  
  // Delete a post
  const deletePost = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const postId = event.target.getAttribute("data-id");
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        body: JSON.stringify({
          id: postId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        // redirect to dashboard
        document.location.href = "/";
      } else {
        // console log an error message
        console.log(response.statusText);
      }
    }
  };
  
  document.querySelector("#delete-btn").addEventListener("click", deletePost);
  
  document
    .querySelector("#update-post")
    .addEventListener("click", updateFormHandler);