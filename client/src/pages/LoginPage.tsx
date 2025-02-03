import { useState } from "react";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";

function LoginPage({ onLogin }) {
  const [hasAccount, setAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleLogin = () => {
  //   setIsLoggedIn(false);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = { username, password };
    onLogin(userData);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="email"
            name="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginPage;
