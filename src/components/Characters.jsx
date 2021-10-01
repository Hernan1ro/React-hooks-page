import React from "react";

const Characters = () => {
  const [characters, setCharacters] = React.useState([]);
  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);
  return (
    <div className="Characteres">
      {characters.map((character) => {
        return <h2 key={character.id}>{character.name}</h2>;
      })}
    </div>
  );
};

export default Characters;
