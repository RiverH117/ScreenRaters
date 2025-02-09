import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import React from "react";

interface LoginPageProps {
  onLogin: (userData: { username: string; password: string }) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      onLogin(data);
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  return (
    <div className="justify-items-center mt-20">
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
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button
          className="bg-gray-500 hover:bg-gray-300 rounded font-bold py-2 px-4 mt-4"
          type="submit"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/create-account">Create one here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
