import { useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";

export default function Login() {
  const [form, setForm] = useState({email: "", pass: ""});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/auth/login", form);
    const token = response.data.token;

    localStorage.setItem("token", token);

    const decoded = jwtDecode(token);
    const userId = decoded.id;

    console.log("User ID from token:", userId);

    localStorage.setItem("userId", userId);
    navigate("/dashboard");
    alert("Logged in!");
  };

  return (
     <Layout>
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Crypto Exchange Login</h1>

    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-3">
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, pass: e.target.value })}
      />
      <button className="bg-blue-500 text-white px-4 py-2">Login</button>
      <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-indigo-600 font-medium cursor-pointer hover:underline"
          >
            Register
          </button>
        </p>
      
    </form>
    </Layout>
  );
}
