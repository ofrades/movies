import React from "react";
import { getMovies } from "../../services/getMovies";
import { useDispatch } from "react-redux";
import { setMovie } from "./movieSlice";
import { InputContainer, Input } from "./styles.js";

const Search = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    console.log("value", value);
    dispatch(setMovie(value));
  };

  const loadOptions = async (inputValue) => {
    const response = await getMovies(inputValue);
    return response.results;
  };

  return (
    <InputContainer>
      <Input
        cacheOptions
        loadOptions={loadOptions}
        onChange={handleChange}
        getOptionLabel={(e) => e.title}
        getOptionValue={(e) => e.id}
        autoFocus
        placeholder="Search movie..."
      />
    </InputContainer>
  );
};

export default Search;
