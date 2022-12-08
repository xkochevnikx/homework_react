import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  });

  const authCloud = { isAuth, setIsAuth };
  return (
    <authContext.Provider value={authCloud}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
