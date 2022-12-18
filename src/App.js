import { useEffect, useState } from "react";
// import CandleChart from "./components/CandleChart";
import Navbar from "./components/Navbar";
import Infobar from "./components/Infobar";

function App() {
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
      {/* <CandleChart /> */}
    </div>
  );
}

export default App;
