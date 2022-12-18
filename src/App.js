import "./App.css";
import { useState } from "react";
import { Typography } from "@mui/material";
import CandleChart from "./components/CandleChart";

function App() {
  const [price, setPrice] = useState(0);

  let ws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");
  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    setPrice(parseFloat(stockObject.p).toFixed(2));
  };

  return (
    <div>
      <Typography variant="h4">Ethereum Live Price Update : </Typography>
      <Typography variant="h3">{price}</Typography>
      <CandleChart />
    </div>
  );
}

export default App;