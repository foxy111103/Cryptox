import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import Layout from "./layout";

export default function TradeHistory() {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");


    if (!token) {
      console.error("No token found");
      return;
    }
    const decoded = jwtDecode(token);
    const userId = decoded.id;
    console.log("User ID:", userId);
    axios.get(`http://localhost:5000/api/trade/getTrades?userId=${userId}`).then((res) => setTrades( res.data.history));
    console.log("Trade History:", trades);
  }, []);

  return (
    <Layout>
    <div>
      <h2 className="text-xl font-bold">Trade History</h2>
      <ul>
        {trades.map((t) => (
          <li key={t._id}>
            {t.amount} {t.token} at ${t.price}
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  );
}
