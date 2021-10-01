import React from "react";

const initialState = { favorites: [] };
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = React.useState([]);
  const [favorites, dispatch] = React.useReducer(favoriteReducer, initialState);
  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);
  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };
  return (
    <div className="Characteres">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}
      {characters.map((character) => {
        return (
          <div className="item" key={character.id}>
            <h2>{character.name}</h2>,
            <button
              key={character.name}
              type="button"
              onClick={() => {
                handleClick(character);
              }}
            >
              Agregar a favoritos
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
