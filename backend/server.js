const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Routes
app.use("/api/auth", require("./route/auth"));
app.use("/api/order", require("./route/order_route"));
app.use("/api/trade", require("./route/trade_route"));
app.use("/api/balance", require("./route/balance_route"));

const path = require('path');

app.use(express.static(path.join(__dirname, '../frontend/app/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/app/dist/index.html'));
});

app.get("/ping", async (req, res) => {
  try {
      const conn = mongoose.connection.readyState;
      res.send(conn === 1 ? "Connected to MongoDB" : "Not connected");
  } catch (e) {
      res.status(500).send("Error");
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));