import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//import axios from "axios";
import CreateAccountPage from "./pages/CreateAccountPage";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";
import AuthService from "./utils/auth.js"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const handleLogin = async (data: { token: string, user: {
    username: string;
    password: string;
  }}) => {
    setIsLoggedIn(true);
    setUserName(data.user.username);
    AuthService.login(data.token);

    // Fetch avatar from DiceBear Avatars API
    const avatarUrl = `https://avatar.iran.liara.run/username?username=${encodeURIComponent(
      data.user.username
    )}&background=f4d9b2&color=FF9800`;
    setUserAvatar(avatarUrl);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setUserAvatar("");
  };

  

  return (
    <Router>
      <NavBar
        showLinks={isLoggedIn}
        userName={userName}
        userAvatar={userAvatar}
        onLogout={handleLogout}
      />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
