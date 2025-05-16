// src/components/Profile.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import Layout from "../components/layout";

const Profile = () => {
  const [userdata, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const userId = decoded.id;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
       await axios.get(`http://localhost:5000/api/auth/getUser?userId=${userId}`).then((res) => {
          
          setUser(res.data);
        });
        //console.log("User Data:", userdata);
      } catch (err) {
        console.error("Unauthorized or error fetching profile:", err);
        setUser(null);
      }
    };

    if (token) {
      fetchProfile();
    } else {
      setUser(null);
    }
  }, [token]);

  if (!token) {
    return <p>⛔ Please login to access your profile.</p>;
  }

  return (
    <Layout>
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">👤 User Profile</h2>
      {userdata ? (
        <div className="space-y-2">
          <p><strong>User ID:</strong> {userdata.user._id}</p>
          <p><strong>Name:</strong> {userdata.user.name}</p>
          <p><strong>Email:</strong> {userdata.user.email}</p>
          <p><strong>Account:</strong> {userdata.user.AccountAddress}</p>
        </div>
      ) : (
        <p>🔄 Loading user data...</p>
      )}
    </div>
    </Layout>
  );
};

export default Profile;
