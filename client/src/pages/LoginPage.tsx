import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";

interface LoginPageProps {
  onLogin: (data: { token: string; user: { username: string; password: string } }) => void;
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
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: formData.username, password: formData.password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      
      // Include token in the response from API
      onLogin({
        token: data.token,  // Ensure your API returns this token
        user: {
          username: formData.username,
          password: formData.password,
        },
      });
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-neon-green-400 text-5xl font-bold mb-6">ScreenRaters</h1>
      
      <div className="bg-white rounded-lg shadow-lg px-8 py-10 w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-gray-900 mb-4">Login</h2>
    
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-medium">Username</span>
            <input
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          
          <label className="block">
            <span className="text-gray-700 font-medium">Password</span>
            <input
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
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
 
//   return (
//     <div className="justify-items-center mt-20">
//       <form
//         className="bg-white shadow-md rounded px-8 py-8 pt-8 mb-4"
//         onSubmit={handleSubmit}
//       >
//         <h1 className="text-center text-2xl font-bold mb-4">Login</h1>

//         <label>
//           Username:
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </label>
//         <button
//           className="bg-gray-500 hover:bg-gray-300 rounded font-bold py-2 px-4 mt-4"
//           type="submit"
//         >
//           Login
//         </button>
//         <p className="text-center mt-4">
//           Don't have an account?{" "}
//           <Link to="/create-account">Create one here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
