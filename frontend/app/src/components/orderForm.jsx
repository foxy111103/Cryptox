import { useState } from "react";
import axios from "axios";
import Layout from "./layout";
import { jwtDecode } from "jwt-decode";


export default function OrderForm({}) {

  const [form, setForm] = useState({type: "buy", token: "ETH", amount: "", price: "" });
   
  const submitOrder = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
    const decoded = jwtDecode(token);
    const userid = await decoded.id;
    // if (!userid) {
    //   console.error("No user ID found");
    //   return;
    // }
    // await setForm({...form,userId: userid});
    // console.log("Form Data:", form);

    await axios.post("http://localhost:5000/api/order/createOrder", {userid,form});
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
