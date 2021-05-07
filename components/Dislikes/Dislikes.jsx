import React from "react";
import { List, AddButton, RemoveButton } from "./styles";

const Dislikes = () => {
  const showMovie = () => {
    // show selected movie
  };

  const removeMovie = () => {
    // remove movie from likes list
  };

  return (
    <List>
      {["a", "b"]?.map((item, i) => (
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

export default Dislikes;
