import React from "react";
import "./movieItem.css";
const MovieItem = (props) => {
  return (
    <div className="movieItem">
      <div className="poster">
        <img src={props.poster} alt="this is poster part" />
      </div>
      <div className="about">
        <h3>{props.title}</h3>
        <h3>{props.year}</h3>
        <h3>{props.production}</h3>
      </div>
    </div>
  );
};

export default MovieItem;
