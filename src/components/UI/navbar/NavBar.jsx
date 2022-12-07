import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar_links">
        <Link to="/about">about</Link>
        <Link to="/posts">posts</Link>
      </div>
    </div>
  );
};

export default NavBar;
