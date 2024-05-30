import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numberInSpace, setNumberInSpace] = useState(0);
  const [peopleInSpace, setPeopleInSpace] = useState([]);
  const [activeCraft, setActiveCraft] = useState("All");

  useEffect(() => {
    async function fetchPeopleInSpace() {
      const response = await fetch("http://api.open-notify.org/astros.json");
      const data = await response.json();
      setNumberInSpace(data.number);
      setPeopleInSpace(data.people);
    }
    fetchPeopleInSpace();
  }, []);

  const filteredPeople =
    activeCraft === "All"
      ? peopleInSpace
      : peopleInSpace.filter((person) => person.craft === activeCraft);

  return (
    <div className="app">
      <main className="container">
        <h1 className="title">People in Space: {numberInSpace}</h1>
        <h2 className="craft">Craft: {activeCraft}</h2>
        <div className="buttons">
          <button
            className="button"
            type="button"
            onClick={() => setActiveCraft("All")}
          >
            All
          </button>
          <button
            className="button"
            type="button"
            onClick={() => setActiveCraft("ISS")}
          >
            ISS
          </button>
          <button
            className="button"
            type="button"
            onClick={() => setActiveCraft("Tiangong")}
          >
            Tiangong
          </button>
        </div>
        {filteredPeople.length > 0 && (
          <ul className="people-list">
            {filteredPeople.map((person) => (
              <li className="person" key={person.name}>
                {person.name}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
