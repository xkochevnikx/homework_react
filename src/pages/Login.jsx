import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/UI/Button/MyButton";
import MyInput from "../components/UI/Input/MyInput";
import { authContext } from "../context/AuthContextProvider";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(authContext);
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    navigate("/posts");
  }
  return (
    <div>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="введите логин" />
        <MyInput type="text" placeholder="введите логин" />
        <MyButton type="submit"> войти </MyButton>
      </form>
    </div>
  );
};

export default Login;
