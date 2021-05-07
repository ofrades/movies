import React, { useEffect } from "react";
import { List, AddButton, RemoveButton } from "./styles";

const ListFavs = ({ arrMovies, setArrMovies, setSearchQuery }) => {
  const showMovie = (item) => {
    setSearchQuery(item);
  };

  const removeMovie = (item) => {
    setArrMovies(arrMovies.filter((movie) => movie !== item));
  };

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(arrMovies));
  }, [arrMovies]);

  return (
    <List>
      {arrMovies.map((item, i) => (
        <div key={i}>
          <AddButton title="Show movie" onClick={() => showMovie(item)}>
            {item}
          </AddButton>
          <RemoveButton title="Remove movie" onClick={() => removeMovie(item)}>
            🗑️
          </RemoveButton>
        </div>
      ))}
    </List>
  );
};

export default ListFavs;
