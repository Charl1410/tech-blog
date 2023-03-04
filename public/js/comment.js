const newCommentHandler = async (event) => {
  event.preventDefault();

  const id = event.target.id.split('_')[2];

  const commentField = document.getElementById('comment_' + id);
  const text = commentField.value.trim();

  if (text) {
    const response = await fetch("/api/comments", {
      method: 'POST',
      body: JSON.stringify(
        {
          text: text,
          post_id: id
        }
      ),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};



const forms = document.querySelectorAll('.new-comment-button');
forms.forEach((form) => {
  form.addEventListener('click', newCommentHandler);
});
