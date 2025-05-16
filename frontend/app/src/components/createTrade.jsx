import { use, useEffect, useState } from "react";
import axios from "axios";
import Layout from "./layout";
import { jwtDecode } from "jwt-decode";


export default function CreateTrade({}) {

  const [form, setForm] = useState({type: "buy", token: "ETH", amount: "", price: "" });
    const [userid, setUser] = useState(null);
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      const decoded = jwtDecode(token);
      const userId = decoded.id;
      setUser(userId);
    }, [userid]);
   const submitOrder = async (e) => {
    e.preventDefault();
    console.log("User ID:", userid);
    
    const payload={
        userId: userid,
        type: form.type,
        token: form.token,
        amount: form.amount,
        price: form.price
    }

    await axios.post("http://localhost:5000/api/trade/Order", payload);
    alert("Order placed!");
  };


  return (
    <Layout>
    <form onSubmit={submitOrder} className="space-y-3">
      <select onChange={(e) => setForm({ ...form, type: e.target.value })}>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </select>

      <input type="text" placeholder="Token (e.g., ETH)" onChange={(e) => setForm({ ...form, token: e.target.value })} />
      <input type="number" placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <input type="number" placeholder="Amount" onChange={(e) => setForm({ ...form, amount: e.target.value })} />
      <button className="bg-green-600 text-white px-4 py-2">Place Order</button>
    </form>
    </Layout>
  );
}
