import React from "react";
import { Card } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { removeDislike } from "./dislikesSlice";

const Dislikes = () => {
  const dislikes = useSelector((state) => state.dislikes);
  const dispatch = useDispatch();

  const removeMovie = (item) => {
    dispatch(removeDislike(item));
  };

  return (
    <>
      {dislikes.length ? (
        dislikes.map((item, i) => (
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
          <h3>No dislikes yet</h3>
        </Card>
      )}
    </>
  );
};

export default Dislikes;
