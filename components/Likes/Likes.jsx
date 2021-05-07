import React from "react";
import { List, AddButton, RemoveButton } from "./styles";
import { useSelector } from "react-redux";

const Likes = () => {
  const likesIds = useSelector((state) => state.likes);
  const showMovie = () => {
    // show selected movie
  };

  const removeMovie = () => {
    // remove movie from likes list
  };

  return (
    <List>
      {likesIds?.map((item, i) => (
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

export default Likes;
