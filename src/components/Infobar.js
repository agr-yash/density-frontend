import React from "react";
import InfoItem from "./InfoItem";

import stock_logo from "../images/stock-logo.svg";

import { infoItems } from "../contants";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Infobar = ({ price }) => {
  return (
    <div className="infobar">
      <div className="stock-info">
        <div className="stock-logo">
          <img src={stock_logo} alt="stock-logo" />
        </div>
        <div className="stock">
          <div className="stock-name">ETHUSDT</div>
          <div className="stock-description">Perpetual</div>
        </div>
        <div className="dropdown">
          <KeyboardArrowDownIcon style={{ color: "#E2FF6F" }} />
        </div>
        <div className="vertical"></div>
      </div>
      <div className="stock-price">${price}</div>
      {infoItems.map((item, index) => {
        return <InfoItem item={item} key={index} />;
      })}
    </div>
  );
};

export default Infobar;
