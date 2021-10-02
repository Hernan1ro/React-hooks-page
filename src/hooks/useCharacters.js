import React from "react";

const useCharacters = (url) => {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [url]);
  return characters;
};

export default useCharacters;
