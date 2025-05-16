import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from './layout';
import { useEffect, useState } from 'react';

export default function Wallet() {
  const [balances, setBalances] = useState({ ETH: 0, USDT: 0 });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    const decoded = jwtDecode(token);
    const userId = decoded.id;
    console.log("User ID:", userId);
    
    axios.get(`http://localhost:5000/api/balance/getbalance?userId=${userId}`).then((res) => {
        console.log("Balances:", res.data);
        setBalances({
            ETH: res.data.balance.eth,
            USDT: res.data.balance.usdt
        });
      
    });
    
    }   
    }, []);


  return (
    <Layout>
    <div>
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">User Wallet</h1>
      <div className="flex justify-between p-4">
        <div>
          <h2 className="text-xl font-bold">Balances</h2>
          <p>ETH: {balances.ETH}</p>
          <p>USDT: {balances.USDT}</p>
        </div>
    </div>
    </div>
    </Layout>
        
  
    
  );
}