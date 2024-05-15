console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const createNewPost = () => {
  const post = document.createElement("article");
  post.classList.add("post");

  const postContent = document.createElement("p");
  postContent.classList.add("post__content");
  postContent.textContent = "This is the content of the new post.";

  const postFooter = document.createElement("footer");
  postFooter.classList.add("post__footer");

  const usernameSpan = document.createElement("span");
  usernameSpan.classList.add("post__username");
  usernameSpan.textContent = "@newuser";

  const newLikeButton = document.createElement("button");
  newLikeButton.classList.add("post__button");
  newLikeButton.dataset.js = "like-button";
  newLikeButton.textContent = "♥ Like";
  newLikeButton.addEventListener("click", handleLikeButtonClick);

  postFooter.append(usernameSpan, newLikeButton);
  post.append(postContent, postFooter);

  document.body.append(post);
};

createNewPost();
