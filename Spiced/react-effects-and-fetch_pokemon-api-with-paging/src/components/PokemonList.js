import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [previousUrl, setPreviousUrl] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
        setPreviousUrl(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  const handleNextPage = () => {
    setOffset(offset + 20);
  };

  const handlePreviousPage = () => {
    if (offset > 0) {
      setOffset(offset - 20);
    }
  };

  return (
    <main>
      <button
        type="button"
        onClick={handlePreviousPage}
        disabled={!previousUrl}
      >
        Previous Page
      </button>
      <button type="button" onClick={handleNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
