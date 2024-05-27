import React from "react";
import "./styles.css";

export default function App() {
  return <div>Replace me with your Component!</div>;
}

function HelloWorldArticle() {
  return (
    <article>
    <h1>Hello world!</h1>
    <p>I'm a paragraph</p>
    <p>more content</p>
  </article>
  );
}

export default function App() {
  return <HelloWorldArticle />
}
