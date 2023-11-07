function likePost() {
  fetch('/like.json', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
      document.querySelector('[onclick="likePost()"]').innerText = 'Me gusta (' + data.likes + ')';
      document.querySelector('[onclick="dislikePost()"]').innerText = 'No me gusta (' + data.dislikes + ')';
    });
}
 
function dislikePost() {
  fetch('/dislike.json', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
      document.querySelector('[onclick="likePost()"]').innerText = 'Me gusta (' + data.likes + ')';
      document.querySelector('[onclick="dislikePost()"]').innerText = 'No me gusta (' + data.dislikes + ')';
    });
}
