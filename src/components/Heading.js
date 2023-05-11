import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
      <Link to="/" className="heading">
        <h1 >Movies</h1>
      </Link>
  );
};

export default Heading;
