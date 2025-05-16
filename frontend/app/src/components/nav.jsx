// components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";



function Navbar() {
    const [Token, setToken] = useState(null);
    const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = async() => {
    await localStorage.removeItem("token");
    navigate("/");
  };


  return (
    {token} && (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/dashboard" className="text-xl font-bold text-indigo-600">CryptoX</Link>

        <div className="flex space-x-6">
        <Link to="/profile" className="text-gray-700 hover:text-indigo-600 transition">Profile</Link>
        <Link to="/orderForm" className="text-gray-700 hover:text-indigo-600 transition">Order Form</Link>
          <Link to="/orders" className="text-gray-700 hover:text-indigo-600 transition">Orders</Link>
          <Link to="/createTrade" className="text-gray-700 hover:text-indigo-600 transition">Trade</Link>
          <Link to="/trade" className="text-gray-700 hover:text-indigo-600 transition">Trade History</Link>
          <Link to="/wallet" className="text-gray-700 hover:text-indigo-600 transition">Wallet</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 transition">Dashboard</Link>
        </div>

        <button
          onClick={logout}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Logout
        </button>
      </div>
    </nav>
    )
  );
}

export default Navbar;
