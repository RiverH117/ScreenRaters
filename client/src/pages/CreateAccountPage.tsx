import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const CreateAccountPage: React.FC = () => {
  const [accountData, setAccountData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountData({ ...accountData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const hashedPassword = await bcrypt.hash(accountData.password, 10);
    // const userData = {
    //   username: accountData.username,
    //   password: hashedPassword,
    // };

    try {
      const response = await fetch(
        "auth/create-account",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: accountData.username,
            password: accountData.password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Account created", data);
      navigate("/login");
    } catch (error) {
      console.error("Failed to create account", error);
    }
  };

  return (
    <div className="justify-items-center mt-20">
      <form
        className="bg-white shadow-md rounded px-8 py-8 pt-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-2xl font-bold mb-4">Create Account</h1>
        <label>
          Username:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="username"
            value={accountData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={accountData.password}
            onChange={handleChange}
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
  );
};

export default CreateAccountPage;
