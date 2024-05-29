import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1332,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 1333,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1334,
      name: "🍑 Peach",
      color: "pink ",
    },
    {
      id: 1335,
      name: "🍒 Cherry",
      color: "red",
    },
    {
      id: 1336,
      name: "🍍 Pineapple",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
