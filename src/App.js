import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/navbar/NavBar";

import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}
export default App;
