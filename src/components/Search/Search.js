import React, { useState } from "react";
import "./search.css";
import { Link } from "react-router-dom";
import { actionCreators } from "../../state";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
const Search = () => {
  const dispatch = useDispatch();
  const { findByYear } = bindActionCreators(actionCreators, dispatch);
  const [year, setYear] = useState();
  const handleChange = (e) => {
    setYear(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };  
  return (
    <div className="search">
      <form action="" onSubmit={handleSubmit} >
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Search by year"
        />
        <Link to="/result">
          <button type="submit" onClick={() => {
            findByYear(year)
          }}>Search</button>
        </Link>
      </form>
    </div>
  );
};

export default Search;
