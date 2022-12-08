import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/navbar/NavBar";
import AuthContextProvider from "./context/AuthContextProvider";

import "./styles/App.css";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </AuthContextProvider>
  );
}
export default App;
