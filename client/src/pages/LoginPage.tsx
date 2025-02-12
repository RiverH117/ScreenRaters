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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-neon-green-400 text-5xl font-bold mb-6">ScreenRaters</h1>
      
      <div className="bg-white rounded-lg shadow-lg px-8 py-10 w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-gray-900 mb-4">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-medium">Username</span>
            <input
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          
          <label className="block">
            <span className="text-gray-700 font-medium">Password</span>
            <input
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button
            className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-all"
            type="submit"
          >
            Continue
          </button>

          <p className="text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link to="/create-account" className="text-green-500 font-semibold hover:underline">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
