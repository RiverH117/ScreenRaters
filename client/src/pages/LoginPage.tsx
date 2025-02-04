import { useState } from "react";
import { Link } from "react-router-dom";
import bcrypt from "bcryptjs";

interface LoginPageProps {
  onLogin: (userData: { username: string; password: string }) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedUser = localStorage.getItem(username);
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const passwordMatch = await bcrypt.compare(password, userData.password);
      if (passwordMatch) {
        onLogin(userData);
      } else {
        alert("Invalid password");
      }
    } else {
      alert("User not found");
    }
  };

  return (
    <div className="object-center">
      <form
        className="bg-white shadow-md rounded px-8 py-8 pt-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-2xl font-bold mb-4">Login</h1>

        <label>
          Username:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="bg-gray-500 hover:bg-gray-300 rounded font-bold py-2 px-4 mt-4"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="">
        <p className="">
          Don't have an account?{" "}
          <Link to="/create-account">Create one here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
