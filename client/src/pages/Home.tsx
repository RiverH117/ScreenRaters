import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Movies from "../components/Movies";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to ScreenRaters</h1>
      <p>Your go-to platform for movie and TV show ratings.</p>
      <Movies />
    </div>
  );
};

export default Home;
