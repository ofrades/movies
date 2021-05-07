import React, { useState, useEffect } from "react";
import { useQuery, useIsFetching } from "react-query";
import { getMovie } from "../../services/getMovie";
import { getRandomMovies } from "../../services/getRandomMovies";
import { global } from "../../stitches.config.js";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../Likes/likesSlice";
import { addDislike } from "../Dislikes/dislikesSlice";
import { Container, Card, Status } from "./styles";
import Loading from "../Loading";
import Search from "../Search";
import Drag from "../Drag";

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
  const [movie, setMovie] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [id, setId] = useState(Math.floor(Math.random() * 1000));

  const likes = useSelector((state) => state.likes);
  const dislikes = useSelector((state) => state.dislikes);

  const dispatch = useDispatch();

  const queryRandomMovie = useQuery(
    ["random", id],
    async () => await getRandomMovies(id),
    {
      refetchOnWindowFocus: false,
      onSuccess: (e) => {
        setMovie(e);
      },
    }
  );
  const queryMovie = useQuery(
    ["movie", searchQuery],
    async () => await getMovie(searchQuery),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      onSuccess: (e) => {
        setMovie(e);
      },
    }
  );
  const handleLike = () => {
    dispatch(addLike(movie.id));
    setId(Math.floor(Math.random() * 1000));
  };

  const handleDislike = () => {
    dispatch(addDislike(movie.id));
    setId(Math.floor(Math.random() * 1000));
  };

  globalStyles();
  return (
    <Container>
      <Card initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <Status status={queryRandomMovie.status}>
          {queryRandomMovie.isError && <p>{searchQuery} error fetching...</p>}
        </Status>
        <Search setSearchQuery={setSearchQuery} isFetching={isFetching} />
        {queryRandomMovie.isLoading ? (
          <Loading />
        ) : (
          <>
            <pre>Title: {movie.title}</pre>
            <Drag
              handleDislike={handleDislike}
              handleLike={handleLike}
              img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <pre>Release Date: {movie.release_date}</pre>
            <pre>Vote Average: {movie.vote_average}</pre>
          </>
        )}
      </Card>
    </Container>
  );
};

export default Random;
