import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}
function Article() {
  return (
    <article className="article">
      <h2 className="article__title">I am an h2</h2>
      <label htmlFor="article-input">Wanna know more about React?</label>
      <input type="text" id="article-input" />
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(web_framework)"
      >
        Click here
      </a>
    </article>
  );
}
