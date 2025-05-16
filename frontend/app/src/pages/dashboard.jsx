// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import OrderForm from "../components/orderForm";
import Orders from "../components/orderBook";
import Trades from "../components/tradeHistory";
import Navbar from "../components/nav";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [Token, setUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    
    setUser(token);
    if (!token) {
      //alert("Please login to access the dashboard.");
        navigate("/");
    }

  
  }, [Token]);

  return (
    Token && (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 p-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6">Welcome to Your Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">💼 Place New Order</h2>
              <p className="text-gray-600 mb-4">Buy or sell tokens at your price.</p>
              <a href="/orderForm" className="text-indigo-600 hover:underline font-medium">Go to Order Form →</a>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">📈 Trade History</h2>
              <p className="text-gray-600 mb-4">Check your past completed trades.</p>
              <a href="/trade" className="text-indigo-600 hover:underline font-medium">View Trades →</a>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">👛 Wallet</h2>
              <p className="text-gray-600 mb-4">View your ETH and USDT balances.</p>
              <a href="/wallet" className="text-indigo-600 hover:underline font-medium">Check Wallet →</a>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Dashboard;
