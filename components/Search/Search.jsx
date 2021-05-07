import React, { useState, useEffect } from "react";
import { InputContainer, Input, AddMovie, LoadingIcon } from "./styles.js";

const Search = ({ setSearchQuery, isFetching }) => {
  const [movieFromInput, setMovieFromInput] = useState();

  const handleInput = (e) => {
    setMovieFromInput(e.target.value);
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
        aria-label="Search"
        onChange={handleInput}
        aria-required="true"
        autoFocus
      />

      <AddMovie>
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
