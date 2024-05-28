import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting type="Hello everynyan" name="Anime" emoji="😺" />
      <Greeting type="Good morning all" name="Formal greting" emoji="🧑🏻‍💼" />
      <Greeting type="Greeting your majesty" name="Royal" emoji="🧐" />
    </div>
  );
}

function Greeting({ type, name, emoji }) {
  return (
    <div>
      {type}
      <span role="img" aria-label={name}>
        {""}
        {emoji}
      </span>
    </div>
  );
}
