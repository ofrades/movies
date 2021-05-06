import React, { useState, useEffect } from "react";
import { useQuery, useIsFetching } from "react-query";
import { getRandomMovies } from "../services/getRandomMovies";
import { global } from "../stitches.config.js";
import {
  Container,
  Card,
  Status,
  ConvertTemp,
  Celsius,
  Fahrenheit,
} from "./styles";
import Loader from "./Loader";
import Search from "./Search";
import ListFavs from "./ListFavs";
import Drag from "./Drag";

const globalStyles = global({
  body: {
    margin: 0,
    backgroundColor: "$grey800",
    color: "$grey100",
    fontFamily: "$mono",
  },
});

const Random = () => {
  const isFetching = useIsFetching();
  const [searchQuery, setSearchQuery] = useState();
  const [like, setLike] = useState();
  const [id, setId] = useState(Math.floor(Math.random() * 1000));
  const [arrMovies, setArrMovies] = useState(
    // Get movies array from localStorage
    typeof window !== "undefined"
      ? localStorage.getItem("movies") !== null
        ? JSON.parse(localStorage.getItem("movies"))
        : []
      : []
  );

  const queryRandomMovie = useQuery(
    ["random", id],
    async () => await getRandomMovies(id),
    {
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    setId(Math.floor(Math.random() * 1000));
  }, [like]);

  globalStyles();
  return (
    <Container>
      <Card initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <Status status={queryRandomMovie.status}>
          {queryRandomMovie.isError && <p>{searchQuery} error fetching...</p>}
        </Status>
        <Search
          setArrMovies={setArrMovies}
          setSearchQuery={setSearchQuery}
          isFetching={isFetching}
        />
        {queryRandomMovie.isLoading ? (
          <Loader />
        ) : (
          <>
            <pre>Title: {queryRandomMovie.data.title}</pre>
            <Drag
              setLike={setLike}
              img={`https://image.tmdb.org/t/p/w500/${queryRandomMovie.data.poster_path}`}
            />
            <pre>Release Date: {queryRandomMovie.data.release_date}</pre>
            <pre>Vote Average: {queryRandomMovie.data.vote_average}</pre>
            {arrMovies && (
              <ListFavs
                arrMovies={arrMovies}
                setArrMovies={setArrMovies}
                setSearchQuery={setSearchQuery}
              />
            )}
          </>
        )}
      </Card>
    </Container>
  );
};

export default Random;
