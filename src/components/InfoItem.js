import React from "react";

const InfoItem = ({ item }) => {
  return (
    <div>
      <div className="infobar__title">{item.title}</div>
      <div className="infobar__value">{item.value}</div>
    </div>
  );
};

export default InfoItem;
