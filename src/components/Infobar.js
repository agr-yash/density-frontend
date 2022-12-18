import React from "react";
import InfoItem from "./InfoItem";

import { infoItems } from "../contants";

const Infobar = ({ price }) => {
  return (
    <div className="infobar">
      <div className="stock-name">ETHUSDT</div>
      <div className="stock-price">${price}</div>
      {infoItems.map((item, index) => {
        return <InfoItem item={item} key={index} />;
      })}
    </div>
  );
};

export default Infobar;
