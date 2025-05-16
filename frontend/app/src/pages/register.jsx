import { useState } from "react";
import axios from "axios";
import Layout from "../components/layout";

export default function Register() {
  const [form, setForm] = useState({ name:"", email: "", password: "", AccountAddress: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register", form);
    alert("Registered!");
  };

  return (
    <Layout>
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-3">
        <input
        type="text"
        placeholder="Name"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
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
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <input
        type="text"
        placeholder="Ethereum Testnet Address"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, AccountAddress: e.target.value })}
      />
      <button className="bg-blue-500 text-white px-4 py-2">Register</button>
    </form>
    </Layout>
  );
}
