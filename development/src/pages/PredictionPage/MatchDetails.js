import React from "react";
import { DetailList } from "../../helper/DetailList";
import DetailItem from "./DetailItem";
import "../../styles/MatchDetails.css";
import { brown } from "@mui/material/colors";

function MatchDetails () {
  return (
    <div className="menu">
        <h1> Prediction Page</h1>
      <div className="menuList">
        {DetailList.map((menuItem, key) => {
          return (
            <DetailItem
              key={key}
              name={menuItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MatchDetails;