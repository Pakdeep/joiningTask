import React from "react";
import "./movieItem.css";
const MovieItem = (props) => {
  return (
    <div className="movieItem">
      <div className="poster">
        <img src={props.poster} alt="this is poster part" />
      </div>
      <div className="about">
        <h3>Name: {props.title}</h3>
        <h3>Released Year: {props.year}</h3>
        <h3>Rating: {props.production}</h3>
      </div>
    </div>
  );
};

export default MovieItem;
