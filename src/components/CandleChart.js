import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const CandleChart = () => {
  return (
    <div className="candle-chart" style={{ height: "82vh" }}>
      <AdvancedRealTimeChart
        theme="dark"
        width={"100vw"}
        height={"100%"}
      ></AdvancedRealTimeChart>
    </div>
  );
};

export default CandleChart;
