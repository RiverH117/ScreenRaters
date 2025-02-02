import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
