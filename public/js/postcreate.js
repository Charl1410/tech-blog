const newPostHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#post-name').value.trim();
    const post_content = document.querySelector('#post-desc').value.trim();
    console.log(post_title, post_content)

    if (post_title && post_content) {
      const response = await fetch("/api/posts", {
        method: 'POST',
        body: JSON.stringify({ post_title, post_content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // console.log(name, description + "console log 2")

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/projects/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert('Failed to delete project');
  //     }
  //   }
  // };
  
  document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);
  
  //document.querySelector('.project-list').addEventListener('click', delButtonHandler);
  
