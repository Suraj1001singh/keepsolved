import React from "react";
import { Typography } from "@mui/material";

const index = ({ topic }) => {
  return (
    <div style={{ background: "linear-gradient(180deg, rgba(73, 225, 128, 0.34) 10.42%, rgba(56, 198, 107, 0.221395) 41.67%, rgba(73, 225, 128, 0) 100%)", borderRadius: "20px", padding: ".4rem 1rem", margin: "5px" }}>
      <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "normal", fontSize: "14px", lineHeight: "16px", textAlign: "center", color: "#615C5C" }}>{topic}</Typography>
    </div>
  );
};

export default index;
