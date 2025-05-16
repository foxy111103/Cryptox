import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./layout";
import Navbar from "./nav";

export default function OrderBook() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/order/getOrder").then((res) => setOrders(res.data.orders));
  }, []);

  return (
    
    <Layout>
    
    <div>
      <h2 className="text-xl font-bold">Open Orders</h2>
      <ul>
        {orders.map((o) => (
          <li key={o._id}>{o.type} {o.amount} {o.token} @ {o.price}</li>
        ))}
      </ul>
    </div>
    </Layout>
  );
}
