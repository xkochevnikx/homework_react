import React from "react";
import MyButton from "../components/UI/Button/MyButton";
import MyInput from "../components/UI/Input/MyInput";

const Login = () => {
  return (
    <div>
      <form>
        <MyInput type="text" placeholder="введите логин" />
        <MyInput type="text" placeholder="введите логин" />
        <MyButton type="submit"> войти </MyButton>
      </form>
    </div>
  );
};

export default Login;
