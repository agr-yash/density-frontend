import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const CandleChart = () => {
  return (
    <div>
      <AdvancedRealTimeChart
        theme="dark"
        width={"100vw"}
        height={600}
      ></AdvancedRealTimeChart>
    </div>
  );
};

export default CandleChart;
