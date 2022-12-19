import React, { useEffect, useState } from "react";
import Infobar from "./Infobar";
import Navbar from "./Navbar";

const Outer = () => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let ws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");
    ws.onmessage = (event) => {
      let stockObject = JSON.parse(event.data);
      setPrice(parseFloat(stockObject.p).toFixed(0));
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Infobar price={price} />
    </div>
  );
};

export default Outer;
