import React, { useState, useEffect } from "react";
import { InputContainer, Input, AddMovie, LoadingIcon } from "./styles.js";

const Search = ({ setArrMovies, setSearchQuery, isFetching }) => {
  const [movieFromInput, setMovieFromInput] = useState();

  const handleInput = (e) => {
    setMovieFromInput(e.target.value);
  };

  const addMovie = () => {
    setArrMovies((oldArr) =>
      oldArr.includes(movieFromInput)
        ? [...oldArr]
        : [...oldArr, movieFromInput]
    );
  };

  useEffect(() => {
    if (movieFromInput?.length > 2) {
      const delayDebounceFn = setTimeout(() => {
        setSearchQuery(movieFromInput);
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [movieFromInput]);

  return (
    <InputContainer>
      <Input
        placeholder="Search..."
        value={movieFromInput}
        type="text"
        onChange={handleInput}
        aria-label="Search"
        aria-required="true"
        autoFocus
      />

      <AddMovie onClick={() => addMovie()}>
        {isFetching !== 0 ? (
          <a>
            <LoadingIcon>⏳</LoadingIcon>
          </a>
        ) : (
          <a title="Add to list">📋</a>
        )}
      </AddMovie>
    </InputContainer>
  );
};

export default Search;
