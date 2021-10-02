import React from "react";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";

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
  const API = "https://rickandmortyapi.com/api/character/";
  const [favorites, dispatch] = React.useReducer(favoriteReducer, initialState);
  const [search, setSearch] = React.useState("");
  const searchInput = React.useRef(null);

  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  const handleSearch = React.useCallback(() => {
    return setSearch(searchInput.current.value);
  }, []);

  const filteredUsers = React.useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );
  return (
    <div className="Characteres">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      {filteredUsers.map((character) => {
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
