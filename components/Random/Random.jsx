import React, { useState } from "react";
import { useQuery } from "react-query";
import { getRandomMovies } from "../../services/getRandomMovies";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../Likes/likesSlice";
import { addDislike } from "../Dislikes/dislikesSlice";
import { setMovie } from "../Search/movieSlice";
import { Status, Container } from "./styles";
import Loading from "../Loading";
import Drag from "../Drag";
import { motion } from "framer-motion";

const Random = () => {
  const movie = useSelector((state) => state.movie);
  const inLikes = useSelector((state) => state.likes.includes(movie));
  const inDislikes = useSelector((state) => state.dislikes.includes(movie));
  const [id, setId] = useState(
    movie.id ? movie.id : Math.floor(Math.random() * 1000)
  );
  const dispatch = useDispatch();

  const queryRandomMovie = useQuery(
    ["random", id],
    async () => await getRandomMovies(id),
    {
      refetchOnWindowFocus: false,
      onSuccess: (e) => {
        dispatch(setMovie(e));
      },
    }
  );
  const handleLike = () => {
    setId(Math.floor(Math.random() * 1000));
    if (!inLikes && !inDislikes) {
      dispatch(addLike(movie));
    }
  };

  const handleDislike = () => {
    setId(Math.floor(Math.random() * 1000));
    if (!inLikes && !inDislikes) {
      dispatch(addDislike(movie));
    }
  };

  return (
    <>
      <Status status={queryRandomMovie.status}>
        {queryRandomMovie.isError && <p>Error fetching...</p>}
      </Status>
      {queryRandomMovie.isLoading ? (
        <Loading />
      ) : (
        <Container>
          <motion.h2 whileHover={{ scale: 1.1 }}>🍿 {movie.title}</motion.h2>
          <Drag
            handleDislike={handleDislike}
            handleLike={handleLike}
            img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <motion.h3 whileHover={{ scale: 1.1 }}>
            📅 {movie.release_date}
          </motion.h3>
          <motion.h4 whileHover={{ scale: 1.1 }}>
            ⭐ {movie.vote_average}
          </motion.h4>
        </Container>
      )}
    </>
  );
};

export default Random;
