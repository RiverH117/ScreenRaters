import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CreateAccountPage from "./pages/CreateAccountPage";
import "./App.css";
import Footer from './components/Footer';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Favorites from "./pages/Favorites";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <NavBar showLinks={isLoggedIn} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </>
      ) : (
        <div>
          <NavBar showLinks={isLoggedIn} />
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      )}
      <Footer></Footer>
    </Router>
  );
}

export default App;
