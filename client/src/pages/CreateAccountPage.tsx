import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const CreateAccountPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle account creation logic here
    navigate("/login");
  };

  return (
    <div>
      <NavBar />
      <div>
        <h1>Create Account</h1>
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
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
