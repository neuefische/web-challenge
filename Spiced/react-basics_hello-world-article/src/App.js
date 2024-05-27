import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello world!</h1>
      <p>I am a paragraph</p>
      <p>more content</p>
    </article>
  );
}
