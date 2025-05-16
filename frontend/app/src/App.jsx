import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Navbar from "./components/nav";
import Orders from "./components/orderBook";
import Trade from "./components/tradeHistory";
import Wallet from "./components/wallet";
import OrderForm from "./components/orderForm";
import CreateTrade from "./components/createTrade";


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/orders" element={<><Navbar /><Orders /></>} />
        <Route path="/trade" element={<><Navbar /><Trade /></>} />
        <Route path="/wallet" element={<><Navbar /><Wallet /></>} />
        <Route path="/orderForm" element={<><Navbar /><OrderForm /></>} />
        <Route path="/profile" element={<><Navbar /><Profile /></>} />
        <Route path="/createTrade" element={<><Navbar /><CreateTrade /></>} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
      
      </Routes>
    </BrowserRouter>
  );
}

export default App
