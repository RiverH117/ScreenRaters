import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import bcrypt from "bcryptjs";

const CreateAccountPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = { username, password: hashedPassword };
    localStorage.setItem(username, JSON.stringify(userData));
    // Handle account creation logic here
    navigate("/login");
  };

  return (
    <div className="w-full max-w-xs">
      <div className="flex justify-center mt-20">
        <form
          className="bg-gray shadow-md rounded px-8 py-8 pt-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h1>Create Account</h1>
          <label>
            Username:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
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
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
