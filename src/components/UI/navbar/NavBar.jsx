import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../../context/AuthContextProvider";
import MyButton from "../Button/MyButton";

const NavBar = () => {
  const { setIsAuth } = useContext(authContext);
  const navigate = useNavigate();

  function logout() {
    setIsAuth(false);
    localStorage.removeItem("auth");
    navigate("/login");
  }
  return (
    <div className="navbar">
      <div className="navbar_links">
        <Link to="/about">about</Link>
        <Link to="/posts">posts</Link>
        <MyButton onClick={logout}>выйти</MyButton>
      </div>
    </div>
  );
};

export default NavBar;
