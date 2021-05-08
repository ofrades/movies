import React from "react";
import { List, Card, RemoveButton } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { removeLike } from "./likesSlice";

const Likes = () => {
  const likes = useSelector((state) => state.likes);
  const dispatch = useDispatch();

  const removeMovie = (item) => {
    // remove movie from likes list
    dispatch(removeLike(item));
  };

  return (
    <>
      {likes.length ? (
        likes.map((item, i) => (
          <Card key={i} title="Show movie">
            <h3>{item.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
            <button title="Remove movie" onClick={() => removeMovie(item)}>
              Remove 🗑️
            </button>
          </Card>
        ))
      ) : (
        <Card title="Show movie">
          <h3>No likes yet</h3>
        </Card>
      )}
    </>
  );
};

export default Likes;
